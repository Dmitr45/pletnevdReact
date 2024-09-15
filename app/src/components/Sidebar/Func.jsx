import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Func(){ // Sidebar
    const  {menuArr} =  useAppContext(); // Массив элементов меню

const itemMenu =   menuArr.map((elem)=>{return <li index={elem.id}>{elem.name}</li> });  
return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__inner}>
            <div className={styles.sidebar__logo}>
                <div className={styles.logo}>
                    Pletnev<br/>Dmitrii
                </div>
            </div>
            <div className={styles.sidebar__photo}>
                <div className={styles.photo}>
                </div>
            </div>
            <div className={styles.sidebar__menu}>
                <div className={styles.menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}><div>Верстка HTML/SCSS</div></li>
                        <li className={styles.menu__item}><div>Верстка React.js</div></li>
                        <li className={styles.menu__item}><div>Приложение React.js</div></li>
                        <li className={styles.menu__item}><div>Сайт React.js/Next.js </div></li>
                        <li className={styles.menu__item}><div>Обучение React.js </div></li>
                    </ul>
                </div>
           
            </div>
            <div className={styles.QRcode}>
                <div>Сканируй и плати!</div>
                <img src="./img/Pay.jpg" width={150+"px"} alt="" />  
            </div>
 
        </div>

    </div>
)};