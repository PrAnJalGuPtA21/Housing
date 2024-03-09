import pic from "../../assets/Feature.jpg"

const Pricing = () => {
  return (
    <div style={{ width: "100%", height: "70%", display: "flex", position: "relative", justifyContent: "center" }}>
      <img src={pic} alt="" style={{ width: "100%", objectFit: "fill" }} />
      <p style={{ position: "absolute ", color: " white", display: "flex", top: "300px", fontSize: "60px" }}> We Serves What's <span style={{ color: "yellow", paddingLeft: "10px", paddingRight: "10px" }}> BEST</span> for the people...</p>
      <p style={{ position: "absolute ", color: " white", width: "600px", display: "flex", top: "390px", fontSize: "20px" }}>
        Your trust is our duty , and we take it very seriously. That’s why we use only the finest, most reliable materials in every aspect of our business.
      </p>
      {/* <div className="card1" style={{ color: "white", position:"absolute",backgroundColor:"black" ,margin:"0px", display:"flex" ,top:"550px",width:"15%" , left:"350px" ,height:"300px"}}>
          <p style={{ fontSize:"20px"}}>Basic Plan</p>
        </div>
        <div className="card2" style={{ color: "white" , position:"absolute",backgroundColor:"green",margin:"0px",top:"500px",width:"15%" , left:"650px" ,height:"300px"}}>
          Average Plan 
        </div>
        <div className="card3" style={{ color: "white" , position:"absolute",backgroundColor:"yellow",margin:"0px",top:"550px",width:"15%" , right:"350px" ,height:"300px"}}>
          Advance Plan
        </div> */}
      <p style={{ position: "absolute", color: "white", top: "550px", fontSize: "40px" }}>Our Plans and Pricings..... </p>
      <div className="div" style={{ position: "absolute", top: "650px", width: "800px" }}>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center ">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Features</li>
                  <li>Security and Maintenance</li>
                  <li>Area and Location</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary" style={{ fontSize: "20px", height: "40px" }}>Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Features</li>
                  <li>Security and Maintenance</li>
                  <li>Area and Location</li>
                  <li>Phone and email Support</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary" style={{ fontSize: "20px", height: "40px" }}>Get started</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Advance</h4>
              </div>
              <div className="card-body" >
                <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Features</li>
                  <li>Security and Maintenance</li>
                  <li>Pricing and Phone support</li>
                  <li>Brokerage Support</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary" style={{ fontSize: "20px", height: "40px" }}>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing