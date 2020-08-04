import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/index';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor ="subject">Matéria</label>
                        <input type="text" id="subject"></input>
                    </div>


                    <div className="input-block">
                        <label htmlFor ="week-day">dia da semana</label>
                        <input type="text" id="week-day"></input>
                    </div>


                    <div className="input-block">
                        <label htmlFor ="time">hora</label>
                        <input type="text" id="time"></input>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>

            </main>
        </div>
    )
}