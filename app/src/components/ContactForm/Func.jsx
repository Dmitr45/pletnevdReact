import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";
import TelegramMassage from './TelegramMassage';
import { useForm, FormProvider, useFormContext } from "react-hook-form";



export default function Func(){ //Form
    const methods = useForm();
    const { register, handleSubmit } = methods;
    function onSubmit(dataForm) {TelegramMassage(dataForm.InputName, dataForm.InputTelegram, dataForm.InputMassage)};


function InputName() {
    const { register } = useFormContext() // retrieve all hook methods
    return <input {...register("InputName", { required: true })}  type="text"  placeholder="Ваше имя"/>
    }

function InputTelegram() {
    const { register } = useFormContext() // retrieve all hook methods
    return <input {...register("InputTelegram", { required: true })}  type="text"  placeholder="@telegram"/>
    }

function InputMassage() {
    const { register } = useFormContext() // retrieve all hook methods
    return <textarea {...register("InputMassage", { required: true })}  type="text"  placeholder="Описание или пожелание"/>
    }

function InputFile() {
    const { register } = useFormContext() // retrieve all hook methods
    return <input {...register("InputFile")}  type="file"  placeholder="Описание или пожелание"/>
    }

return(
<div className={styles.form}>
    <div className={styles.form_wrap}>
    <div className={styles.title}>Я жду предложений!</div>
    <div className={styles.postTitle}>Заказать разработку веб-приложения</div>

    <FormProvider {...methods}>
    <form   onSubmit={methods.handleSubmit(onSubmit)}>
                            <div className={styles.contact}>
                                <InputName/>
                                <InputTelegram/>
                            </div>

                            <div className={styles.message}>
                                <InputMassage/>
                            </div>
                            <label htmlFor="InputFile" >
                                <InputFile/>
                                <div className={styles.inputFile} data-placheholder='Прикрепить документ' ></div>   
                            </label>                  
                            <div class={styles.FormBtn + " " + ".btn"} >
									<button className={styles.submit} type="submit" >Отправить</button>
							</div>
    </form>
</FormProvider>

    </div>
    <div className={styles.form_img}></div>
</div>

)};