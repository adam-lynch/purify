
chmod 777 ./test/server.xml
chmod 777 ./test/config/JsTestDriver.jar
ant -f /test/server.xml start
nohup java -jar "./test/config/JsTestDriver.jar" --port 9876 --captureConsole > /dev/null &
phantomjs config/phantomjs-jstd.js &
java -jar "./test/config/JsTestDriver.jar" --tests all --reset --config config/jsTestDriver.conf --testOutput results &