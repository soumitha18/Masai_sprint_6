import React from "react"
import axios from 'axios'
import MoreInfo from "./MoreInfo"
import style from "./Style/dog.module.css"

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "",
            stage: true,
            data: [
                {
                    name: "hound",
                    img: "",
                    images: []
                },
                {
                    name: "airedale",
                    img: "",
                    images: []
                },
                {
                    name: "boxer",
                    img: "",
                    images: []
                },
                {
                    name: "affenpinscher",
                    img: "",
                    images: []
                },
                {
                    name: "akita",
                    img: "",
                    images: []
                },
                {
                    name: "doberman",
                    img: "",
                    images: []
                },
                {
                    name: "briard",
                    img: "",
                    images: []
                },
                {
                    name: "whippet",
                    img: "",
                    images: []
                },
                {
                    name: "lhasa",
                    img: "",
                    images: []
                },
                {
                    name: "eskimo",
                    img: "",
                    images: []
                },
                {
                    name: "saluki",
                    img: "",
                    images: []
                },
                {
                    name: "shiba",
                    img: "",
                    images: []
                },
                {
                    name: "maltese",
                    img: "",
                    images: []
                },
                {
                    name: "vizsla",
                    img: "",
                    images: []
                },
                {
                    name: "african",
                    img: "",
                    images: []
                },
                {
                    name: "papillon",
                    img: "",
                    images: []
                },
                {
                    name: "pembroke",
                    img: "",
                    images: []
                },
                {
                    name: "pitbull",
                    img: "",
                    images: []
                },
                {
                    name: "redbone",
                    img: "",
                    images: []
                },
                {
                    name: "chow",
                    img: "",
                    images: []
                },
                {
                    name: "cairn",
                    img: "",
                    images: []
                },
                {
                    name: "havanese",
                    img: "",
                    images: []
                },
                {
                    name: "kelpie",
                    img: "",
                    images: []
                },
                {
                    name: "labrador",
                    img: "",
                    images: []
                },

            ]
        }

    }

    toggleStage = (e) => {
        this.setState({
            stage: false,
            active : e.target.id
        })
    }

    toggleStageTrue = () =>{
        this.setState ({
            stage : true
        })
    }

    componentDidMount() {
        for (let index = 0; index < this.state.data.length; index++) {
            axios.get(`https://dog.ceo/api/breed/${this.state.data[index].name}/images/random`)
                .then(res => res.data)
                .then(res => this.setState({
                    data: this.state.data.map((item, i) => {
                        if (i === index) {
                            item.img = res.message
                            return item

                        }
                        else {
                            return item
                        }
                    })

                }))
                .catch(err => console.log(err))
        }
    }
    render() {

        return (
            <>
                {
                    this.state.stage
                        ?
                        <>
                            <div className={style.marginTop}>
                                {this.state.data.map((item,i) => (
                                    <div className={style.div} key={item.name}>
                                        <img  className={style.img} src={item.img} alt={i} />
                                        <h2 className={style.dogname}>{item.name}</h2>
                                        <button className={style.more} id={item.name} onClick={this.toggleStage}>more info</button>
                                    </div>
                                ))}
                            </div>
                        </>
                        :
                        <div style={{marginTop:"5%"}}>
                            <MoreInfo name={this.state.active} onClick={this.toggleStageTrue}/>
                        </div>
                }

            </>
        )
    }
}