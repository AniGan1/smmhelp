import {we_info} from "./data"
import "./we.css";

function Card_we({img, heading, p}) {
    return(
    <div class="we-item">
        <div class="we-ico-img">
            <img src={img} alt="ico" />
        </div>

       <h3>{heading}</h3>  
       <p>
            {p}
       </p>
   </div>
   );
}

export default function We() {
    return (
        <section id="we">
            <h2>Почему именно мы?</h2>
            <p id="we-p">Потому что сервис 'SMMHelp'</p>

            <div id="we-wrapper">
                {
                    we_info.map((Element, index) => (
                        <Card_we key={index} {...Element} />
                    ))
                }
            </div>
        </section>
    );
}