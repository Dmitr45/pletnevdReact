import { createContext, useState, useCallback, useRef, useEffect } from 'react';








export const useCreateAppContext = function(props) {

// Входные данные: ============================================================================================================



const menuArr = [
    {id: 0, name: "Проекты", link: "/"},
    {id: 1, name: "Обо мне", link: "/"},
    {id: 2, name: "Блог", link: "https://vc.ru/u/3674302"},
    {id: 3, name: "Реквизиты", link: "/Requisites"}

];

// Контекст для приложения ====================================================================================================
    const [cFormActive, setCFormActive] = useState(props.CFormActive || false);
    const toggleCFormActive = useCallback((bool) => setCFormActive(bool));

    const [cFormSent, setCFormSent] = useState(props.CFormSent || false);
    const toggleCFormSent = useCallback((bool) => setCFormSent(bool));


    
    
    return {
        menuArr,  // Массив меню


        cFormActive, toggleCFormActive, // Появление контактной формы
        cFormSent, toggleCFormSent, //  Отправлено ли сообщение из  контактной формы

};
}