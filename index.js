const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Include helmet
const helmet = require("helmet");
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.set("view engine", "pug");

let customers = [
  {
    id: "1588323375416",
    firstname: "John",
    lastname: "Johnson",
    email: "john@johnson.com",
    phone: "8233243",
  },
  {
    id: "1588323375417",
    firstname: "Mary",
    lastname: "Smith",
    email: "mary@smith.com",
    phone: "6654113",
  },
  {
    id: "1588323375418",
    firstname: "Peter",
    lastname: "North",
    email: "peter@north.com",
    phone: "901176",
  },
];

// All Customers
app.get("/", (req, res) => {
  res.render("customerlist", { customers: customers });
});

// Customer Form (Add)
app.get("/addcustomer", (req, res) => {
  res.render("addcustomer");
});

// Add a New Customer
app.post("/addcustomer", (req, res) => {
  const newCustomer = {
    id: new Date().now,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  };
  customers = [...customers, newCustomer];
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${port}.`);
});
