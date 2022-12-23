import React from 'react'
import axios from 'axios'
import './index.css'

class deleteLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            apiTimezone:'',
            apiUni:'',
            apiCountry:'',
            nameProject:[],
            uniProject:[],
            linkProject:[],
            timezone:'',
            country:'',
            countryTimezone:'',
            uniTimezone:'',
            link:'',
            linkName:''
        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    delUni = () => {
        const{uni, apiUni, uniTimezone} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + uniTimezone + '/students/' + uni
        },() => {console.log(uni, apiUni)});
        this.deleteUni()
    }
    delTimezone = () => {
        const{timezone, apiTimezone} = this.state
        this.setState({
            apiTimezone: 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + timezone
        })
        console.log(timezone, apiTimezone)
        this.deleteTimezone()
    }

    delCountry = () => {
        const{country, apiCountry, countryTimezone} = this.state
        this.setState({
            apiCountry : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations/' + countryTimezone + '/countries/' + country
        })
        console.log(country, apiCountry)
        this.deleteCountry()
    }

    deleteUni=()=>{
        axios.delete(this.state.apiUni)
            .then((response) =>{
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    deleteTimezone=()=>{
        axios.delete(this.state.apiTimezone)
            .then((response) =>{
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    deleteCountry=()=>{
        axios.delete(this.state.apiCountry)
            .then((response) =>{
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="country">
                    <h2>Delete Country</h2>
                    <input value = {this.state.countryTimezone} name = "countryTimezone" onChange={this.handleFrom}/>
                    <input value = {this.state.country} name = "country" onChange={this.handleFrom}/>
                    <button onClick={this.delCountry}>delete</button>
                </div>
                <div className="timezone">
                    <h2>Delete location</h2>
                    <input value = {this.state.timezone} name = "timezone" onChange={this.handleFrom}/>
                    <button onClick={this.delTimezone}>delete</button>
                </div>
                <div className="uni">
                    <h2>Delete Student</h2>
                    <input value = {this.state.uniTimezone} name = "uniTimezone" onChange={this.handleFrom}/>
                    <input value = {this.state.uni} name = "uni" onChange={this.handleFrom}/>
                    <button onClick={this.delUni}>delete</button>
                </div>
            </div>
        )
    }
}
export default deleteLocation;
