import { createContext, useState, useCallback, useRef, useEffect } from 'react';









export const useCreateAppContext = function(props) {

// Входные данные: ============================================================================================================

//localStorage.clear();

const menuArr = [
    {id: 0, name: "Главная", link: "/"},    
    {id: 1, name: "Проекты", link: "/projects"},
    {id: 2, name: "Отзывы", link: "https://profi.ru/profile/PletnevDN/#reviews-tab"},
    {id: 3, name: "Блог", link: "https://vc.ru/u/3674302"},
    {id: 4, name: "Реквизиты", link: "/requisites"}
];



// Контекст для приложения ====================================================================================================
    const [UserName, setUserName] = useState(props.UserName || localStorage.getItem("UserName") || "Гость");
    const toggleUserName = useCallback((str) => setUserName(str));


    const [cFormActive, setCFormActive] = useState(props.CFormActive || false);
    const toggleCFormActive = useCallback((bool) => setCFormActive(bool));

    const [cFormSent, setCFormSent] = useState(props.CFormSent || false);
    const toggleCFormSent = useCallback((bool) => setCFormSent(bool));


    
    
    return {
        menuArr,  // Массив меню

        UserName, toggleUserName, // 
        cFormActive, toggleCFormActive, // Появление контактной формы
        cFormSent, toggleCFormSent, //  Отправлено ли сообщение из  контактной формы

};
}