
import Link from 'next/link'
import React, { useState } from 'react';

import "./header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="header">
            <div id="header-desktop">
                <Link href="#" id="logo">
                    <h1>SMMHelp</h1>
                </Link>
                
                <nav id="header_nav">
                    <ul id="nav-menu">
                        <li><Link href="#welcome">Главная</Link></li>
                        <li><Link href="#we">О нас</Link></li>
                        <li><Link href="#Services">Услуги</Link></li>
                        <li><Link href="#Contacts">Контакты</Link></li>
                    </ul>
                </nav>

                <button id="burger-btn-js" onClick={toggleMenu}>
                    <div id="burger-btn">
                        <img src="/ico/burger-menu.png" alt="Menu"/>
                    </div>
                </button>
            </div>

            <div id="header-mobile" >
                <nav id="header_nav-m">
                    <ul id="nav-menu-m" style ={{ display: isMenuOpen ? 'flex' : 'none' }}>
                        <li><Link href="#">Главная</Link></li>
                        <li><Link href="#">Услуги</Link></li>
                        <li><Link href="#">Цены</Link></li>
                        <li><Link href="#">Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}