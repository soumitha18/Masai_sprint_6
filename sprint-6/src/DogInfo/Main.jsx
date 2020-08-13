import React from "react"
import Home from "./Home"
import Dog from "./Dog"
import Account from "./Account"
import style from "./Style/main.module.css"

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            home: true,
            dog: false,
            account: false,
            active: ""
        }
    }

    handleHome = () =>{
        this.setState({
            home : true,
            dog : false,
            account : false
        })
    }

    handleDogs = () =>{
        this.setState({
            home : false,
            dog : true,
            account : false
        })
    }

    handleUser = (e) =>{
        console.log(e.target.id)
        this.setState({
            home : false,
            dog : false,
            account : true,
            active: e.target.id
        })
    }

    render() {
        const { home, dog} = this.state
        return (
            <>
                <div className={style.nav}>
                    <span className={style.logo}>Dogiee</span>
                    <button className={this.state.home ? style.active1 : style.btn1} onClick={this.handleHome}>HOME</button>
                    <button className={this.state.dog ? style.active : style.btn2} onClick={this.handleDogs}>DOGS</button>
                    <button className={this.state.account ? style.active : style.btn3} onClick={this.handleUser}>USER</button>
                </div>
                {
                    home
                        ?
                        <Home userPage={this.handleUser} onClick={this.handleDogs} /> 
                        : 
                        dog
                            ?
                            <Dog  onClick={this.handleUser}/>
                            :
                            <Account dogName={this.state.active} />
                }

            </>
        )
    }
}