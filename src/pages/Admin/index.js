import React, { Component } from 'react'
import Layout from '../../component/Layout'
import Header from '../../component/Header'
import Menu from '../../component/Menu'
import Welcome from '../../pages/Welcome'
import Students from '../../pages/Students'
import TransitionRoute from '../../component/TransitionRoute'
import Projects from '../../pages/Projects'
import Courses from '../../pages/Courses'


export default class Admin extends Component {
    render() {
        return (
            <Layout header={<Header/>}
                    aside={<Menu />}>
                <TransitionRoute path="/" exact component={Welcome}></TransitionRoute>
                <TransitionRoute path='/students' exact component={Students}/>
                <TransitionRoute path='/projects/' exact component={Projects}/>
                <TransitionRoute path='/courses/' exact component={Courses}/>
            </Layout>
        )
    }
}
