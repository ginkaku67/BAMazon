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
    connection.query("SELECT * FROM product", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
  function start() {
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
          quantityQuery();
        }

         else{
          connection.end();
        }
      });
      function quantityQuery(){
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
                }
              });
          });
        }
        
              }
      }
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
};*/