import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";
import Comics from "../Cimics/ComicsHome";



export default function Home(){ //Content


return(
<div className={styles.Home}>
    <div className={styles.pageContainer}>
        <Comics/>
    </div>
</div>
)};