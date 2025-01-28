import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import "../../styles.css";
import Sidebar from "../Sidebar/Func";
import Header from "../Header/Func";
import Home from "../Route/Home";
import Abaut from "../Route/About";
import Requisites from "../Route/Requisites";
import Page404 from "../Route/Page404";
import Projects from "../Route/Projects";
import { useState, useEffect } from "react";
import {Routes, Route, link} from 'react-router-dom';



export default function Func(){ //Main
let [mobile,setMobaile ] = useState(false);

useEffect(()=>{
    setInterval(()=>{
    document.documentElement.scrollWidth < 1200 ? setMobaile(true) : setMobaile(false);
    }, 1000)
} ,[]);


return (
    <div>
        <AppContextProvider>
        <div className={"wrapper"}>
                <Header/>
                <div className="flex_row" style={ !mobile ? {"display": "flex"} : {"display": "block"}}>
                <Sidebar/>
                    <div className={styles.content}>
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/abaut" element={<Abaut/>}></Route>
                            <Route path="/requisites" element={<Requisites/>}></Route>
                            <Route path="/projects" element={<Projects/>}></Route>
                            <Route path="*" element={<Page404/>}></Route>
                        </Routes>
                    </div>
                </div>
        </div>
        </AppContextProvider>
    </div>
)};