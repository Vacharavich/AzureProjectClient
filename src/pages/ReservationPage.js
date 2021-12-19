import React, { useState } from 'react';

class ReservationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            tel: "",
            email: "",
            roomtype: "standard",
            datefrom: "",
            dateto: "",
            spreq: ""
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTel = this.handleChangeTel.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeRoomtype = this.handleChangeRoomtype.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
        this.handleChangeSpReq = this.handleChangeSpReq.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeTel(e) {
        this.setState({tel: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangeRoomtype(e) {
        this.setState({roomtype: e.target.value});
    }

    handleChangeDateFrom(e) {
        this.setState({datefrom: e.target.value});
    }

    handleChangeDateTo(e) {
        this.setState({dateto: e.target.value});
    }

    handleChangeSpReq(e) {
        this.setState({spreq: e.target.value});
    }

    submitHandler(e) {
        alert('A reservation is submitted');

        let reservation = {
            name: this.state.name,
            tel: this.state.tel,
            email: this.state.email,
            roomtype: this.state.roomtype,
            datefrom: this.state.datefrom,
            dateto: this.state.dateto,
            spreq: this.state.spreq
        }

        console.log(reservation);
        
        fetch("http://localhost:3030/reservation-post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservation),
        }).then(response => response.json())
        .then( () => {
            alert('A reservation has successfully made');
        })

        e.preventDefault();
    }

    render() {
        return(
            <div>
                <section class="reservation">
                    <article>
                        <form onSubmit={this.submitHandler}>
                            <h3>Reservation Form</h3>
                            <label>
                                Name:
                                <input type="text"
                                id="name"
                                placeholder="Enter the name" required
                                onChange={this.handleChangeName}
                                />
                            </label>
                            <br/>
                            <label>
                                Tel:
                                <input type="tel"
                                id="tel"
                                placeholder="Enter the telephone number" required
                                onChange={this.handleChangeTel}
                                />
                            </label>
                            <br/>
                            <label>
                                Email:
                                <input type="email"
                                id="email"
                                placeholder="Enter the email" required
                                onChange={this.handleChangeEmail}
                                />
                            </label>
                            <br/>
                            <label>
                                Room Type:
                                <select value={this.props.roomtype} id="roomtype" onChange={this.handleChangeRoomtype}>
                                    <option value="standard">Standard Room</option>
                                    <option value="deluxe">Deluxe Room</option>
                                </select>
                            </label>
                            <br/>
                            <label for="">Date</label>
                            <br/>
                            <label>
                                From:
                                <input type="date"
                                id="datefrom"
                                placeholder="" required
                                onChange={this.handleChangeDateFrom}
                                />
                            </label>
                            <br/>
                            <label>
                                To:
                                <input type="date"
                                id="dateto"
                                placeholder="" required
                                onChange={this.handleChangeDateTo}
                                />
                            </label>
                            <br/>
                            <label>
                                Special Requirement:
                                <br/>
                                <textarea rows="5" col="40"
                                id="spreq"
                                placeholder="If you require any specific requirements, please type in here."
                                onChange={this.handleChangeSpReq}
                                />
                            </label>
                            <br/>
                            <button type="submit">Submit</button>
                        </form>
                    </article>
                    <article>
                
                    </article>
                </section>
            </div>
        );
    }
}

export default ReservationPage;