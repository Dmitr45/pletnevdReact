import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Func(){ //Content


return(
<div className={styles.content}>
    <div className={styles.content_inner}>
        <div className={styles.projectList + " " + "flex_row"}>
            <div className={styles.project}>
                <a href='./projects/1/' target='blank'>
                    <img src="./projects/1/logo.JPG" alt="" />
                </a>
            </div>
            <div className={styles.project}>
                <a href='./projects/2/' target='blank'>
                    <img src="./projects/2/logo.JPG" alt="" />
                </a>
            </div>
        </div>
    </div>
</div>

)};