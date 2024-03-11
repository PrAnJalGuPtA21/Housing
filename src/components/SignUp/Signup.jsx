import { NavLink } from "react-router-dom"
import backpic from "../../assets/pic.jpg"
import image1 from "../../assets/google.png"


import "./Signup.css"
const Signup = () => {
    return (
        <div style={{ position: "relative", width: "100%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <img src={backpic} alt="backpic" style={{ width: "100%" }} />
            <form className="glass" style={{ disply: "flex", flexDirection: "column", position: "absolute" }}>
                <p style={{ display: "flex", height: "45px", width: "100%", justifyContent: "center", fontSize: "35px", top: "2px", color: "white" ,marginTop:"20px"}}>Sign UP </p>
                <div className="inputs" style={{margin:"40px",display:"flex" , justifyContent:"center",flexDirection:"column" , padding:"20px"}}>
                    <input type="text" name="username" placeholder="username" value="" style={{ marginBottom:"20px",borderRadius: "50px", display: "flex", justifyContent: "center", padding: "10px", background: "transparent", color: "white", border: "1px solid grey" }} />
                    <input type="text" name="username" placeholder="Password" value="" style={{ margin:"2px",borderRadius: "50px", display: "flex", justifyContent: "center", padding: "10px", background: "transparent", color: "white", border: "1px solid grey" }} />
                </div>
                <button style={{color:"white" , background:"transparent", display:"flex" , justifyContent:"center" , width:"200px" , height:"40px" , alignItems:"center" , left:"90px"}}>
                    <NavLink to="/" style={{color:"white", textDecoration:"none"}}>Sign Up</NavLink> 
                </button>
                <p style={{display:"flex" , left:"20px", justifyContent:"center" , marginTop:"20px"}}>Already Have a account ?
                    <NavLink to="/signin" style={{ marginLeft:"10px",textDecoration:"none", color:"#5D94CB"}}> Login. </NavLink>
                </p>
                <p style={{display:"flex" , justifyContent:"center"}}>Or login with ..
                </p>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
                    <img className="imgs" src={image1} alt="" style={{width:"30px" ,height:"30px", margin:"8px"}}/>
                </div>
                
            </form>
        </div>
    )
}

export default Signup