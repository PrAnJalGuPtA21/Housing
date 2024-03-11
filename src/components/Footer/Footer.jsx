import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/" style={{textDecoration:"none"}}><a href="#" className="nav-link px-2 text-body-secondary">Home</a></Link></li>
                    <li className="nav-item"><Link to="/feature" style={{textDecoration:"none"}}><a href="#" className="nav-link px-2 text-body-secondary">Features</a></Link></li>
                    <li className="nav-item"><Link to="/pricing" style={{textDecoration:"none"}}><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></Link></li>
                    <li className="nav-item"><Link to="/home" style={{textDecoration:"none"}}><a href="#" className="nav-link px-2 text-body-secondary">About</a></Link></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 PG Development</p>
            </footer>
        </div>
    )
}

export default Footer