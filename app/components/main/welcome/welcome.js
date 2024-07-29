import "./welcome.css";
import {TG_LINK} from "/app/config.js"

export default function Welcome() {
    return (
        <section id="welcome">
            <div id="welcome-left">
                <h2>Увеличьте свою аудиторию легко и быстро!</h2>
                <p>
                    Эффективные услуги для продвижения в социальных сетях. 
                </p>

                <ul>
                    <li>Имеются подписчики без отписок</li>
                    <li>Стабильная работа</li>
                    <li>Платные автопросмотры</li>
                </ul>

                <a href={TG_LINK} id="btn">НАШ ТЕЛЕГРАМ-БОТ </a>
            </div>
        
            <div id="welcome-img">
                <img src="/img/facebook-post-illustration-notifications (1).png" alt=""/>
            </div>
        </section>
    );
  }
  