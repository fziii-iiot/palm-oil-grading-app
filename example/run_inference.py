"""
Run Integrated Detection and Classification Inference

CLI tool for running the palm oil fruit detection and classification pipeline.

Usage:
    # Single image
    python run_inference.py --image path/to/image.jpg
    
    # Directory of images
    python run_inference.py --input-dir path/to/images/ --output-dir path/to/results/
    
    # With custom thresholds
    python run_inference.py --image test.jpg --conf-threshold 0.5 --model-variant int8
"""

import os
import sys
import argparse
import time
from pathlib import Path
import cv2

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from pipeline import IntegratedPipeline


def process_single_image(
    pipeline: IntegratedPipeline,
    image_path: str,
    output_dir: str = None,
    show: bool = False
) -> dict:
    """
    Process a single image and optionally save/display results.
    
    Args:
        pipeline: Initialized IntegratedPipeline
        image_path: Path to input image
        output_dir: Directory to save annotated image
        show: Whether to display the result
        
    Returns:
        Results dictionary
    """
    print(f"\nProcessing: {image_path}")
    
    start_time = time.perf_counter()
    results = pipeline.process_image(image_path)
    inference_time = (time.perf_counter() - start_time) * 1000
    
    # Print results
    pipeline.print_results(results)
    print(f"Inference time: {inference_time:.2f} ms")
    
    # Save annotated image
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        output_filename = f"annotated_{Path(image_path).name}"
        output_path = os.path.join(output_dir, output_filename)
        cv2.imwrite(output_path, results['annotated_image'])
        print(f"Saved annotated image to: {output_path}")
    
    # Display if requested
    if show:
        cv2.imshow('Detection Results', results['annotated_image'])
        print("\nPress any key to continue...")
        cv2.waitKey(0)
        cv2.destroyAllWindows()
    
    return results


def process_directory(
    pipeline: IntegratedPipeline,
    input_dir: str,
    output_dir: str,
    show: bool = False
) -> dict:
    """
    Process all images in a directory.
    
    Args:
        pipeline: Initialized IntegratedPipeline
        input_dir: Directory containing input images
        output_dir: Directory to save annotated images
        show: Whether to display results
        
    Returns:
        Summary statistics
    """
    input_path = Path(input_dir)
    
    # Find all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.bmp'}
    image_files = [
        f for f in input_path.iterdir()
        if f.suffix.lower() in image_extensions
    ]
    
    if not image_files:
        print(f"No images found in: {input_dir}")
        return {}
    
    print(f"\nFound {len(image_files)} images to process")
    print("=" * 60)
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Process each image
    all_results = []
    total_detections = 0
    class_counts = {}
    total_time = 0
    
    for i, image_file in enumerate(image_files, 1):
        print(f"\n[{i}/{len(image_files)}] Processing: {image_file.name}")
        
        try:
            start_time = time.perf_counter()
            results = pipeline.process_image(str(image_file))
            inference_time = (time.perf_counter() - start_time) * 1000
            total_time += inference_time
            
            # Save annotated image
            output_filename = f"annotated_{image_file.name}"
            output_path = os.path.join(output_dir, output_filename)
            cv2.imwrite(output_path, results['annotated_image'])
            
            # Update statistics
            num_detections = len(results['detections'])
            total_detections += num_detections
            
            for class_name, count in results['summary'].items():
                class_counts[class_name] = class_counts.get(class_name, 0) + count
            
            print(f"  Detections: {num_detections}")
            print(f"  Time: {inference_time:.2f} ms")
            
            if show:
                cv2.imshow('Detection Results', results['annotated_image'])
                key = cv2.waitKey(0)
                if key == 27:  # ESC to stop
                    print("\nStopped by user")
                    break
            
            all_results.append({
                'image': image_file.name,
                'detections': num_detections,
                'summary': results['summary'],
                'time_ms': inference_time
            })
            
        except Exception as e:
            print(f"  Error: {e}")
    
    if show:
        cv2.destroyAllWindows()
    
    # Print summary
    print("\n" + "=" * 60)
    print("BATCH PROCESSING SUMMARY")
    print("=" * 60)
    print(f"\nImages processed: {len(all_results)}")
    print(f"Total detections: {total_detections}")
    print(f"Average detections per image: {total_detections / max(len(all_results), 1):.2f}")
    
    if class_counts:
        print("\nTotal by class:")
        for class_name, count in sorted(class_counts.items()):
            print(f"  {class_name}: {count}")
    
    avg_time = total_time / max(len(all_results), 1)
    print(f"\nTotal processing time: {total_time:.2f} ms")
    print(f"Average time per image: {avg_time:.2f} ms")
    print(f"Throughput: {1000 / avg_time:.2f} FPS")
    
    print(f"\nAnnotated images saved to: {output_dir}")
    print("=" * 60)
    
    return {
        'images_processed': len(all_results),
        'total_detections': total_detections,
        'class_counts': class_counts,
        'avg_time_ms': avg_time,
        'results': all_results
    }


def main():
    parser = argparse.ArgumentParser(
        description='Palm Oil Fruit Detection and Classification Pipeline',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Process single image
  python run_inference.py --image test.jpg
  
  # Process directory of images
  python run_inference.py --input-dir ./images --output-dir ./results
  
  # Use INT8 quantized models
  python run_inference.py --image test.jpg --model-variant int8
  
  # Custom confidence threshold
  python run_inference.py --image test.jpg --conf-threshold 0.5
        """
    )
    
    # Input options
    input_group = parser.add_mutually_exclusive_group(required=True)
    input_group.add_argument(
        '--image', type=str,
        help='Path to single image file'
    )
    input_group.add_argument(
        '--input-dir', type=str,
        help='Directory containing images to process'
    )
    
    # Output options
    parser.add_argument(
        '--output-dir', type=str, default='./outputs',
        help='Directory to save annotated images (default: ./outputs)'
    )
    parser.add_argument(
        '--show', action='store_true',
        help='Display results in window'
    )
    
    # Model options
    parser.add_argument(
        '--model-variant', type=str, default='float16',
        choices=['float16', 'float32', 'int8'],
        help='Model quantization variant (default: float16)'
    )
    parser.add_argument(
        '--detector-path', type=str,
        help='Custom path to detector TFLite model'
    )
    parser.add_argument(
        '--classifier-path', type=str,
        help='Custom path to classifier TFLite model'
    )
    parser.add_argument(
        '--config', type=str,
        help='Path to config YAML file'
    )
    
    # Threshold options
    parser.add_argument(
        '--conf-threshold', type=float, default=0.25,
        help='Detection confidence threshold (default: 0.25)'
    )
    parser.add_argument(
        '--iou-threshold', type=float, default=0.45,
        help='NMS IoU threshold (default: 0.45)'
    )
    
    args = parser.parse_args()
    
    # Determine model paths based on variant
    base_dir = Path(__file__).parent
    
    if args.detector_path:
        detector_path = args.detector_path
    else:
        variant_map = {
            'float16': 'best_float16.tflite',
            'float32': 'best_float32.tflite',
            'int8': 'best_int8.tflite'
        }
        detector_path = str(
            base_dir / f"../detector/exports/tflite/{variant_map[args.model_variant]}"
        )
    
    if args.classifier_path:
        classifier_path = args.classifier_path
    else:
        variant_map = {
            'float16': 'classifier_float16.tflite',
            'float32': 'classifier_float32.tflite',
            'int8': 'classifier_int8.tflite'
        }
        classifier_path = str(
            base_dir / f"../classifier/exports/tflite/{variant_map[args.model_variant]}"
        )
    
    print("=" * 60)
    print("PALM OIL FRUIT DETECTION & CLASSIFICATION")
    print("=" * 60)
    print(f"\nModel variant: {args.model_variant}")
    print(f"Confidence threshold: {args.conf_threshold}")
    print(f"IoU threshold: {args.iou_threshold}")
    
    # Initialize pipeline
    try:
        pipeline = IntegratedPipeline(
            detector_path=detector_path,
            classifier_path=classifier_path,
            config_path=args.config,
            conf_threshold=args.conf_threshold,
            iou_threshold=args.iou_threshold
        )
    except FileNotFoundError as e:
        print(f"\nError: {e}")
        print("\nMake sure you have exported the TFLite models:")
        print("  - Run: cd ../detector && python scripts/export/export_tflite.py")
        print("  - Run: cd ../classifier && python scripts/export/export_tflite.py")
        sys.exit(1)
    
    # Process based on input mode
    if args.image:
        if not os.path.exists(args.image):
            print(f"\nError: Image not found: {args.image}")
            sys.exit(1)
        
        process_single_image(
            pipeline=pipeline,
            image_path=args.image,
            output_dir=args.output_dir,
            show=args.show
        )
    else:
        if not os.path.isdir(args.input_dir):
            print(f"\nError: Directory not found: {args.input_dir}")
            sys.exit(1)
        
        process_directory(
            pipeline=pipeline,
            input_dir=args.input_dir,
            output_dir=args.output_dir,
            show=args.show
        )


if __name__ == "__main__":
    main()