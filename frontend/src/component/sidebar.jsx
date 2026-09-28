import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import {BsRecordCircle } from "react-icons/bs"


const Sidebar = ()=>{
    return (
        <section className="sidebar">
            <h2>StockEase</h2>

            <ul>
                <li>
                    <NavLink to="/"  className={({isActive})=>isActive ? "nav-link active" : "nav-link"}><BsRecordCircle/> Inventory</NavLink>
                </li>
                <li>
                    <NavLink to="/add" className={({isActive})=>isActive ? "nav-link active" : "nav-link"}><BsRecordCircle/> Add Product</NavLink>
                </li>
                <li>
                    <Link to="#"><BsRecordCircle/> Category</Link>
                </li>
                 <li>
                    <Link to="#"><BsRecordCircle/> Report</Link>
                </li>
                 <li>
                    <Link to="#"><BsRecordCircle/> Setting</Link>
                </li>
            </ul>
        </section>
    )
}

export default Sidebar