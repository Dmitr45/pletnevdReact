//Скрипт оправки сообщений из формы. Воспользуемся ботом телеграм для отправки сообщений 
//https://www.youtube.com/watch?v=RviYQrNdDok
//https://tlgrm.ru/docs/bots/api  sendMessage
//https://www.npmjs.com/package/axios Используем для отправки сообщений $ npm install axios
import axios from 'axios';






export default function TelegramMessage(Name, Telegram, Massage, File){



        const TOKEN = "5698301113:AAFrSfVgJo33K6n_VzDmQMlbgtfiQ91F8vY";
        const CHAT_ID = "-1001807784586";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        //const URI_API = ``;
        const URI_API_DOC = `https://api.telegram.org/bot${TOKEN}/sendDocument`;



        let massageSend  = `<b> Сообщение с PletnevD.com</b> \n` +
        `<b> Отправитель: </b> ${Name} \n` +
        `<b> Telegram: </b> ${Telegram} \n` +
        `<b> Сообщение: </b>${Massage}` ;
        console.log("Запрос на отправку формы обратной связи  :  " + massageSend);
        console.log( "Файл: " + File.name);


        axios.post(URI_API_DOC,  { // Отправка файла
            chat_id:  CHAT_ID,             
            document: File,
            headers: { 'Content-Type' : 'multipart/form-data' }
        })
        .then((res)=> {
            console.log("File send good");
        })
        .catch((err) =>{
            console.warn(err);
        });

        axios.post(URI_API, {  // Отправка текста
            chat_id:  CHAT_ID, 
            parse_mode: 'html',
            text: massageSend
            }) 
            .then((res) => {
                console.log("Massage send good");
            })
            .catch((err) =>{
                console.warn(err);
            })
            .finally(() =>{ console.log("TelegramMessage end") 

        });
        } 
