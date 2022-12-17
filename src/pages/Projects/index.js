import React from 'react'
import axios from 'axios'
import './index.css'

class projects extends React.Component {
    constructor() {
        super();

        this.state = {
            apiName:'',
            apiUni:'',
            apiLink:'',
            projectName:[],
            projectUni:[],
            projectLink:[],
            uni:'',
            name:'',
            link:''
        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    searchUni = () => {
        const{uni, apiUni} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + uni
        },() => {console.log(uni, apiUni)});
        this.getUni()
    }
    searchName = () => {
        const{name, apiName} = this.state
        this.setState({
            apiName : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + name
        })
        console.log(name, apiName)
        this.getName()
    }

    searchLink = () => {
        const{link, apiLink} = this.state
        this.setState({
            apiLink : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + link
        })
        console.log(link, apiLink)
        this.getCourses()
    }

    getUni=()=>{
        axios.get(this.state.apiUni)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                this.setState({
                    projectUni:response.data.body
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    getName=()=>{
        axios.get(this.state.apiName)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                this.setState({
                    projectName:response.data.body
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    getLink=()=>{
        axios.get(this.state.apiCourse)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                this.setState({
                    projectLink:response.data.body
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
                <div className="projectName">
                    <h2>Search Project By Name</h2>
                    <input value = {this.state.name} name = "name" onChange={this.handleFrom}/>
                    <button onClick={this.searchName}>search</button>
                    <p>{this.state.projectName}</p>
                </div>
                <div className="projectUni">
                    <h2>Search Project By Uni</h2>
                    <input value = {this.state.uni} name = "uni" onChange={this.handleFrom}/>
                    <button onClick={this.searchUni}>search</button>
                    <p>{this.state.projectUni}</p>
                </div>
                <div className="projectLink">
                    <h2>Search Project By Link</h2>
                    <input value = {this.state.link} name = "link" onChange={this.handleFrom}/>
                    <button onClick={this.searchLink}>search</button>
                    <p>{this.state.projectLink}</p>
                </div>
            </div>
        )
    }
}
export default projects;
