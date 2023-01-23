<?php 

    require_once 'header.html';

    require_once 'menu.html';
    require_once 'responsive.html';

    if(isset($_GET['page'])){					
        require_once $_GET['page'];
        }
    else{
        require_once 'home.php';
    }


    require_once 'footer.html';


?>
