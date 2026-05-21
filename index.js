import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
  { id: 1, name: "Mouse", price: 12000 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 150000 },
];

app.get("/", (req, res) => {
  res.send(`
    <h1>API de Productos</h1>
    <p>Servidor funcionando correctamente</p>
  `);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.json({
    message: "Producto eliminado",
    product: deletedProduct[0],
  });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Pedro" },
  ]);
});

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});