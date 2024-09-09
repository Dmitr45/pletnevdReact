import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import "../../styles.css";
import Sidebar from "../Sidebar/Func";
import Header from "../Header/Func";
import Content from "../Content/Func";



export default function Func(){ //Main

return (
    <div>
        <AppContextProvider>
        <div className={"wrapper"}>
            <div className={styles.sidebar}>
                <Header/>
                <div className="flex_row">
                    <Sidebar/>
                    <Content/>
                </div>

            </div>    
        </div>

        </AppContextProvider>
    </div>
)};