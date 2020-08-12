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
            account: false
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

    handleUser = () =>{
        this.setState({
            home : false,
            dog : false,
            account : true
        })
    }

    render() {
        const { home, dog} = this.state
        return (
            <>
                <div className={style.nav}>
                    <span className={style.logo}>Dogiee</span>
                    <button className={style.btn1} onClick={this.handleHome}>HOME</button>
                    <button className={style.btn2} onClick={this.handleDogs}>DOGS</button>
                    <button className={style.btn3} onClick={this.handleUser}>USER</button>
                </div>
                {
                    home
                        ?
                        <Home onClick={this.handleDogs} /> 
                        : 
                        dog
                            ?
                            <Dog />
                            :
                            <Account />
                }

            </>
        )
    }
}