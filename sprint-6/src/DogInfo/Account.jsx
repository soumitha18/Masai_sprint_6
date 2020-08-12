import React from "react"
import style from "./Style/account.module.css"

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            age: "",
            address: "",
            show: false,
            log: true,
            user: [],
            loginUser: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleRegister = () => {
        this.setState({
            show: false
        })
    }

    handleLogin = () => {
        this.setState({
            show: true
        })
    }

    addUser = () => {
        const { name, email, password, age, address, user } = this.state
        let obj = {
            name: name,
            email: email,
            password: password,
            age: age,
            address: address
        }

        this.setState({
            user: [...user, obj],
            log: false
        })
    }

    userLogin = () => {
        const { email, password, user } = this.state

        this.setState({
            loginUser: user.filter(item => (item.email === email && item.password === password)),
            log: false
        })
    }

    userLogout = () => {
        this.setState({
            log: true
        })
    }

    render() {
        return (
            <div style={{ marginTop: "5%" }}>
                {
                    this.state.log
                        ?
                        <div className={style.divForm}>
                            <img width="450px" height="250px" src="https://image.flaticon.com/icons/svg/889/889020.svg" alt="Link" />
                            {
                                this.state.show
                                    ?
                                    <div className={style.form}>
                                        <div className={style.formDiv}>
                                            <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Enter the Email" />
                                            <input name="password" value={this.state.password} placeholder="Enter the Password" onChange={this.handleChange} type="password" />
                                            <button onClick={this.userLogin}>Login</button>
                                        </div>
                                        <div className={style.buttons}>
                                            <button className={style.regis} onClick={this.handleRegister}>Register</button>
                                        </div>
                                    </div>
                                    :
                                    <div className={style.form}>
                                        <div className={style.formDiv}>
                                            <input name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Enter the Name" />
                                            <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Enter the email" />
                                            <input name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Enter the Password" />
                                            <input name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Conform Password" />
                                            <input name="age" value={this.state.age} onChange={this.handleChange} type="text" placeholder="Enter the Age" />
                                            <input name="address" value={this.state.address} onChange={this.handleChange} type="text" placeholder="Enter the address" />
                                            <button onClick={this.addUser}>Register</button>
                                        </div>
                                        <div className={style.buttons}>
                                            <button className={style.login} onClick={this.handleLogin}>L<br />o<br />g<br />i<br />n</button>
                                        </div>
                                    </div>

                            }
                        </div>
                        :
                        <div>

                            <div className={style.fixed}>
                                <button onClick={this.userLogout}>logout</button>
                            </div>
                        </div>
                }
            </div>
        )
    }
}