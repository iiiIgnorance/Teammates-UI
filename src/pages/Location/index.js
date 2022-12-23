import React from 'react'
import axios from 'axios'
import './index.css'

class locations extends React.Component {
    constructor() {
        super();
        this.state = {
            apiCountry:'',
            apiStudent:'',
            apiUni:'',
            countries:[],
            students:[],
            info:[],
            country:'',
            student:'',
            uni:''
        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    searchStudent = () => {
        const{student, apiStudent} = this.state
        this.setState({
            apiStudent : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + student + '/students'
        },() => {console.log(student, apiStudent)});
        this.getStudent()
    }
    searchCountry = () => {
        const{country, apiCountry} = this.state
        this.setState({
            apiCountry : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + country + '/countries'
        })
        console.log(country, apiCountry)
        this.getCountry()
    }

    searchUni = () => {
        const{uni, apiUni} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + uni + '/id'
        })
        console.log(uni, apiUni)
        this.getUni()
    }

    getStudent=()=>{
        axios.get(this.state.apiStudent)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    students:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    getCountry=()=>{
        axios.get(this.state.apiCountry)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    countries:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    getUni=()=>{
        axios.get(this.state.apiUni)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    info:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="link">
                    <h2>Student Information</h2>
                    <input value = {this.state.uni} name = "uni" onChange={this.handleFrom}/>
                    <button onClick={this.searchUni}>search</button>
                    <p>{this.state.info.data}</p>

                </div>
                <div className="students">
                    <h2>Search Students</h2>
                    <input value = {this.state.student} name = "student" onChange={this.handleFrom}/>
                    <button onClick={this.searchStudent}>search</button>
                    <p>{this.state.students.data}</p>
                </div>
                <div className="countries">
                    <h2>Search Country</h2>
                    <input value = {this.state.country} name = "country" onChange={this.handleFrom}/>
                    <button onClick={this.searchCountry}>search</button>
                    <p>{this.state.countries.data}</p>
                </div>
            </div>
        )
    }
}
export default locations;

