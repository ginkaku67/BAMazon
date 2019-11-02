var mysql = require("mysql");
var inquirer = require("inquirer")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5Ifrenzy!123",
    database: "bamazonDB"
  });
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM product", function showStuff(err, result) {
      if (err) throw err;
      console.log(result);
      papersPlease();
    });
  });
     function papersPlease(){
      inquirer.prompt([
        {
            name: "item_id",
            message: "Please enter the ID number of the product you wish to purchase (wishes sometimes don't come true):",
            type: "number"
        },
        {
            name: "quantity_desired",
            message: "Enter the quantity desired (but not in a creepy way):",
            type: "number",
            validate: function(val) {
                if (val < 1) {
                    return "No negatives or 0's";
                } else return true;
            }
        }
    ]).then(function(response) {
        connection.query(
       
            "SELECT * FROM product WHERE item_id = ?", [response.id],
            function(err, res) {
                if (err) throw err;
                if (res.stock_quantity < response.quantity_desired) {//
                    if (res.stock_quantity <= 0) {//
                        console.log(`\nWe're still smithing that item. Come back later to see if we have more.\n`);
                    } else {
                        console.log(`\nSorry, but there are only ${res.stock_quantity.toString()} items available.\n`);//
                    }
                    pleaseDontBuyAnymore();
                } else { 
                    connection.query(
                        "UPDATE product SET stock_quantity = stock_quantity - ?", [response.quantity_desired, response.quantity_desired * res.price, response.id],//
                        function(err) {
                            if (err) throw err;
                            console.log("\nThank you for your purchase!" + 
                                `\nItem ${res.item_id} - ${res.product_name} - quantity_desired. ${response.quantity_desired}`);//
  pleaseDontBuyAnymore();
                        }
                    );
                }
            }
        );
    });
};
//};
function pleaseDontBuyAnymore() {
  inquirer.prompt(
      {
          name: "continue",
          message: "Do you hate me? Press enter to continue displaying your hatred, or type 'n' to exit.)",
          type: "confirm"
      }
  ).then(function(response) {
      if (response.continue) { 
          console.log("\n"); 
          showStuff(); 
      }
      else connection.end();
  });
}