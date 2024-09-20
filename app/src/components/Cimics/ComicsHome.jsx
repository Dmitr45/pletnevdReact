import {useState, useEffect, useRef} from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";



import styles from './styles.module.css';
import "../../styles.css";

import {useAppContext} from  "../../context/ContextProvider";


export default function Home(){ //Content

let {UserName, toggleUserName} = useAppContext();
const methods = useForm();
const { register, handleSubmit } = methods;
const InputNameRef = useRef(null);






function InputName() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input ref={InputNameRef} {...register("InputName", {required: true})} required type="text"  placeholder="" defaultValue={localStorage.getItem("UserName") ? localStorage.getItem("UserName"): "" }/>
};
function InputTelegram() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input {...register("InputTelegram", { required: true })} required  type="text"  placeholder="@telegram"  defaultValue={localStorage.getItem("UserTelegram") ? localStorage.getItem("UserTelegram") : "" }/>
    };


let BlockD = (props) =>{ return(<div className={styles.Dmitrii}>
                            <blockquote>
                                {props.div}
                                <cite>Дмитрий</cite>
                            </blockquote></div>) };

let BlockG = (props) => { return(<div className={styles.Guest}>
                                    <blockquote>
                                        {props.div}
                                        <cite>{UserName}</cite>
                                    </blockquote></div>) };

let [BlockArr, setBlockArr] = useState([]); 
useEffect(()=>{
    UserName === "Гость" ? setBlockArr(BlockArr1) : setBlockArr(()=>{return [...BlockArr, BlockArr2]});
}, [UserName]);


const BlockArr1 =  [
    <BlockD div= {<div><p>Привет! Я Дмитрий. Занимаюсь веб-разработкой. Программирую приложения на React.js</p></div>} />,
    <BlockD div={<div><p>А как тебя зовут?</p></div>} />,
    <BlockG div={<div><p>Мое имя: <FormProvider {...methods}>
                                    <form   onSubmit={methods.handleSubmit(onSubmitName)}>
                                        <InputName/>
                                    </form>
                                    </FormProvider></p></div>}/>
];
function onSubmitName(dataForm) {
    localStorage.setItem("UserName", dataForm.InputName);
    toggleUserName(dataForm.InputName);
};



const BlockArr2 =  [
    <BlockD div= {<div><p>Добрый день, {UserName}! Приветствую тебя на своем сайте.</p></div>} />,
    <BlockD div= {<div><p>Если у тебя есть ко мне предложение или задача, то смелее жми "Оставить заявку" и погнали! Если ты хочешь перейти на страницу со своим поектом, то напомни свой @telegram</p></div>} />,
    <BlockG div={<div><p>Мой телеграмм: <FormProvider {...methods}>
                                    <form   onSubmit={methods.handleSubmit(onSubmitTelegram)}>
                                        <InputTelegram/>
                                    </form>
                                    </FormProvider></p></div>}/>
];
function onSubmitTelegram(dataForm) {
    localStorage.setItem("UserTelegram", dataForm.InputTelegram);
};

let [ComicsTargetArr, setComicsTargetArr] = useState([]);
const ComicsTarget =  (send) =>{     
                            setTimeout(()=>{
                                setComicsTargetArr(() => { return [...ComicsTargetArr, send]})
                        }, 1500); 
                        };

useEffect(()=>{
    if (ComicsTargetArr.length > 2) {setComicsTargetArr(()=> {
        let Arr = ComicsTargetArr;
        Arr.splice(ComicsTargetArr.length-3, ComicsTargetArr.length);
        return Arr
    })};
}, [BlockArr]);

useEffect(()=>{
    if (ComicsTargetArr[ComicsTargetArr.length-1] !== BlockArr[BlockArr.length-1]) {
    ComicsTarget(BlockArr[ComicsTargetArr.length-1]);
    }
},[ComicsTargetArr, BlockArr])


return( 
<div className={styles.Comics}>
    {ComicsTargetArr.map((elem) => elem)}
</div>
)};