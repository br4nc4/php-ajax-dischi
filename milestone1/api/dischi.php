<?php 

require "../database/dischi_db.php";

header("Content-Type: application/json");

echo json_encode($database);

?>
