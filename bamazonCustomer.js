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

  //ask for id of product they want to buy
/*Currently looking for the prompt bit of code in old activities, but this prompt would be requesting that they input the id number of the product they want*/
  //ask how many they want to buy
 console.log("Yo, how many do you want to buy?");
  var numberRequested = 

  //make if/else to see if we have enough product
if (numberRequested <= stock_quantity) {
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
