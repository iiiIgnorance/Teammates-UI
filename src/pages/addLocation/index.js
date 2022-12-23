import React from 'react'
import axios from 'axios'
import './index.css'
class addLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            apiUni:'',
            apiName:'',
            apiCountry:'',
            apiLocation:'',
            timezone:'',
            countries:'',
            unis:'',
            country:'',
            newCountry:'',
            projectName:'',
            nameName:'',
            descriptionName:'',
            unisName:'',
            linkName:'',
            projectUni:'',
            nameUni:'',
            descriptionUni:'',
            unisUni:'',
            linkUni:'',
            uniCountry:''

        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    addLocation = () => {
        //const{uniInfo, apiInfo, firstName, lastName, email, phone, major, interests} = this.state
        const{apiLocation} = this.state
        this.setState({
            apiLocation: 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations'
        },() => {console.log(apiLocation)});
        this.postLocation()
    }
    updateCountry = () => {
        const{country, apiCountry} = this.state
        this.setState({
            apiCountry : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + country + '/countries'
        })
        console.log(country, apiCountry)
        this.putCountry()
    }

    updateUni = () => {
        const{uniCountry, apiUni} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + uniCountry + '/students'
        })
        console.log(uniCountry, apiUni)
        this.putUni()
    }

    updateLink = () => {
        const{projectLink, apiLink} = this.state
        this.setState({
            apiLink : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + projectLink + '/link'
        })
        console.log(projectLink, apiLink)
        this.putLink()
    }

    postLocation=()=>{
        axios.post(this.state.apiLocation, {
            timezone: this.state.timezone,
            countries: this.state.countries,
            unis: this.state.unisProject
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    putCountry=()=>{
        axios.put(this.state.apiCountry,{
            countries: this.state.newCountry,
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    putUni=()=>{
        axios.put(this.state.apiUni,{
            unis: this.state.unisUni
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    putLink=()=>{
        axios.put(this.state.apiLink,{
            link: this.state.linkLink
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="uni">
                    <h2>Update uni</h2>
                    <input value = {this.state.uniCountry} name = "uniCountry" onChange={this.handleFrom}/>
                    <input value = {this.state.unisUni} name = "unisUni" onChange={this.handleFrom}/>
                    <button onClick={this.updateUni}>update</button>
                </div>
                <div className="location">
                    <h2>Add Location</h2>
                    <input value = {this.state.timezone} name = "timezone" onChange={this.handleFrom}/>
                    <input value = {this.state.countries} name = "countries" onChange={this.handleFrom}/>
                    <input value = {this.state.unis} name = "unis" onChange={this.handleFrom}/>
                    <button onClick={this.addLocation}>add</button>
                </div>
                <div className="country">
                    <h2>Update Country</h2>
                    <input value = {this.state.country} name = "country" onChange={this.handleFrom}/>
                    <input value = {this.state.newCountry} name = "newCountry" onChange={this.handleFrom}/>
                    <button onClick={this.updateCountry}>update</button>
                </div>

            </div>
        )
    }
}
export default addLocation;

