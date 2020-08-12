import React from "react"
import MoreInfo from "./MoreInfo"
import style from "./Style/home.module.css"

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: true,
            dog : ""
        }
    }

    toggleStage = (e) => {
        this.setState({
            stage: false,
            dog : e.target.id
        })
    }

    toggleStageTrue = () =>{
        this.setState ({
            stage : true
        })
    }

    render() {
        return (
            <>
                {
                    this.state.stage
                        ?
                        <>
                            <div>
                                <img width="100%" src="dogs.jpg" alt="dog" />
                                <div>
                                    <h2>About the Planning to Adopt?</h2>
                                    <div className={style.info}>
                                        <div>
                                            <h3>Check the Dogs</h3>
                                            <p>We are providing many dogs for you to adopt</p>
                                            <button onClick={this.props.onClick}>Click</button>
                                        </div>
                                        <div>
                                            <h3>COVID-19 Resources</h3>
                                            <p>Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now. </p>
                                            <button>Click</button>
                                        </div>
                                        <div>
                                            <h3>Check the Dogs</h3>
                                            <p>We are providing many dogs for you to adopt</p>
                                            <button>Click</button>
                                        </div>
                                    </div>
                                </div>
                                <h2 style={{background:"whitesmoke"}}>Dogs Available For Adoption</h2>
                                <div className={style.divImg}>
                                    <div>
                                        <img className={style.img} src="https://images.dog.ceo/breeds/dingo/n02115641_10286.jpg" alt="Dingo" />
                                        <button id="dingo" onClick={this.toggleStage} >Click to see More</button>
                                    </div>
                                    <div>
                                        <img className={style.img} src="https://images.dog.ceo/breeds/cairn/n02096177_1123.jpg" alt="Cairn" />
                                        <button id="cairn" onClick={this.toggleStage}>Click to see More</button>
                                    </div>
                                    <div>
                                        <img className={style.img} src="https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg" alt="Pitbull" />
                                        <button id="pitbull" onClick={this.toggleStage}>Click to see More</button>
                                    </div>
                                </div>
                                <div>
                                    <h2>Want to BUY?</h2>
                                    <div className={style.info}>
                                        
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                                <div className={style.about}>
                                    <h2>About Us</h2>
                                    <div className={style.aboutDiv}>
                                        <div className={style.aboutInfo}>

                                        </div>
                                        <div className={style.aboutImg}>
                                            <img width="100%" height="300px" src="raindog.jpg" alt="rain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div style={{marginTop:"5%"}}>
                            <MoreInfo name={this.state.dog} onClick={this.toggleStageTrue}/>
                        </div>

                }

            </>
        )
    }
}