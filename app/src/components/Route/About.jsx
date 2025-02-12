import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Abaut(){ //Content

let BackgroundImage = { "background-image" : `url(./${process.env.PUBLIC_URL}/img/Abaut.png)`};

return(
<div className={styles.Abaut}>
    <div className={styles.pageContainer}>
       
    <div className={styles.flexLeft} id="p0">
    <div className={styles.headTitle} >Чем я могу вам помочь</div>
    <div className={styles.titleH2} >Верстка HTML/SCSS</div>
    <p>Выполню качественную HTML/CSS/SСSS верстку всех страниц сайта по уже готовому, Вашему дизайну сайта, если он уже есть.</p>
    <p>Я занимаюсь HTML версткой сайтов уже много лет и предлагаю свои услуги по верстке любых HTML страниц сайта. БЭМ, адаптив, кроссбраузерность.</p>
    <div className={styles.titleH2} >Верстка React.js</div>
    <p>В качестве HTML разметки использую JSX - расширение синтаксиса для JavaScript, позволяющее писать HTML-подобную разметку внутри файла JavaScript. Хотя существуют и другие способы написания компонентов, я предпочитают лаконичность JSX, и в компонентах использую именно его.</p>
    <p>Для стилизации компонентов использую несколько подходов на выбор заказчика. Могу использовать Bootstrap, могу в к каждому компоненту подключать свой модуль SCSS, могу вписать стили прямо в код js.</p>
    <p>Классический способ использования стилей — подключение их из внешних css-файлов, его вполне можно использовать и в React-приложении. Единственная проблема — сложно изолировать стили отдельных компонентов друг от друга.</p>
    <p>CSS-модули решают проблему изоляции стилей, создавая уникальное имя для каждого класса.</p>
    <p id="p2">Инлайн-стили указываются прямо на самом DOM-элементе в атрибуте style. Мы можем передавать их в JSX в виде объекта, что удобнее, чем перечисление в строке через точку с запятой.</p>
    <p>JSS позволяет писать CSS прямо в JS декларативно, без конфликтов и с возможностью переиспользования.</p>
    <div className={styles.titleH2} >Приложение React.js</div>
    <p>Разрабатываю интерактивные калькуляторы для любых сайтов, дашборды, админ-панели, личные кабинеты и другие приложения для бизнеса.</p>
    <p>40% разработчиков сайтов используют в работе React — это данные исследовательского отдела Statista. </p>
    <p>Описания блоков UI в React.js становятся компонентами, из которых собирается интерфейс. Компоненты — это формы, кнопки, поля и экраны приложения. Разработчик создаёт их сам или берёт из сторонних библиотек. А ещё он может вкладывать компоненты друг в друга, переиспользовать или редактировать разом</p>
    <p>У React четыре преимущества перед аналогичными библиотеками для разработки интерфейсов.
        Универсальность. React — это JavaScript-библиотека, а JavaScript — популярный язык программирования, который используется всюду. Ни одна другая JS-библиотека не работает в таком количестве окружений и на таком количестве устройств.

        Гибкость. React гибкий, потому что позволяет:

        выбирать, какие библиотеки использовать, например, для контроля за переходами между экранами и хранения данных;
        менять инструменты разработки;
        сделать приложение полностью на React;
       
        или использовать его для одной фишки. Выбирать вам.
        Отличный DevX. UX — это пользовательский опыт, а DevX — опыт разработчика — то, насколько удобно, комфортно и просто разработчику взаимодействовать с технологией. И у React отличный DevX.
        React существует 11 лет и за это время:

        успели найти решения для всех типичных проблем;
        придумали тысячи инструментов, которые делают жизнь разработчика проще;
        сформировали вокруг библиотеки гигантскую и постоянно растущую экосистему.
        Всё это делает React удобным для разработчика. А ещё у библиотеки много пользователей — это значит, что есть у кого перенять опыт и попросить совета.
 <p  id="p3"></p>
        Читаемость. В React приложение разбито на компоненты, поэтому в 9 случаях из 10 при поломке видно, в какой части кода беда:

        разработчик видит, что сломалась кнопка;
        идёт в компонент «кнопка» и устраняет проблему для всех кнопок разом.</p>
        
    <div className={styles.titleH2} >Сайт React.js/Next.js/Node.js</div>
    <p id="p4"> Предлагаю создание Fullstack веб-сайта, используя передовые технологии React.js/Next.js и Node.js c использованием стилей  Scss.</p>
    <p > На сайте может быть любой интерактив, админпанель, отправка почты, телеграмм-бот и т.д.</p>
    <div className={styles.titleH2}>Обучение React.js</div>
    <div><p>Зачем Использовать React? Зачем использовать React, если можно разработать веб-проект на чистом JavaScript? Если вы интересуетесь веб-разработкой, то, возможно, слышали о том, что React позволяет создавать очень быстрые приложения, производительность которых превышает то, что достижимо с использованием лишь JavaScript. Это достигается за счёт использования в React технологии, называемой Virtual DOM.</p></div>
    <p> Обучаясь у меня вы изучите:</p>
    <p>Компоненты. Говоря о React, нельзя избежать обсуждения концепции компонентов. Компоненты в React — это основной строительный блок для создания фрагментов HTML-кода, подходящих для повторного использования. </p>
    <p>JSX. Это — синтаксическое расширение JavaScript, которое позволяет создавать компоненты, используя возможности HTML и JavaScript.</p>
    <p>Стилизация компонентов. Стилизация позволяет придать компонентам привлекательный внешний вид (используем препроцессор SASS).</p>
    <p>Свойства и обмен данными в приложении. Свойства используются для передачи данных между компонентами.</p>
    <p>Состояние. Механизмы состояния компонентов используются для хранения данных в приложении и для управления ими.</p>
    <p>Обработка событий. События позволяют наладить интерактивные взаимоотношения с пользователями приложений.</p>
    <p>Методы жизненного цикла компонентов. Эти методы позволяют разработчику влиять на различные события, происходящие с компонентами.</p>
    <p>Взаимодействие с внешними API. Будем загружать данные из внешних API с использованием протокола HTTP.</p>
    <p>Использование форм в React. Создадим несколько форм для добавления и редактирования бургеров в меню.</p>
    <p>React Хуки (hooks). Данное нововведение появилось в React версии 16.8. Хуки позволяют использовать состояние и другие возможности React JS без написания классов. В данном курсе мы мы изучим, как работает хук useState.</p>
    </div>
    <div className={styles.flexRight}>
        <div className={styles.AbautImg} style={BackgroundImage}></div> 
    </div>
    </div>
</div>
)};