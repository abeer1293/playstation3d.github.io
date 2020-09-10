<?php
//Specifiy the path to the thumbnail iamges
$directory ='assets/images/gallery_images';
//load files with the following extentions
$allowed_extensions = array('jpg','jpeg','gif','png');
//An Array used to spereate the extension from each file
$file_parts = array();
//Response message
$response ="";
//Opens the directory to parse the images
$dir_handle = opendir($directory);
//Iterate through all the files
while ($file = readdir($dir_handle)){
//First check for hidden files
   if(substr($file,0,1) != '.') {
       //Split each file name to extract the file extension
       $file_components = explode('.', $file);
       //Grab the extension token
       $extension = strtolower(array_pop($file_components));
       //Is this file a valid image, if yes then add it to the response
       if (in_array($extension, $allowed_extensions))
       {
           //Build a response string using the ~ symbol as a string seperator
           $response .=$directory.'/'.$file.'~';
       }
   }
}
closedir($dir_handle);
//Return response while remocing the last ~ separator
echo substr_replace($response,"",-1);
?>