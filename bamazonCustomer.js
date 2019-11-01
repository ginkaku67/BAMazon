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
      papersPlease();//Changed
    });
  });
 /* function start() {
    inquirer
      .prompt({
        name: "buyOrLeave",
        type: "list",
        message: "Yo, you wanna [BUY] or [LEAVE]?",
        choices: ["BUY", "LEAVE"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.buyOrLeave === "BUY") {
          (papersPlease);
        }

         else{
          connection.end();
        }
      });*/
     function papersPlease(){
      inquirer.prompt([
        {
            name: "item_id",
            message: "Please enter the ID number of the product you wish to purchase:",
            type: "number"
        },
        {
            name: "quantity_desired",
            message: "Enter the quantity desired:",
            type: "number",
            validate: function(val) {
                if (val < 1) {
                    return "No negatives or 0's";
                } else return true;
            }
        }
    ]).then(function(response) {
        // check if the store has sufficient stock
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
                } else { // sufficient qty in stock
                    connection.query(
                        "UPDATE product SET stock_quantity = stock_quantity - ?", [response.quantity_desired, response.quantity_desired * res.price, response.id],//
                        function(err) {
                            if (err) throw err;
                            console.log("\nThank you for your purchase!" + 
                                `\nItem ${res.item_id} - ${res.product_name} - quantity_desired. ${response.quantity_desired}`);//
                               // `\nUnit cost:  $ ${res.price}` +//
                                //`\nTotal cost: $ ${(response.quantity_desired * res.price)}\n`//
                            
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
      
      
      
      
      /*function quantityQuery(){
        connection.query("SELECT * FROM product", function(err, results) {
          if (err) throw err;
          // once you have the items, prompt the user for which they'd like to bid on
          inquirer
            .prompt([
              {
                name: "choice",
                type: "rawlist",
                choices: function() {
                  var choiceArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
                for (var i = 0; i < results.length; i++) {
                    choiceArray.push(results[i].item_name);
                  }
                  return choiceArray;
                },
                message: "What item do you want to buy? (Use item ID)"
              },
              {
                name: "quantity",
                type: "input",
                message: "How many do you want? (Request may be denied due to limited stock)"
              }
            ])
            .then(function(answer) {
              // get the information of the chosen item
              var chosenItem;
              for (var i = 0; i < results.length; i++) {
                if (results[i].item_name === answer.choice) {
                  chosenItem = results[i];
                }
                if (chosenItem.highest_bid < parseInt(answer.bid)) {
                  // bid was high enough, so update db, let the user know, and start over
                  connection.query(
                    "UPDATE auctions SET ? WHERE ?",
                    [
                      {
                        highest_bid: answer.bid
                      },
                      {
                        id: chosenItem.id
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                      console.log("Bid placed successfully!");
                      start();
                    }
                  );
                }
                else {
                  // bid wasn't high enough, so apologize and start over
                  console.log("Your bid was too low. Try again...");
                  start();
                };
              };
    
          });
        });
      };
        
        
      
  //ask for id of product they want to buy
/*Currently looking for the prompt bit of code in old activities, but this prompt would be requesting that they input the id number of the product they want*/
  //ask how many they want to buy

  //make if/else to see if we have enough product
/*if (numberRequested <= stock_quantity) {
  var sellable = stock_quantity - numberRequested;
};
else (numberRequested > stock_quantity) {
  var rejectTheirOffer
  //how would I coonect that?
}
  connection.query("UPDATE * FROM product", function (err, result) {
    if () throw err;
    console.log(newSum + " left in stock");
};
else (){
  console.log("No capitalism for you! You are asking too much of me.")
};
  }*/
};