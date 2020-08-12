import React from "react"
import axios from 'axios'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
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

                }, console.log(this.state)))
        }
    }
    render() {

        return (
            <>
                <div>
                    {this.state.data.map(item => (
                        <div>
                            <img src={item.img} alt="dog name" />

                            <h4>{item.name} <button>more info</button></h4>


                        </div>
                    ))}
                </div>
            </>
        )
    }
}