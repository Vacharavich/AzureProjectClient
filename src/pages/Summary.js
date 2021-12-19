import React, { useState } from 'react';

class BookingData extends React.Component {
    constructor(props) {
        super(props);

        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys () {
        return Object.keys(this.props.data[0]);
    }

    getHeader () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData () {
        var items = this.props.data;
        console.log("In Items")
        console.log(items)
        var keys = this.getKeys();
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }  
    
    render() {
        return(
            <table>
                    <thead><tr>{this.getHeader()}</tr></thead>
                    <tbody>{
                        this.props.data && this.props.data.map (item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.customerName}</td>
                                    <td>{item.tel}</td>
                                    <td>{item.email}</td>
                                    <td>{item.roomtype}</td>
                                    <td>{item.datefrom}</td>
                                    <td>{item.dateto}</td>
                                    <td>{item.spreq}</td>
                                </tr>
                            )
                        })
                    }</tbody>
            </table>
        );
    }
}

class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: "",
                    customerName: "",
                    tel: "",
                    email: "",
                    roomtype: "",
                    datefrom: "",
                    dateto: "",
                    spreq: ""
                }
            ]
        }
    }  

    componentDidMount() {
        console.log("Component Did Mount.");
        this.selectall();
    }

    selectall() {
        fetch("http://localhost:3030/reservation-getall", {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
            },
        }).then((response) => response.json())
        .then((response) => {
            console.log(response.results);
            this.setState({
                data: response.results
            });
        })
    }

    render() {

        //this.selectall();

        console.log("In render Method.");
        console.log(this.state.data);

        return (
            <div>
                <section class="container">
                    <BookingData data={this.state.data} />
                </section>
            </div>
        )
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}



export default Summary;