import React from 'react';
import wppIcon from'../../assets/images/icons/whatsapp.svg';
import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/55745942?s=460&u=67b0b9c8c31188cbe7bca208c6b5704ef764613b&v=4" alt="eu"></img>
                <div>
                    <strong>Natalia</strong>
                    <span>matematica</span>
                </div>
            </header>
            <p>
                naivewpnb oinvepwainv pawoinvwai
            </p>

            <footer>
                <p>
                    preço
                    <strong>preço</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="contato"></img>
                    entrar em contato
                </button>
            </footer>
        </article>
    )
}

