# vaad3d-website

http://vaa3d-website.s3-website-us-west-2.amazonaws.com

## Setup node virtualenv

sudo easy_install nodeenv
nodeenv env
. env/bin/activate
deactivate_node (after your work is complete)

## Install dependencies

cd vaa3d-website
npm install (install all dependencies in package.json)
npm install grunt --save (example: Add new depdendency to package.json)
bower install (install all dependencies in bower.json)
bower install jquery --save (example: Add new depdendency to bower.json)

## Build & development

Run `grunt` for building and `grunt serve` for preview

## Testing

Running `grunt test` will run the unit tests with karma

## Troubleshooting

UNMET PEER DEPENDENCY karma@^0.13.0

npm install karma --save
