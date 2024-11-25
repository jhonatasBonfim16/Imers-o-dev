import express from 'express';
import multer from 'multer';
import cors from "cors";
import {listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsControllers.js";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSuccessStatus:200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
    // Habilita o parser JSON para receber dados no formato JSON nas requisições.
    app.use(express.json());
    app.use(cors(corsOption))
    // Rota GET para a URL "/posts". Quando uma requisição GET é feita para essa rota,
    // esta função é executada.
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
}
  export default routes;