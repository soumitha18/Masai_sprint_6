import React from "react"
import axios from "axios"
import style from "./Style/more.module.css"
import dogData from "../dogInfo.json"

export default class MoreInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
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
                <div className={style.btns}>
                    <button onClick={this.props.onClick}>Back</button>
                    <button >Book</button>
                </div>
                <div>
                    {
                        dogData.map((item => (
                            (item.name === this.state.name)
                                ?
                                <div style={{ textAlign: "center", paddingLeft: "20%", paddingRight: "20%" }} key={item.name}>
                                    <h1 style={{ marginBottom: "0%" , textDecoration:"underline"}}>{item.name}</h1>
                                    <small style={{ marginTop: "0%" }}>{item.Temperament}</small>
                                    <p><span style={{ fontWeight: "bolder" }}>Colours : </span> {item.Colors}</p>
                                    <p><span style={{ fontWeight: "bolder" }}>Speed : </span> {item.Speed}</p>
                                    <p><span style={{ fontWeight: "bolder" }}>LifeSpan : </span>{item.Lifespan}</p>
                                    <small>({item.Description})</small>
                                </div>
                                :
                                ""
                        )))
                    }
                </div>

                <div>
                    <h2 className={style.center}>Related Photos</h2>
                    <hr />
                    {
                        this.state.data.map((item, i) => (
                            <div className={style.page} key={i}>
                                <img className={style.imgDog} src={item} alt={i} />
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}