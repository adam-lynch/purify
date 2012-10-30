@echo off
java -jar "JsTestDriver.jar" --port 9876 --server http://localhost:9876 --tests all --reset --config jsTestDriver-Jasmine.conf --testOutput results-jasmine --browser "C:\Program Files\Internet Explorer\iexplore.exe","C:\Program Files\Mozilla Firefox\firefox.exe" %*
pause
