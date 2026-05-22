import express from "express";
import productsRouter from "./src/routes/products.router.js";
import usersRouter from "./src/routes/users.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>API de Productos</h1>
    <p>Servidor funcionando correctamente</p>
  `);
});

app.use('/api/products', productsRouter);
app.use(usersRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
