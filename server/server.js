import express from "express";
import { homeRouter } from "./src/home/home.controller.js";
import { authMiddleware } from "./src/auth.middleware.js";
import dotenv from 'dotenv';

dotenv.config(); // Инициализируем использование .env с переменными
const app = express(); //Вызываем функцию

async function main(){
    app.use(express.json()) //Инициализируем возможность использовать json
    app.use('/api' , authMiddleware , homeRouter) // Запрос на /api Передаем запрос в homeRouter
    app.get('/error', (req, res)=>{
    throw new Error('Errore')
    });
    app.all('*', (req, res) => { // Все остальные запросы
        res.status(404).json({message: 'Not found'}) // Возвращаем ошибку
    });

    // Обработка ошибок должна стоять перед прямо перед listen
    app.use((err, req, res, next) =>{
        console.error(err.stack)
        res.status(500).send('Что-то пошло не так')
    });


    app.listen(process.env.PORT || 4200, ()=>{ // Слушаем порт из файла .env  PORT= или 4200
        console.log(`Сервер запущен на ${process.env.PORT} порту`)
        })
};
main();