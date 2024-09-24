import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";
import TelegramMassage from './TelegramMassage';
import { useForm, FormProvider, useFormContext } from "react-hook-form";



export default function Func(){ //Form
    const {cFormSent, toggleCFormSent} = useAppContext(); //  Отправлено ли сообщение из  контактной формы
    const methods = useForm();
    const { register, handleSubmit } = methods;
    let CformBackground = { "background-image" : `url(${process.env.PUBLIC_URL}/img/CForm.png)`};


    function onSubmit(dataForm) {
        TelegramMassage(dataForm.InputName, dataForm.InputTelegram, dataForm.InputMassage, dataForm.InputFile);
        localStorage.setItem("UserName", dataForm.InputName);
        localStorage.setItem("UserTelegram", dataForm.InputTelegram);      
        toggleCFormSent(!cFormSent);
    };


function InputName() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input {...register("InputName", {required: true})} required type="text"  placeholder="Ваше имя" defaultValue={localStorage.getItem("UserName") ? localStorage.getItem("UserName"): "" }/>
    };

function InputTelegram() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input {...register("InputTelegram", { required: true })} required  type="text"  placeholder="@telegram"  defaultValue={localStorage.getItem("UserTelegram") ? localStorage.getItem("UserTelegram") : "" }/>
    };

function InputMassage() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <textarea {...register("InputMassage", { required: true })} required type="text"  placeholder="Описание или пожелание"/>
    };

function InputFile() {
    const { register } = useFormContext(); // retrieve all hook methods
    return <label htmlFor="InputFile" >
                <input id="InputFile" {...register("InputFile")}  type="file"  placeholder="Описание или пожелание"/>            
                <div className={styles.inputFile} data-placheholder='Прикрепить документ' >
                
                </div>
            </label>

    };

function FormInputs() {
return <FormProvider {...methods}>
        <div className={styles.title}>Жду предложений!</div>
        <div className={styles.postTitle}>Закажите разработку веб-приложения</div>
<form   onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className={styles.contact}>
                            <InputName/>
                            <InputTelegram/>
                        </div>

                        <div className={styles.message}>
                            <InputMassage/>
                        </div>
                        <div>
                            <InputFile/>
                        </div>
                        <div className={styles.FormBtn + " " + ".btn"} >
                                <button className={styles.submit} type="submit" >Отправить</button>
                        </div>
</form>
</FormProvider>
};

function FormResult(){
return   <div>
                <div className={styles.title}>Спасибо {localStorage.getItem("UserName")}! <br/>cообщение отправлено</div>
                <div className={styles.postTitle}>Я обязательно отвечу в течение 24 часов на телеграм: <br/> {localStorage.getItem("UserTelegram")}</div>
                <div className={styles.FormBtn + " " + ".btn"} >                
                    <button className={styles.submit} onClick={()=>{toggleCFormSent(!cFormSent)}} >Отправить еще одно сообщение</button>
                </div>
        </div> 
};




return(
<div className={styles.form}>
    <div className={styles.form_wrap}>
        { !cFormSent ?  <FormInputs/> :  <FormResult/>}
    </div>
    <div className={styles.form_img} style={CformBackground}></div>
</div>

)};