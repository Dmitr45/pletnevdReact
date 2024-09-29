import express from "express";
import { homeRouter } from "./src/home/home.controller.js";
import dotenv from 'dotenv';

dotenv.config(); // Инициализируем использование .env с переменными
const app = express(); //Вызываем функцию

async function main(){
    app.use(express.json()) //Инициализируем возможность использовать json
    app.use('/api' , homeRouter) // Запрос на /api Передаем запрос в homeRouter
    app.all('*', (req, res) => { // Все остальные запросы
        res.status(404).json({message: 'Not found'}) // Возвращаем ошибку
    });

    app.listen(process.env.PORT || 4200, ()=>{ // Слушаем порт из файла .env  PORT= или 4200
        console.log(`Сервер запущен на ${process.env.PORT} порту`)
        })
};
main();