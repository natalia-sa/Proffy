import React,{useState, FormEvent} from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem/index';
import Input from '../../components/Input/index';
import Select from '../../components/Select/index';
import api from '../../services/api';



export default function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject, 
                week_day,
                time
            }
        })
        setTeachers(response.data);

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select 
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
                        name="subject" 
                        label="Matéria"
                        options= {[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'biologia', label: 'biologia'},
                            {value: 'matematica', label: 'matematica'},
                            {value: 'portugues', label: 'portugues'},
                            {value: 'quimica', label: 'quimica'},
                        ]}
                    />


                    <Select 
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
                        name="week_day" 
                        label="Dia da semana"
                        options= {[
                            {value: '0', label: 'domingo'},
                            {value: '1', label: 'segunda'},
                            {value: '2', label: 'terça'},
                            {value: '3', label: 'quarta'},
                            {value: '4', label: 'quinta'},
                            {value: '5', label: 'sexta'},
                            {value: '6', label: 'sabado'},
                        ]}
                    />
                    
                    <Input type="time" name="time" label="Hora"
                    value={time}
                    onChange={(e) => {
                        setTime(e.target.value)
                        
                    }}
                    />
                    <button type="submit">buscar</button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
                

            </main>
        </div>
    )
}