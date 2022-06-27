import express from "express";
import mongoose from "mongoose";
import * as fsp from "fs/promises";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URI || 'mongodb://localhost:27017';


dotenv.config();
console.log(process.env);
const app = express();
app.use(express.json());
app.use(express.static('client/build'));

const { DB_PASS, DB_NAME, DB_COLACTION, DB_ROUTE } = process.env;

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

app.post("/api/products", (req, res) => {
  Product.insertMany([req.body])
    .then((products) => res.send(products))
    .catch((e) => res.send(e));
});

app.get("/api/products", (req, res) => {
  fsp.readFile("./products.json", "utf8").then((data) => {
    const products = JSON.parse(data);

    products.map(function (item) {
      const { title, price, description, category, image } = item;
      Product.insertMany([
        {
          title,
          price,
          description,
          category,
          image,
        },
      ]).then(res.send(products));
    });
  });
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  Product.findById(productID)
    .then((retrievedProduct) => {
      res.send(retrievedProduct);
    })
    .catch((e) => res.send("ERROR"));
});

// app.get("/products", (req, res) => {
//   const { title } = req.query;
//   if (title) {
//     Product.find({ title }).then((retrievedProduct) =>
//       res.send(retrievedProduct)
//     );
//   } else {
//     Product.find().then((retrievedProduct) => res.send(retrievedProduct));
//   }
// });

app.patch("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  Product.findByIdAndUpdate(productID, req.body).then((retrievedProduct) =>
    res.send(retrievedProduct)
  );
});

app.delete("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  Product.findByIdAndDelete(productID).then((Mutzar) => res.send(Mutzar));
});

app.get('*', (req, res) => {
  res.sendFile(__dirname+'/client/build/index.html');
 });
 

mongoose
  .connect(`mongodb+srv://${DB_NAME}:${DB_PASS}@${DB_ROUTE}/${DB_COLACTION}`)
  .then(() => {
    app.listen(8000);
  });
