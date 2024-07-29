import Link from 'next/link'
import {TG_LINK} from "/app/config.js"
import "./contacts.css";
export default function Contacts(){
    return(
        <section id="Contacts">
                <h2>Связаться с нами</h2>
                <div id="Contacts-wrapper">
                    <div id="Contacts-left">
                        <p>Наша главная задача — это комплексные услуги для продвижения в популярных социальных сетях, мессенеджерах и медиа.</p>
                        <ul id="Contacts-list">
                            <li>E-mail:support@smmhelp.com</li>
                            <li>Время работы чата: 10.00 - 22.00, без выходных</li>
                            <li>Мы в Telegram:</li>
                        </ul>
                    </div>

                    <div id="Contacts-right">
                        <h2>Нужна помощь? </h2>
                         <Link href={TG_LINK} id='Contacts-btn'> Связаться в телеграмме </Link>
                    </div>
                </div>
            </section>
    );
}