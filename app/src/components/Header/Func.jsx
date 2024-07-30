import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import logo from "./img/logo.jpg";



export default function Func(){ //Header



let [logoVisibility,setLogoVisibility ] = useState(true);

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

    </div>
</div>

)};