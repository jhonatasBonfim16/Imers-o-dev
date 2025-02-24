import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Permite que o servidor interprete requisições com corpo no
const app = express();
app.use(express.static("uploads"));
routes(app);

    // Inicia o servidor Express na porta 3000 e exibe uma mensagem no console.
    app.listen(3000, () => {
    console.log("Servidor ativo.");
});