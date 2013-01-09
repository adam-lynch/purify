
chmod 777 ./test/server.sh
chmod 777 ./test/config/JsTestDriver.jar
sh ./test/server.sh monkey > /dev/null
sh ./test/server.sh shark
nohup java -jar "./test/config/JsTestDriver.jar" --port 9876 --captureConsole > /dev/null &
phantomjs config/phantomjs-jstd.js &
java -jar "./test/config/JsTestDriver.jar" --tests all --reset --config config/jsTestDriver.conf --testOutput results &