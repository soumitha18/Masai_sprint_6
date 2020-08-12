import React from "react"
import axios from "axios"

export default class MoreInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            info : {},
            data: []
        }
    }

    componentDidMount() {
        axios.get(`https://dog.ceo/api/breed/${this.state.name}/images`)
            .then(res => res.data)
            .then(res =>
                this.setState({
                    data: res.message
                })
            )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <button onClick={this.props.onClick}>Back</button>
                <div>
                    {
                        this.state.data.map((item,i)=>(
                            <div key={i}>
                                <img src={item} alt={i} />
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}