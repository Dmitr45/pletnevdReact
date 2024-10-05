import {Router} from 'express';
import {HomeService} from './home.service.js';


const router = Router();
const homeService = new HomeService();

router.post('/home', (req, res) =>{ // Путь будет http://localhost:4200/api/home
    // Базовая валидация Ждем json  в форме { "text" : "fhgfhjf"}  
    if (!req.body?.text?.length){ // Если нет body, text  или длины, то отправляем ошибку
        res.status(400).json({message:'Text is required'})
    }

// Выводим основные параметры запроса в консоль
    //console.log(req.headers);    
    // console.log(req.query);
    // console.log(req.body); 


    // Передаем body в сервис 
    const jsonText = homeService.createText(req.body);
    res.status(201).json(jsonText);

});

export const homeRouter = router;