import React, { Component } from 'react'
import Layout from '../../component/Layout'
import Header from '../../component/Header'
import Menu from '../../component/Menu'
import Welcome from '../../pages/Welcome'
import student from '../../pages/Student'
import Students from '../../pages/Students'
import TransitionRoute from '../../component/TransitionRoute'
import project from '../../pages/Projects'
import Courses from '../../pages/Courses'
import addInfo from "../AddInfo"
import deleteInfo from "../DeleteInfo";


export default class Admin extends Component {
    render() {
        return (
            <Layout header={<Header/>}
                    aside={<Menu />}>
                <TransitionRoute path="/" exact component={Welcome}></TransitionRoute>
                <TransitionRoute path='/Students' exact component={Students}/>
                <TransitionRoute path='/student' exact component={student}/>
                <TransitionRoute path='/project' exact component={project}/>
                <TransitionRoute path='/courses' exact component={Courses}/>
                <TransitionRoute path='/addInfo' exact component={addInfo}/>
                <TransitionRoute path='/deleteInfo' exact component={deleteInfo}/>
            </Layout>
        )
    }
}
