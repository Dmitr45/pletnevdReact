import { createContext, useState, useCallback, useRef, useEffect } from 'react';
// import axios from "axios";







export const useCreateAppContext = function(props) {

// Входные данные: ============================================================================================================
const maxWindowSash = 4; //  Максимальное кол-во створок


const menuArr = [
    {id: 0, name: "Проекты", link: "/"},
    {id: 1, name: "Обо мне", link: "/"},
    {id: 2, name: "Блог", link: "https://vc.ru/u/3674302"},
    {id: 3, name: "Контакты", link: "/"}

];

// Контекст для приложения ====================================================================================================



    const [typeWindow, setTypeWindow] = useState(props.typeWindow || 1); // Колличество окон 1-4
    const toggleTypeWindow = useCallback((num) => {setTypeWindow(num)});


    
    
    return {
        menuArr,  // Массив меню


        typeWindow, toggleTypeWindow, // Кол-во створок

};
}