import express from "express";

const app = express(); //Вызываем функцию

async function main(){
    app.use(express.json()) //инициализируем возможность использовать json
    app.all('/api' , (req, res) => { //ждем get запрос на страницу api
        res.status(200)
            .json({ // отправляем статус 200 и json с объектом
            massage: 'success' // Сообщение : успех
            })
        })
    app.listen(4200, ()=>{ // Слушаем порт 4200
        console.log('Сервер запущен на 4200 порту')
        })
};
main();