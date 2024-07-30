import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Func(){ // Sidebar
    const  menuArr =  useAppContext(); // Массив элементов меню
    console.log(menuArr);

const itemMenu =   menuArr.menuArr.map((elem, index)=>{return <li index={index}>{elem}</li> });  
return (
    <div className={styles.menu}>
        <ul>
        {itemMenu}
        </ul>
    </div>
)};