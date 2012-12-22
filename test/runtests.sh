#!/bin/bash

java -jar config/JsTestDriver.jar --server http://localhost:9876 --tests all --reset --config config/jsTestDriver.conf --testOutput results 
