import React from "react"
import Home from "./Home"
import Dog from "./Dog"
import Account from "./Account"

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            home: false,
            dog: true,
            account: false
        }
    }



    render() {
        const { home, dog} = this.state
        return (
            <>
                <div>

                </div>
                {
                    home
                        ?
                        <Home /> 
                        : 
                        dog
                            ?
                            <Dog />
                            :
                            <Account />
                }

            </>
        )
    }
}