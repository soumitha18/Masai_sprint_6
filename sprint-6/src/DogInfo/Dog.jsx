 
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
                   
                },
                {
                    Name : "AIREDALE",
                    name: "airedale",
                    img: "",
                  
                },
                {
                    Name : "BOXER",
                    name: "boxer",
                    img: "",
                   
                },
                {
                    Name : "AFFENPINSCHER",
                    name: "affenpinscher",
                    img: "",
                   
                },
                {
                    Name : "AKITA",
                    name: "akita",
                    img: "",
                   
                },
                {
                    Name: "DOBERMAN",
                    name: "doberman",
                    img: "",
                    
                },
                {
                    Name : "BRIARD",
                    name: "briard",
                    img: "",
                
                },
                {
                    Name : "WHIPPET",
                    name: "whippet",
                    img: "",
                 
                },
                {
                    Name : "LHASA",
                    name: "lhasa",
                    img: "",
                   
                },
                {
                    Name : "ESKIMO",
                    name: "eskimo",
                    img: "",
                   
                },
                {
                    Name : "SALUKI",
                    name: "saluki",
                    img: "",
                   
                },
                {
                    Name : "DINGO",
                    name: "dingo",
                    img: "",
             
                },
                {
                    Name : "MALTESE",
                    name: "maltese",
                    img: "",
                   
                },
                {
                    Name : "VIZSLA",
                    name: "vizsla",
                    img: "",
             
                },
                {
                    Name : "AFRICAN",
                    name: "african",
                    img: "",
                
                },
                {
                    Name : "PAPILLON",
                    name: "papillon",
                    img: "",
              
                },
                {
                    Name : "PEMBROKE",
                    name: "pembroke",
                    img: "",
                  
                },
                {
                    Name : "PITBULL",
                    name: "pitbull",
                    img: "",
                  
                },
                {
                    Name : "REDBONE",
                    name: "redbone",
                    img: "",
                  
                },
                {
                    Name : "CHOW",
                    name: "chow",
                    img: "",
                  
                },
                {
                    Name : "CAIRN",
                    name: "cairn",
                    img: "",
                  
                },
                {
                    Name : "HAVANESE",
                    name: "havanese",
                    img: "",
                  
                },
                {
                    Name : "KELPIE",
                    name: "kelpie",
                    img: "",
                  
                },
                {
                    Name : "LABRADOR",
                    name: "labrador",
                    img: "",
                  
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