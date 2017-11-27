#!/bin/bash

component=$1
echo "import PC from './${component}';
import Mobile from './${component}.mobile';

const component = process.mobile ? Mobile : PC;

export default component;" > ./src/components/${component}/index.js
