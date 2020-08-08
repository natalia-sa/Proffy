import React,{useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader/index';
import './styles.css';
import Input from '../../components/Input/index';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select/index';
import api from '../../services/api';

export default function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [cost, setCost] = useState('');
    const [subject, setSubject] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from:'', to: ''}
    ])
   

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from:'', to: ''}
        ])

       
    }
    function setScheduleItemValue(position:number,field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        })
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name, 
            avatar, 
            whatsapp, 
            bio, 
            subject, 
            cost: Number(cost), 
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso')
            
            history.push('/');
        }).catch(() => {
            alert('erro no cadastro')
        })
        
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                description="o promeiro passo é preencher esse formulário de inscrição"
                title="Que incrível que você quer dar aulas"/>

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" value={name} 
                    onChange={(e) => { setName(e.target.value)}}/>

                    <Input name="avatr" label="Avatar" value={avatar} 
                    onChange={(e) => { setAvatar(e.target.value)}}/>

                    <Input name="whatsapp" label="Whastapp" value={whatsapp} 
                    onChange={(e) => { setWhatsapp(e.target.value)}}/>

                    <Textarea name="bio" label="Biografia" value={bio} 
                    onChange={(e) => { setBio(e.target.value)}}/>

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

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

                    <Input value = {cost} name="cost" label="Custo da sua hora/aula"
                    onChange={(e)=> {setCost(e.target.value)}}
                    />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button onClick={addNewScheduleItem} type="button">+ novo horário</button>
                    </legend>
                    
                 {scheduleItems.map((scheduleItem, index) => {
                     return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                                name="week_day" 
                                label="Dia da semana"
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItemValue(index,'week_day', e.target.value)}
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
                            <Input name="from" label="Das" type="time" 
                            value={scheduleItem.from}
                            onChange={e => setScheduleItemValue(index,'from', e.target.value)}/>

                            <Input name="to" label="ate" type="time" 
                            value={scheduleItem.to}
                            onChange={e => setScheduleItemValue(index,'to', e.target.value)}/>
                        </div>
                     )
                 })
                 }
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso"></img>
                        Importante <br/>
                        Preencha todos os dados
                    </p>
                    <button type="submit"> Salvar cadastro</button>
                </footer>

                </form>
            </main>
        </div>
    )
}