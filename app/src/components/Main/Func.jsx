import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import "../../styles.css";
import Sidebar from "../Sidebar/Func";
import Header from "../Header/Func";
import Abaut from "../Route/About";
import Requisites from "../Route/Requisites";
import Page404 from "../Route/Page404";
import { useContext } from "react";
import {Routes, Route, link} from 'react-router-dom';



export default function Func(){ //Main



return (
    <div>
        <AppContextProvider>
        <div className={"wrapper"}>
            <div className={styles.sidebar}>
                <Header/>
                <div className="flex_row">
                    <Sidebar/>
                    <div className={styles.content}>
                        <Routes>
                            <Route path="/abaut" element={<Abaut/>}></Route>
                            <Route path="/requisites" element={<Requisites/>}></Route>
                            <Route path="*" element={<Page404/>}></Route>
                        </Routes>
                    </div>

                </div>

            </div>    
        </div>

        </AppContextProvider>
    </div>
)};