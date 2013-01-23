<?php

   /**
    * User: Adam
    * Date: 21/01/13
    * Time: 22:20
    */

    require_once('util/spyc/spyc.php');

    /**
     * WARNING: this file assumes paths are relative to the test runner,
     * i.e. the root test directory
     */

    /**
     * Util:
     */

    //goes to the path given and returns a list of appropriate files
    function readDirectory($path, &$errors){
        $files = array();

        //extract the path and extension from $path
        if(preg_match('%^(.+/)?\*\.(.+)$%', $path, $matches)){
            //see comment at the top of page about relative URLs

            //if there was no path matched, it's the current folder
            $directoryPath = empty($matches[1]) ? '' : substr($matches[1], 0, -1);//strip off trailing slash
            $desiredEnding= "." . $matches[2];//.js for example
            $desiredEndingLength = strlen($desiredEnding);

            //read filenames in directory:
            $directoryContents  = opendir('./test/'.$directoryPath);

            //don't forget to actually give the path along with the actual filename
            $pathPrefix = './' === $directoryPath ? '' : $directoryPath;

            while (false !== ($filename = @readdir($directoryContents))) {
                //if the file name ends with .js for example
                if(substr($filename, -$desiredEndingLength) === $desiredEnding){
                    $files[] = $pathPrefix . (empty($pathPrefix) ? '' : '/') . $filename;
                }
            }
        }
        else {
            $errors[] = 'readDirectory: path cannot be interpreted';
        }

        return $files;
    }


    /**
     * Parse the config file:
     */

    $errors = array();
    $scriptsToLoad = array();

    $configContents = file_get_contents('./test/config/config.yml');
    if(empty($configContents)){
        $errors[] = "Couldn't get contents of config file";
    }
    else{

        //read in & interpret the config file
        $parsedYaml = Spyc::YAMLLoad($configContents);

        //if the parsing failed or the required 'load' element doesn't exit
        if(empty($parsedYaml) || !isset($parsedYaml['load'])){
            $errors[] = 'Problem parsing yaml in config file';
        }
        else {

            foreach($parsedYaml['load'] as $path){
                $lastFourCharacters = substr($path, -4);

                if('*.js' === $lastFourCharacters){//path ends with *.js
                    $files = readDirectory($path, $errors);

                    //if readDirectory added to $errors global
                    if(count($errors)){
                        break;
                    }

                    //add paths to include list:
                    $scriptsToLoad = array_merge($scriptsToLoad, $files);
                }
                elseif('.js' === substr($lastFourCharacters, 1)){//ends with .js but not *.js
                    $scriptsToLoad[] = $path;//add path to include list
                }
                else {//unrecognizable ending
                    $errors[] = "'".htmlspecialchars($path)."' is not a valid path; scripts weren't loaded, tests weren't executed";
                    break;
                }
            }
        }
    }

    $errorCount = count($errors);
    $htmlString = '<!DOCTYPE html>
                        <html>
                            <head>
                                <title>Purify Tests</title>
                                <meta charset="UTF-8">
                                <link rel="stylesheet" type="text/css" href="config/jasmine/jasmine.css">';

    if(!$errorCount){
        //include scripts specified in config file
        foreach($scriptsToLoad as $scriptPath){
            $htmlString .= "<script src=\"{$scriptPath}\"></script>";
        }
    }

    $htmlString .= '</head>
                        <body>';

    //output errors if any occurred
    if($errorCount){
        $htmlString .= "<ul>";

        foreach($errors as $error) {
            $htmlString .= "<li>{$error}</li>";
        }

        $htmlString .= "</ul>";
    }
    else{
        //run tests if there wasn't any errors
        $htmlString .= '<script type="text/javascript">
                jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
                jasmine.getEnv().addReporter(new jasmine.PhantomJSReporter());
                jasmine.getEnv().execute();
            </script>';
    }

    $htmlString .= '</body>
                        </html>';

    file_put_contents('./test/test-runner.html', $htmlString);
?>
