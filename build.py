"""Script for deploying and building styles and scripts"""

# Import modules
import os
import json
import argparse

import jsmin

# Init variables
paths = {
    "root": os.path.dirname(os.path.abspath(__file__)) + "/",
    "sftp_config": "sftp-config.json",
    "style": {
        "root": "ui/assets/css",
        "destination": "app.css",
        "source": "app.scss",
    },
    "script": {
        "root": "ui/assets/js",
        "destination": "scripts.js",
        "sources": [
            "app.js",
        ],
    },
}

def build_scripts():
    """Merge together given scripts"""

    # Init variables
    src_filenames = [os.path.join(paths["script"]["root"], f) for f in paths["script"]["sources"]]
    dest_filename = os.path.join(paths["script"]["root"], paths["script"]["destination"])
    scripts = ""

    # Merge scipts
    for src_filename in src_filenames:
        with open(paths['root'] + src_filename, "r", encoding="utf-8") as file:
            scripts += file.read()
    with open(paths['root'] + dest_filename, "w", encoding="utf-8") as file:
        file.write(jsmin.jsmin(scripts))

    # Print results
    print("Scripts are built sucessfully.")


def build_styles():
    """Build CSS from given SCSS files"""

    src_filename = os.path.join(paths["style"]["root"], paths["style"]["source"])
    dest_filename = os.path.join(paths["style"]["root"], paths["style"]["destination"])
    os.system(f"sass {paths['root'] + src_filename} {paths['root'] + dest_filename} --style=compressed --no-source-map")

    # Print results
    print("Styles are built sucessfully.")


if __name__ == '__main__':

    # Init parser
    parser = argparse.ArgumentParser(description=__doc__)

    # Parse arguments
    parser.add_argument('-c', '--styles', action='store_true', help='build styles')
    parser.add_argument('-s', '--scripts', action='store_true', help='build scripts')
    args = parser.parse_args()

    # Build scripts and styles on startup
    if args.styles:
        build_styles()
    if args.scripts:
        build_scripts()
