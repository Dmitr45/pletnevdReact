import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import Menu from "../Menu/Menu"



export default function Main(){

return (
    <div>
        <AppContextProvider>
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.ava}></div>
                <Menu/>
            </div>
            <div className={styles.content}>

                 {/* <div className={styles.post}>
                 Hi, I am Antron Smith
                 I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications. We are providing clean code.
                </div> */}

            </div>
        </div>

        </AppContextProvider>
    </div>
)};