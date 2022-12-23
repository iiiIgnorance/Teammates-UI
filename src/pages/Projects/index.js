import React, { useState, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
//import data from './data/mock-data.json';
import axios from 'axios'
//import './style.scss';

let PageSize = 2;

export default function ProjectList() {
    const api = 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects';
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState([]);
    function getData(){
        axios.get(api)
            .then((response) => {

                console.log(response.data.data);
                setList(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return list.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, list]);
    return (
        <>
            <h2>Projects List</h2>
            <button onClick={getData}>Show</button>
            <table>
                <thead>
                <tr>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    currentTableData.map((value,key)=> {
                        return (
                            <tr>
                                <td key={key}>{value}</td>
                            </tr>
                        );
                    })

                }
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={list.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}
/*
class projectList extends React.Component {

    constructor() {
        super();

        this.state = {
            api:'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects',
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
                    <h2>Projects List</h2>
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
export default projectList;
 */
