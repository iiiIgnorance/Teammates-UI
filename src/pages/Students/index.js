import React, { useState, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
//import data from './data/mock-data.json';
import axios from 'axios'
//import './style.scss';

let PageSize = 1;

export default function StudentList() {
    const api = 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students';
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState([]);
    async function getData(){
        await axios.get(api)
            .then((response) => {

                console.log(response.data.body);
                setList(response.data.body);
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
            <h2>Student List</h2>
            <button onClick={getData}>Show</button>
            <table>
                <thead>
                <tr>
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
