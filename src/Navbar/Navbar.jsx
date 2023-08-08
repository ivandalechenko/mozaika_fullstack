import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = (props) => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="logo">
                        <img src='/img/navbar/logo.png' />
                        PIC-STORE
                    </div>
                    <div className="nav">
                        <a href='#'>Выбрать изображение</a>
                        <a href='#'>Получить инструкцию</a>
                        <a href='#'>Вопросы - ответы</a>
                    </div>
                    <div className="contact">
                        +7 123 456 789 228
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar