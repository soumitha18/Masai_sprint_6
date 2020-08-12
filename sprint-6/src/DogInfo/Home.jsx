import React from "react"
import MoreInfo from "./MoreInfo"
import style from "./Style/home.module.css"

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: true,
            dog: ""
        }
    }

    toggleStage = (e) => {
        this.setState({
            stage: false,
            dog: e.target.id
        })
    }

    toggleStageTrue = () => {
        this.setState({
            stage: true
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
                                    <h2 className={style.h2}>About the Planning to Adopt?</h2>
                                    <div className={style.info}>
                                        <div>
                                            <h3 className={style.h3}>Check the Dogs</h3>
                                            <p>We are providing many dogs for you to adopt</p>
                                            <button onClick={this.props.onClick}>Click</button>
                                        </div>
                                        <div>
                                            <h3 className={style.h3}>COVID-19 Resources</h3>
                                            <p>Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now. </p>
                                            <button>Click</button>
                                        </div>
                                        <div>
                                            <h3 className={style.h3}>Check the Dogs</h3>
                                            <p>We are providing many dogs for you to adopt</p>
                                            <button>Click</button>
                                        </div>
                                    </div>
                                </div>
                                <h2 className={style.h2} style={{ background: "whitesmoke" }}>Dogs Available For Adoption</h2>
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
                                <h2 className={`${style.h2} ${style.marginBottom}`}>Want to Adopt?</h2>
                                <div className={style.marginBottom}>
                                    <div className={style.flex}>
                                        <div className={`${style.background} ${style.div1}`}>
                                            <img src="https://image.flaticon.com/icons/svg/2173/2173800.svg" alt="Happy users" />
                                        </div>
                                        <div style={{textAlign:"center", paddingLeft:"8%", paddingRight:"8%"}} className={style.infoDiv}>
                                            <h2 style={{marginTop:"30%"}}>Training And Control</h2>
                                            <small>Dogiee Training has always been an integral part of any pets training process. Check out our various categories of Leashes, Harness and collars that provides great support and comfort for your pets while you have full control over them.</small>
                                        </div>
                                    </div>
                                    <div className={style.flex}>
                                        <div style={{textAlign:"center", paddingRight:"7%", marginTop:"10%"}} className={`${style.infoDiv} ${style.div2}`}>
                                            <p>Dogs make for the best friends, and it’s only right that we celebrate them for all the joy and love they’ve given us. Whether labeled on a dog bandana or a paw print poster, you’ll need the perfect dog quote to accompany your piece. That might be with a custom photo book about your dog, a social media post for National Dog Day, or with a personalized pet gift picked out just for your furry friend. Whatever you decide to do, make sure you have funny dog captions or cute dog quotes to go with it. Find our favorite dog quotes below.</p>
                                        </div>
                                        <div className={style.background}>
                                            <img src="https://image.flaticon.com/icons/svg/2930/2930650.svg" alt="Rating" />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.rating}>
                                    <div>
                                        <img width="60px" height="60px" src="https://image.flaticon.com/icons/svg/2173/2173800.svg" alt="Happy"/>
                                        <p><span>9392+</span><br/> Happy Customers</p>
                                    </div>
                                    <div>
                                        <img width="60px" height="60px" src="https://image.flaticon.com/icons/svg/616/616720.svg" alt="Dogs"/>
                                        <p><span>19820+</span><br/> Dogs adopted</p>
                                    </div>
                                    <div>
                                        <img width="60px" height="60px" src="https://image.flaticon.com/icons/svg/2037/2037850.svg" alt="subscribers" />
                                        <p><span>20097+</span><br/> Subscribers</p>
                                    </div>
                                    <div>
                                        <img width="60px" height="60px" src="https://image.flaticon.com/icons/svg/616/616490.svg" alt="rating" />
                                        <p><span>4</span><br/> starts</p>
                                    </div>
                                </div>
                                <div className={style.about}>
                                    <h2 className={style.h2}>About Us</h2>
                                    <div className={style.aboutDiv}>
                                        <div className={style.aboutInfo}>
                                            <p>“Outside of a dog, a book is a man’s best friend. Inside of a dog it’s too dark to read.”</p>
                                            <p style={{textDecoration:"underline"}}>Bangalore</p>
                                            <p style={{textDecoration:"underline"}}>Chennai</p>
                                            <p style={{textDecoration:"underline"}}>Patna</p>
                                            <p style={{textDecoration:"underline"}}>Chittoor</p>
                                            <h2>Madhuri Soumitha (9876543210)</h2>
                                            <img width="40px" height="40px" src="https://image.flaticon.com/icons/svg/187/187189.svg" alt="Facebook" />
                                            <img style={{marginLeft:"20px"}} width="40px" height="40px" src="https://image.flaticon.com/icons/svg/1384/1384060.svg" alt="YouTube" />
                                            <img style={{marginLeft:"20px"}} width="40px" height="40px" src="https://image.flaticon.com/icons/svg/733/733579.svg" alt="Twitter" />
                                        </div>
                                        <div className={style.aboutImg}>
                                            <img width="100%" height="300px" src="raindog.jpg" alt="rain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div style={{ marginTop: "5%" }}>
                            <MoreInfo name={this.state.dog} onClick={this.toggleStageTrue} />
                        </div>

                }

            </>
        )
    }
}