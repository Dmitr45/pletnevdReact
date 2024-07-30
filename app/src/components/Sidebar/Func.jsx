import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Func(){ // Sidebar
    const  {menuArr} =  useAppContext(); // Массив элементов меню
    console.log(menuArr);

const itemMenu =   menuArr.map((elem)=>{return <li index={elem.id}>{elem.name}</li> });  
return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__inner}>


        </div>
    </div>
)};