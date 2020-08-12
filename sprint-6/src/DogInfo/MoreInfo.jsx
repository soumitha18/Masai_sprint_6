import React from "react"

export default class MoreInfo extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name : this.props.name,
            data : []
        }
    }

    componentDidMount () {
        console.log(this.state.name)
    }

    render () {
        return (
            <>
                
            </>
        )
    }
}