
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['ffirstName']; 
    $email = $_POST['femail']
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo "$name has an email: $email";
    }
}
?>