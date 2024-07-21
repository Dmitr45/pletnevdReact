import { createContext, useState, useCallback, useRef, useEffect } from 'react';
// import axios from "axios";







export const useCreateAppContext = function(props) {

// Входные данные: ============================================================================================================
const maxWindowSash = 4; //  Максимальное кол-во створок


const menuArr = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "RESUME",
    "PORTFOLIO",
    "BLOG",
    "CONTACT"];

// Контекст для приложения ====================================================================================================



    const [typeWindow, setTypeWindow] = useState(props.typeWindow || 1); // Колличество окон 1-4
    const toggleTypeWindow = useCallback((num) => {setTypeWindow(num)});


    
    
    return {
        menuArr,  // Массив меню


        typeWindow, toggleTypeWindow, // Кол-во створок

};
}