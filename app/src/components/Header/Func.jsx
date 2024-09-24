import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";
import ContactForm from "../ContactForm/Func";
import {Routes, Route, Link} from 'react-router-dom';



export default function Func(){ //Header

let logo = {"background-image" : `url(${process.env.PUBLIC_URL}/img/logo.jpg)`}


let [logoVisibility,setLogoVisibility ] = useState(false);
const  {menuArr, // Массив элементов меню
        cFormActive, toggleCFormActive // Активация контактной формы
        } =  useAppContext(); 


let menuItems = menuArr.map((Obj)=> {return( <div key={Obj.id} className={styles.header__menu__item}><Link to={Obj.link} target={ Obj.link.slice(0,4) === 'http' ? '_blank' : '_self'} >{Obj.name}</Link></div>)});

console.log();
return(
<div className={styles.header}>
    <div className={styles.header__inner+" "+  "container"}>
        <div className={styles.header__logo} style={ logoVisibility ? {"display": "flex"} : {"display": "none"}}>
            <div className={styles.logo}>
                <img className={styles.img}  src={logo}/>
            </div>
            <div>
                <div className={styles.Pletnev}>
                    Плетнёв Дмитрий
                </div>
                <div className={styles.slogan}>
                    Пусть всё станет возможным!
                </div>
            </div>
        </div>

        <div className={styles.header__menu}>
            {menuItems}
        </div>

        <div className={styles.header__phone}>
            <a href="tel:+79529025968">+7 (952)-902-5968</a>
        </div>

        
        <div className={styles.header__btn + " " + "btn"} onClick={()=>{  toggleCFormActive(!cFormActive)  }}>
            <span>Оставить заявку</span>
        </div>


    </div>
    { cFormActive ? <ContactForm/> : "" }
</div>

)};