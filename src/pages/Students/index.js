import React from 'react'
import axios from 'axios'
import './index.css'

class studentList extends React.Component {
    //构造函数
    constructor() {
        super();
        //react定义数据
        this.state = {
            api:'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students',
            list:[]
        }
    }
    //请求接口的方法
    getData=()=>{
        axios.get(this.state.api)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                //用到this需要注意指向，箭头函数
                this.setState({
                    list:response.data.body
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
                    <h2>Student List</h2>
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
export default studentList;
