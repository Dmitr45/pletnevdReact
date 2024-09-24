import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Requisites(){ //Content


return(
<div className={styles.requisites}>
<div className={styles.pageContainer}>
    <div className={styles.flexLeft}>
    <div className={styles.headTitle}>Реквизиты</div>

<div className={styles.flexRow}>
    <div className={styles.flexRowItems}>
    <p>ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ<br/>
    ПЛЕТНЕВ ДМИТРИЙ НИКОЛАЕВИЧ</p>
    </div>
    <div className={styles.flexRowItems}>
        <span>&nbsp;Сканируй и плати!</span><br/>
        <img src={`${process.env.PUBLIC_URL}/img/Pay.jpg`}/>
    </div>
    
</div>

<div className={styles.flexRow}>
    <div className={styles.flexRowItems}>
    <p>Юридический адрес организации<br/>
    630117, РОССИЯ, НОВОСИБИРСКАЯ ОБЛ, Г НОВОСИБИРСК, <br/> 
    УЛ ДЕМАКОВА, Д 18, КВ 146а</p>
    </div>
</div>

<div className={styles.flexRow}>
    <div className={styles.flexRowItems}>
        <p>ИНН<br/>
        450128439877</p>
    </div>
    <div className={styles.flexRowItems}>
        <p>ОГРН/ОГРНИП<br/>
        322547600184118</p>
    </div>
</div>

<div className={styles.flexRow}>
    <div className={styles.flexRowItems}>
        <p>КПП<br/>
        НЕТ</p>
    </div>
    <div className={styles.flexRowItems}>
        <p>ИФНС<br/>
        5473</p>
    </div>
</div>

<div className={styles.flexRow}>
    <div className={styles.flexRowItems}>
        <p>Банк<br/>
        АО «ТБанк»</p>
    </div>
    <div className={styles.flexRowItems}>
        <p>Расчетный счет<br/>
        40802810900004974662</p>
    </div>
</div>

<div className={styles.flexRow}>
    <div className={styles.flexRowItems}>
        <p>ИНН банка<br/>
        7710140679</p>
    </div>
    <div className={styles.flexRowItems}>
        <p>БИК банка<br/>
        044525974</p>
    </div>
</div>

<div className={styles.flexRow}>
        <div className={styles.flexRowItems}>
        <p>Юридический адрес банка<br/>
        127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</p>
    </div>
    <div className={styles.flexRowItems}>
        <p>Корреспондентский счет банка<br/>
        30101810145250000974</p>
    </div>
</div>
</div>
</div>
</div>
)};