import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao){
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectado as cluster do banco de dados');
        await mongoClient.connect();
        console.log('Conectado ao MOngoDB Atlas com sucesso');

        return mongoClient;
    } catch (erro){
        console.log('Falha na conexao com o banco!', erro);
        process.exit();
    }
}