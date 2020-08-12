import React from "react"
import Home from "./Home"
import Dog from "./Dog"
import Account from "./Account"

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
                <div>
                    <span>Dogiee</span>
                    <button onClick={this.handleHome}>HOME</button>
                    <button onClick={this.handleDogs}>DOGS</button>
                    <button onClick={this.handleUser}>USER</button>
                </div>
                {
                    home
                        ?
                        <Home /> 
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