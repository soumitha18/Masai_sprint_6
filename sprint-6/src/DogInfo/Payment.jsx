import React from "react"

export default class Payment extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            user : this.props.user,
            info : this.props.info,
            img : this.props.img,
            cardNO : "",
        }
    }

    render(){
        return(
            <>
            Payment
            <button onClick={this.props.onClick} >Pay</button>
            </>
        )
    }
} 