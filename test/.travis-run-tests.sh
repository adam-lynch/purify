#!/bin/bash

sh server.sh stop > /dev/null &
sh server.sh start &

nohup java -jar "config/JsTestDriver.jar" --port 9876 --captureConsole > /dev/null &

phantomjs config/phantomjs-jstd.js &

java -jar "config/JsTestDriver.jar" --tests all --reset --config config/jsTestDriver.conf --testOutput results

sh server.sh stop > /dev/null &