import React from "react"
import style from "./Style/dog.module.css"

export default class Account extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
            show:false,
            arr:[]
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    handleRegister =()=>{
        this.setState({
            show:false
        })
    }
    handleLogin =()=>{
        this.setState({
            show:true
        })
    }
    render (){
       return(
        <>
        <div className={style.login_box}>
            <img width="450px"height="250px"src="./login.webp"/>
            <div className={style.btn}>
                <button onClick={this.handleRegister}>Register</button>
                <button onClick={this.handleLogin}>Login</button>
            </div>
            {this.state.show?
            (
            <form>
                <label>Email </label>
                <input  name="email" value={this.state.email}
                onChange={this.handleChange}type="text"/>
                

                <label>Password</label>
                    <input name="password" value={this.state.password}
                onChange={this.handleChange} type="password"/><br/>
                
                <input type="submit"value ="Login"/>
            </form> 
            ):
            (
            <form>
                <label>Username  </label>
                <input type="text"/>
                <label>Email  </label>
                <input type="text"/>
            
                <label> Password  </label>
                <input type="password"/>
             <br/>
               <label>Age</label>
                <input type="text"/>
                <label>Address</label>
                <input type="text"/>
                <input type="submit"value ="Register"/>
            </form>   
            )   
        }
        </div>
        </>
       )
}
}