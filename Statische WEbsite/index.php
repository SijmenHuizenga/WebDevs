<?php
$page = 'over.html';
$cssFile = "over.css";
if(isset($_GET['page'])){
    $page = $_GET['page'].".html";
    $cssFile = $_GET['page'].".css";
}
$page = "pages/".$page;
$cssFile = "css/".$cssFile;
if(!file_exists($page)){
    echo "Could not find file " . $page;
    exit;
}
$cssContent = "";
if(file_exists($cssFile)){
    $cssContent = "<link rel='stylesheet' href='".$cssFile."' />";
}

$baseContent = file_get_contents("base.html");
$pageContent = file_get_contents($page);

$baseContent = str_replace("CONTENTINSERTIONSTUFF", $pageContent, $baseContent);
$baseContent = str_replace("CSSINSERTION", $cssContent, $baseContent);
echo $baseContent;
?>
