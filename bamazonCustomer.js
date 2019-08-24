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
  /*connection.connect(function(err) {
    if (err) throw err;
    /*runSearch/displayProducts();
  });
  function displayProducts()

  
  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Find songs by artist",
          "Find all artists who appear more than once",
          "Find data within a specific range",
          "Search for a specific song",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
  
        case "Find all artists who appear more than once":
          multiSearch();
          break;
  
        case "Find data within a specific range":
          rangeSearch();
          break;
  
        case "Search for a specific song":
          songSearch();
          break;
  
        case "exit":
          connection.end();
          break;
        }
      });*/
  