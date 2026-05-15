import express from "express";

const app = express();

const products = [
  { id: 1, name: "Producto 1", price: 10 },
  { id: 2, name: "Producto 2", price: 20 },
  { id: 3, name: "Producto 3", price: 30 },
];

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next()
});

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  res.send(`Producto ${req.params.id}`);
});

app.use((req, res, next) => {
  res.send("Not Found");
});

app.listen(3000, () => console.log("http://localhost:3000"));
