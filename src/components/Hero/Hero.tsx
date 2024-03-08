import image from "../../assets/housing.png"
import React from "react"
const Hero = () => {
    return (
        <>
        <div style={{ position: "relative",display:"flex" }}>
            <img src={image} style={{
                display: "flex",
                flexDirection: "row",
                height: "700px",
                marginLeft: "400px",
            }} />
            <div style={{position:"absolute", textAlign:"center",left:"200px",display:"flex" ,flexDirection:"column" ,alignItems:"center" }}>
                <p style={{fontSize:"40px",fontWeight:"bold" , alignContent:"center" , alignItems:"center" , marginTop :"250px"}}>Find Your Dream House</p>
                <p style={{fontSize:"40px",fontWeight:"bold" , alignContent:"center" , alignItems:"center" ,color:"#e07b39"}}>WITH US !!!</p>
                </div>
        </div>
        </>
    )
}

export default Hero