import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing/index';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact  component={Landing}></Route>
            <Route path="/study" component={TeacherList}></Route>
            <Route path="/give-classes" component={TeacherForm}></Route>
        </BrowserRouter>
    )
}