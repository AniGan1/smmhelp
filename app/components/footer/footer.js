import Link from 'next/link'
import "./footer.css";

export default function Footer(){
    return(
        <footer id="footer">
            <a href="#" id="logo"> <h2>SMMHelp</h2></a>
            <ul>
                <h2>Навигация</h2>
                <li><Link href="#welcome">Главная</Link></li>
                <li><Link href="#we">О нас</Link></li>
                <li><Link href="#Services">Услуги</Link></li>
                <li><Link href="#Contacts">Контакты</Link></li>
            </ul>

            <ul>
                <h2>Навигация</h2>
                <li><Link href="#">Публичная оферта</Link></li>
                <li><Link href="#">Пользовательское соглашение</Link></li>
                <li><Link href="#">Сотрудничество</Link></li>
                <li><Link href="#">Политика конфиденциальности</Link></li>
                <li><Link href="#">Политика использования файлов «cookie»</Link></li>
            </ul>

            <ul > 
                <h2>ПРИНИМАЕМ К ОПЛАТЕ</h2>
                <ul id="Payment-method">
                    <li><img src="https://smmsphere.com/assets/img/ps/qiwi.svg"/></li>
                    <li><img src="https://smmsphere.com/assets/img/ps/cart.svg"/></li>
                    <li><img src="https://smmsphere.com/assets/img/ps/iomoney.svg"/></li>
                </ul>
                
            </ul>
        </footer>
    );
}