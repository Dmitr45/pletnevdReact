import { useState, useCallback, useRef, useEffect } from 'react';
const URL_Projects = "https://pletnevd.com/api/json/?file=projects";







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


    const [cFormActive, setCFormActive] = useState(props.cFormActive || false);
    const toggleCFormActive = useCallback((bool) => setCFormActive(bool));

    const [cFormSent, setCFormSent] = useState(props.cFormSent || false);
    const toggleCFormSent = useCallback((bool) => setCFormSent(bool));

    const [projectsArr, setProjectsArr] = useState( props.projectsArr || []);
    const toggleProjectsArr = useCallback((arr) => setProjectsArr(arr));

async function ProjectLoad(url) {
    await fetch(url)
            .then(data => data.json())
            .then(res => toggleProjectsArr(res.projects));
    };

useEffect(()=>{
    ProjectLoad(URL_Projects);
},[]);


    
    
    


    
    return {
        menuArr,  // Массив меню
        projectsArr, // Массив проектов 

        UserName, toggleUserName, // 
        cFormActive, toggleCFormActive, // Появление контактной формы
        cFormSent, toggleCFormSent, //  Отправлено ли сообщение из  контактной формы

};
}