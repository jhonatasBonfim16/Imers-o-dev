import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js";
import {ObjectId} from 'mongodb';

// Conecta ao banco de dados MongoDB usando as informações da string de conexão
// armazenada na variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para buscar todos os posts da coleção "posts" no banco de dados.
export async function getTodosPosts() {
    // Seleciona o banco de dados "Imersao-instabytes".
    const db = conexao.db("Imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Executa a operação de busca em todos os documentos da coleção e retorna um array com os resultados.
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
        const db = conexao.db("Imersao-instabytes");
        const colecao = db.collection("posts");
        return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost){
      const db = conexao.db("Imersao-instabytes");
      const colecao = db.collection("posts");

      const objID = ObjectId.createFromHexString(id);
      return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}