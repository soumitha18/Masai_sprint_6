import React from "react"
import style from "./Style/payment.module.css"

export default class Payment extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            info: this.props.info,
            img: this.props.img,
            cardNo: "",
            cvv: "",
            exm: "",
            exy: "",
            cardName: ""
        }
    }

    componentDidMount() {
        console.log(this.state)
    }

    render() {
        const { user, info, img } = this.state
        return (
            <>
                <h2 style={{textAlign:"center"}}>PAYMENT</h2>
                <div className={style.payment}>
                    <div className={style.userPart} style={{ width: "25%" }}>
                        <h3>User Details</h3>
                        <h3>{user[0].name}</h3>
                        <h4>{user[0].email}</h4>
                        <h4>{user[0].address}</h4>
                    </div>
                    <div className={style.paymentForm} style={{ width: "40%" }}>
                        <input name="cardName"  placeholder="Enter the Card Holder Name" />
                        <input name="cardNo"  placeholder="Enter the Card Number" />
                        <input name="exm"  placeholder="Enter the Expiry Month" />
                        <input name="exy" placeholder="Enter the Expiry Year" />
                        <input name="cvv"  placeholder="Enter the CVV" />
                        <h2>Total : ₹{info[0].prize}</h2>
                        <button onClick={this.props.onClick}>Pay</button>
                    </div>
                    <div className={style.dogPart} style={{ width: "25%" }}>
                        <img width="200px" height="200px" style={{ borderRadius: "100px" }} src={img} alt="dog" />
                        <h2>{info[0].Name}</h2>
                    </div>
                </div>
            </>
        )
    }
} 