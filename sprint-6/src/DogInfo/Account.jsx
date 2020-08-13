import React from "react"
import axios from "axios"
import Payment from "./Payment"
import data from "../dogInfo.json"
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
            loginUser: [],
            active: this.props.dogName,
            dogImg: "",
            dogInfo: [],
            payment: false
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
            show: true
        })
        alert("Registered successfully!")
        this.remove()
    }

    userLogin = () => {
        const { email, password, user } = this.state

        let item = []
        item = user.filter(item => (item.email === email && item.password === password))

        if (item.length === 0) {
            alert("You are not registered yet!")
            this.handleRegister()
            return
        }
        else {
            alert("Your are Login Successfully! ")
            this.setState({
                loginUser: item,
                log: false
            })
        }
        this.remove()
    }

    userLogout = () => {
        this.setState({
            log: true
        })
    }

    remove = () => {
        this.setState({
            email: "",
            password: "",
            name: "",
            age: "",
            address: "",
        })
    }

    confirm = () => {
        this.setState({
            payment: true
        })
    }

    finalClick = () =>{
        alert(`Thanks for Adopting ${this.state.loginUser[0].name}. We will contact you shortly! `)
        this.props.handle()
    }

    cancel = () =>{
        alert("Thanks For Watching!")
        this.props.handle()
    }

    componentDidMount() {
        if (this.state.active !== "") {
            axios.get(`https://dog.ceo/api/breed/${this.state.active}/images/random`)
                .then(res => res.data)
                .then(res =>
                    this.setState({
                        dogImg: res.message,
                        dogInfo: data.filter(item => item.name === this.state.active)
                    })
                )
        }
    }

    render() {
        const { loginUser, dogImg, dogInfo } = this.state

        return (
            <div style={{ marginTop: "5%" }}>
                {
                    this.state.payment
                        ?
                            <Payment info={dogInfo} img={dogImg} user={loginUser} onCancel={this.cancel} onClick={this.finalClick} />
                        :
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
                                                <button className={style.login} onClick={this.handleLogin}>L<br /><br />O<br /><br />G<br /><br />I<br /><br />N</button>
                                            </div>
                                        </div>

                                }
                            </div>
                            :
                            <div>
                                <div className={style.fixed}>
                                    <button onClick={this.userLogout}>LogOut</button>
                                </div>
                                <div className={style.userCard}>
                                    <div>
                                        <img className={style.profile} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="User" />
                                    </div>
                                    <div>
                                        <h2>{loginUser[0].name} <span>({loginUser[0].age} years)</span></h2>
                                        <h3>{loginUser[0].email}</h3>
                                        <h4>Address : {loginUser[0].address}</h4>
                                    </div>
                                </div>
                                <hr className={style.hr} />
                                <h2 className={style.text}>Adopted Dog Details</h2>
                                <div className={style.flex}>
                                    <div>
                                        <img className={style.dogImg} width="400px" height="400px" src={dogImg} alt="DogImage" />
                                    </div>
                                    <div className={style.dogInfo}>
                                        <h2>{dogInfo[0].Name} ({dogInfo[0].Speed})</h2>
                                        <small>{dogInfo[0].Temperament}</small>
                                        <p><span>Colors Available :</span> {dogInfo[0].Colors} </p>
                                        <p><span>LifeSpan : </span>{dogInfo[0].Lifespan}</p>
                                        <p>{dogInfo[0].Description}</p>
                                        <span>Prize : </span><em>₹{dogInfo[0].prize}</em> only
                                            <button onClick={this.confirm}>Confirm</button>
                                    </div>
                                </div>
                            </div>
                }
            </div>
        )
    }
}