import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import {Routes, Route, Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function Func(){ // Sidebar
const  {menuArr} =  useAppContext(); // Массив элементов меню
let Photo = { "background-image" : `url(${process.env.PUBLIC_URL}/img/PletnevDmitrii.jpg)`};
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
                <div className={styles.photo} style={Photo}>
                </div>
            </div>
            <div className={styles.sidebar__menu}>
                <div className={styles.menu}>
                    <ul className={styles.menu__list}>
                        {/* <li className={styles.menu__item}><div><HashLink className={styles.link} to="/abaut#p0">Верстка HTML/SCSS</HashLink></div></li> */}
                        <li className={styles.menu__item}><div><HashLink smooth activeStyle={{ color: 'red' }} className={styles.link} to="/abaut#p0">Верстка React.js</HashLink></div></li>
                        <li className={styles.menu__item}><div><HashLink smooth className={styles.link} to="/abaut#p2">Приложение React.js</HashLink></div></li>
                        <li className={styles.menu__item}><div><HashLink smooth className={styles.link} to="/abaut#p3">Сайт React/Node.js</HashLink></div></li>
                        <li className={styles.menu__item}><div><HashLink smooth className={styles.link} to="/abaut#p4">Обучение React.js</HashLink></div></li>
                    </ul>
                </div>
           
            </div>
            {/* <div className={styles.QRcode}>
                <div>Сканируй и плати!</div>
                <img src="/img/Pay.jpg" width={150+"px"} alt="" />  
            </div> */}
 
        </div>

    </div>
)};