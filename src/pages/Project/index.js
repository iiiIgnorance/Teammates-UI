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
            nameProject:[],
            uniProject:[],
            linkProject:[],
            name:'',
            uni:'',
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
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + uni + '/members'
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
            apiLink : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + link + '/link'
        })
        console.log(link, apiLink)
        this.getLink()
    }

    getUni=()=>{
        axios.get(this.state.apiUni)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    uniProject:response.data
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
                console.log(response.data);
                this.setState({
                    nameProject:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    getLink=()=>{
        axios.get(this.state.apiLink)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    linkProject:response.data
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
                    <br/>
                    <br/>
                    <h2>Search Project Link</h2>
                    <input value = {this.state.link} name = "link" onChange={this.handleFrom}/>
                    <button onClick={this.searchLink}>search</button>
                    <p>{this.state.linkProject.data}</p>

                </div>
                <div className="name">
                    <h2>Search Project Description</h2>
                    <input value = {this.state.name} name = "name" onChange={this.handleFrom}/>
                    <button onClick={this.searchName}>search</button>
                    <p>{this.state.nameProject.data}</p>
                </div>
                <div className="uni">
                    <br/>
                    <h2>Search Project Members</h2>
                    <input value = {this.state.uni} name = "uni" onChange={this.handleFrom}/>
                    <button onClick={this.searchUni}>search</button>
                    <p>{this.state.uniProject.data}</p>
                </div>
            </div>
        )
    }
}
export default projects;

