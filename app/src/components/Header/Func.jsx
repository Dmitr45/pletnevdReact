import {useEffect, useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";
import ContactForm from "../ContactForm/Func";
import {Routes, Route, Link} from 'react-router-dom';



export default function Func(){ //Header

let logo = `./${process.env.PUBLIC_URL}/img/logo.jpg`;

let [mobile,setMobaile ] = useState(document.documentElement.scrollWidth < 1200 ? true: false);
let [menuOpen, setMenuOpen] = useState(false);


const  {menuArr, // Массив элементов меню
        cFormActive, toggleCFormActive // Активация контактной формы
        } =  useAppContext(); 

useEffect(()=>{
    setInterval(()=>{
    document.documentElement.scrollWidth < 1200 ? setMobaile(true) : setMobaile(false);
    }, 1000)
} ,[]);

        
let menuItems = menuArr.map((Obj)=> {return( <div key={Obj.id} className={styles.header__menu__item}><Link to={Obj.link} target={ Obj.link.slice(0,4) === 'http' ? '_blank' : '_self'} >{Obj.name}</Link></div>)});
let menuMobItems = menuArr.map((Obj)=> {return( <div onClick={()=>{setMenuOpen(false)}} key={Obj.id} className={styles.header__menuMobile__item}><Link to={Obj.link} target={ Obj.link.slice(0,4) === 'http' ? '_blank' : '_self'} >{Obj.name}</Link></div>)});

return(
<div className={styles.header}>
            {menuOpen &&  mobile ? 
            <div className={styles.header__menuMobile} >
            {menuMobItems}
            <div className={styles.header__menuMobile__phoneMob}>
                <a href="tel:+79529025968">+7 (952)-902-5968</a>
            </div>
            <div  className={styles.header__btn + " " + "btn"} style={ mobile ? {"display": "flex"} : {"display": "none"}} onClick={()=>{  toggleCFormActive(!cFormActive)  }}>
                <span onClick={()=>{setMenuOpen(false)}}>Сообщение</span>
            </div>            
            </div> : null }
    <div className={styles.header__inner+" "+  "container"}>
        <div className={styles.header__logo} style={ mobile ? {"display": "flex"} : {"display": "none"}}>
            <div className={styles.logo}>
                <img className={styles.img}   src={logo}/>
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
        { mobile ? null: 
            <div className={styles.header__menu}>
                {menuItems}
            </div>
        }
        <div className={styles.header__phone}>
            <a href="tel:+79529025968">+7 (952)-902-5968</a>
        </div>

        
        <div className={styles.header__btn + " " + "btn"} style={ !mobile ? {"display": "flex"} : {"display": "none"}} onClick={()=>{  toggleCFormActive(!cFormActive)  }}>
            <span>Сообщение</span>
        </div>
        
        <div className={styles.header__burger} style={ mobile ? {"display": "flex"} : {"display": "none"}}>
            <div className={styles.burger} onClick={()=>{setMenuOpen(!menuOpen); toggleCFormActive(false)}}  style={ menuOpen ? {"backgroundImage": `url(${process.env.PUBLIC_URL}/img/close2.png)`} : {"backgroundImage": `url(${process.env.PUBLIC_URL}/img/menu.png)`}}></div>
        </div>

    </div>
    { cFormActive ? <ContactForm/> : "" }
</div>

)};