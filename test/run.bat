@echo off
java -jar "JsTestDriver.jar" --port 9876 --server http://localhost:9876 --tests all --reset --browser "C:\Program Files\Internet Explorer\iexplore.exe","C:\Program Files\Mozilla Firefox\firefox.exe" %*
pause
