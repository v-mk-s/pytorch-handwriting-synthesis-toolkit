import re
import os
import argparse
from handwriting_synthesis import utils
from handwriting_synthesis.sampling import HandwritingSynthesizer


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Converts a text file into a handwriting page.')
    parser.add_argument("model_path", type=str, help="Path to saved model")
    parser.add_argument(
        "input_path", type=str, help="A path to a text file that needs to be converted to a handwriting")
    parser.add_argument(
        "-b", "--bias",  type=float, default=0, help="A probability bias. Unbiased sampling is performed by default."
    )

    parser.add_argument("--output_path", type=str, default='',
                        help="Path to the generated handwriting file "
                             "(by default, it will be saved to the current working directory "
                             "whose name will be input_path with trailing .png extension)")
    args = parser.parse_args()

    if not os.path.isfile(args.input_path):
        raise Exception(f'Text file not found: {args.input_path}')

    base_file_name = re.sub('[^0-9a-zA-Z]+', '_', args.input_path)
    output_path = args.output_path or f'{base_file_name}_.png'

    synthesizer = HandwritingSynthesizer.load(args.model_path, args.bias)

    with open(args.input_path) as f:
        text = f.read()

    utils.text_to_script(synthesizer, text, output_path)
