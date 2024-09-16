import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Page404(){ //404


return(
<div className={styles.pageContainer}>
    <div className={styles.Page404}>
            <div className={styles.fof}>
                    <h1>Error 404</h1>
            </div>
    </div>
</div>
)};