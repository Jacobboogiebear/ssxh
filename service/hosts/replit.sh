#!/bin/bash

cd service/
if [ ! -d "node_modules" ]  ; then
	npm install
fi
node index.js