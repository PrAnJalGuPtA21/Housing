import image from "../../assets/housing.png"
import React from "react"
import "./Hero.css"
const Hero = () => {
    return (
        <>
            <div style={{ position: "relative", display: "flex" }}>
                <img src={image} style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "700px",
                    marginLeft: "400px",
                }} />
                <div style={{ position: "absolute", textAlign: "center", left: "200px", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "230px" }}>
                    <p style={{ fontSize: "40px", fontWeight: "bold", alignContent: "center", alignItems: "center" }}>Find Your Dream House</p>
                    <p style={{ fontSize: "40px", fontWeight: "bold", alignContent: "center", alignItems: "center", color: "#e07b39" }}>WITH US !!!</p>
                    <p style={{ fontSize: "13px", width: "420px" }}>Lookup for Residential properties for buying in India with 0% Brokerage,100% Genuine Owners. India's #1 Real Estate Property Website Without Brokers.</p>
                    <button >
                        Pricing
                    </button>
                    <button>Features</button>
                </div>
            </div>
        </>
    )
}

export default Hero