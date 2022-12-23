import React from 'react'
import axios from 'axios'

class locationList extends React.Component {

    constructor() {
        super();

        this.state = {
            api:'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/locations',
            list:[]
        }
    }

    getData=()=>{
        axios.get(this.state.api)
            .then((response) =>{

                console.log(response.data.data);

                this.setState({
                    list:response.data.data
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
                <div>
                    <h2>Location List</h2>
                    <button onClick={this.getData}>Show</button>
                    <ul>
                        {
                            this.state.list.map((value,key)=>{
                                return<li  key={key}>{value}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default locationList;
