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
                    Name:"HOUND",
                    name: "hound",
                    img: "",
                    images: []
                },
                {
                    Name : "AIREDALE",
                    name: "airedale",
                    img: "",
                    images: []
                },
                {
                    Name : "BOXER",
                    name: "boxer",
                    img: "",
                    images: []
                },
                {
                    Name : "AFFENPINSCHER",
                    name: "affenpinscher",
                    img: "",
                    images: []
                },
                {
                    Name : "AKITA",
                    name: "akita",
                    img: "",
                    images: []
                },
                {
                    Name: "DOBERMAN",
                    name: "doberman",
                    img: "",
                    images: []
                },
                {
                    Name : "BRIARD",
                    name: "briard",
                    img: "",
                    images: []
                },
                {
                    Name : "WHIPPET",
                    name: "whippet",
                    img: "",
                    images: []
                },
                {
                    Name : "LHASA",
                    name: "lhasa",
                    img: "",
                    images: []
                },
                {
                    Name : "ESKIMO",
                    name: "eskimo",
                    img: "",
                    images: []
                },
                {
                    Name : "SALUKI",
                    name: "saluki",
                    img: "",
                    images: []
                },
                {
                    Name : "DINGO",
                    name: "dingo",
                    img: "",
                    images: []
                },
                {
                    Name : "MALTESE",
                    name: "maltese",
                    img: "",
                    images: []
                },
                {
                    Name : "VIZSLA",
                    name: "vizsla",
                    img: "",
                    images: []
                },
                {
                    Name : "AFRICAN",
                    name: "african",
                    img: "",
                    images: []
                },
                {
                    Name : "PAPILLON",
                    name: "papillon",
                    img: "",
                    images: []
                },
                {
                    Name : "PEMBROKE",
                    name: "pembroke",
                    img: "",
                    images: []
                },
                {
                    Name : "PITBULL",
                    name: "pitbull",
                    img: "",
                    images: []
                },
                {
                    Name : "REDBONE",
                    name: "redbone",
                    img: "",
                    images: []
                },
                {
                    Name : "CHOW",
                    name: "chow",
                    img: "",
                    images: []
                },
                {
                    Name : "CAIRN",
                    name: "cairn",
                    img: "",
                    images: []
                },
                {
                    Name : "HAVANESE",
                    name: "havanese",
                    img: "",
                    images: []
                },
                {
                    Name : "KELPIE",
                    name: "kelpie",
                    img: "",
                    images: []
                },
                {
                    Name : "LABRADOR",
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

    handleUser = (e) =>{
        this.props.onClick(e)
    }

    render() {

        return (
            <>
                {
                    this.state.stage
                        ?
                        <>
                            <div className={style.marginTop}>
                                <h2 >DOGS FOR ADOPTION</h2>
                                {this.state.data.map((item,i) => (
                                    <div className={style.div} key={item.name}>
                                        <img  className={style.img} src={item.img} alt={i} />
                                        <h2 className={style.dogname}>{item.Name}</h2>
                                        <button className={style.more} id={item.name} onClick={this.toggleStage}>more info</button>
                                    </div>
                                ))}
                            </div>
                        </>
                        :
                        <div style={{marginTop:"5%"}}>
                            <MoreInfo id={this.state.active} handle={this.handleUser} name={this.state.active} onClick={this.toggleStageTrue}/>
                        </div>
                }

            </>
        )
    }
}