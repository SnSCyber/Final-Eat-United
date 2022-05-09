<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__.'/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// CHECKING EMPTY FIELDS
elseif(!isset($data->name) 
    || !isset($data->price) 
    || !isset($data->quantity)
    || !isset($data->category)
    || !isset($data->description)
    || !isset($data->code)
    || !isset($data->restID)
    || !isset($data->image)
    || empty(trim($data->name))
    || empty(trim($data->price))
    || empty(trim($data->quantity))
    || empty(trim($data->category))
    || empty(trim($data->description))
    || empty(trim($data->code))
    || empty(trim($data->restID))
    || empty(trim($data->image))
    ):

    $fields = ['fields' => ['name','price','quantity','category','description','code','restID','image']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-

            else:
                $name = trim($data->name);
                 $price = trim($data->price);
              $quantity = trim($data->quantity);
              $category = trim($data->category);
              $description = trim($data->description);
              $code = trim($data->code);
              $restID = trim($data->restID);
              $image = trim($data->image);

                $insert_query = "INSERT INTO `products`(`name`,`price`,`quantity`,`category`,`description`,`code`,`restID`,`image`) VALUES(:name,:price,:quantity,:category,:description,:code,:restID,:image)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':name', $name,PDO::PARAM_STR);
                $insert_stmt->bindValue(':price', $price,PDO::PARAM_STR);
                $insert_stmt->bindValue(':quantity', $quantity,PDO::PARAM_STR);
                $insert_stmt->bindValue(':category', $category,PDO::PARAM_STR);
                $insert_stmt->bindValue(':description', $description,PDO::PARAM_STR);
                $insert_stmt->bindValue(':code', $code,PDO::PARAM_STR);
                $insert_stmt->bindValue(':restID', $restID,PDO::PARAM_STR);
                $insert_stmt->bindValue(':image', $image,PDO::PARAM_STR);

                $insert_stmt->execute();

                $returnData = msg(1,201,'Product added succesfully.');

            endif;

        
    
    

echo json_encode($returnData);