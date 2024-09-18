import {useState, useEffect} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function Home(){ //Content

let {UserName, toggleUserName} = useAppContext();




let BlockD = (props) =>{ return(<div className={styles.Dmitrii}>
                            <blockquote>
                                <p>{props.text}</p>
                                <cite>Дмитрий</cite>
                            </blockquote></div>) };

let BlockG = (props) => { return(<div className={styles.Guest}>
                                    <blockquote>
                                        <p>{props.text}</p>
                                        <cite>{UserName}</cite>
                                    </blockquote></div>) };


let [BlockArr, setBlockArr] = useState( [
    <BlockD text="Привет! Я Дмитрий. Занимаюсь веб-разработкой. Программирую приложения на React.js"/>,
    <BlockD text="А как тебя зовут?"/>,
    <BlockG text="Меня зовут Вася"/>
]);

  

useEffect(()=>{
    //setBlockArr(...BlockArr, <BlockG text="Меня зовут Вася"/>);
}, []);


return( 
<div className={styles.Comics}>
    {BlockArr.map((elem) => elem)}
</div>
)};