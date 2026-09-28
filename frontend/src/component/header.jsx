import Search from "./search"
import { useSelector } from "react-redux"

const Header = ()=>{
    const products = useSelector((state)=>state.products.products.data)

    return (
        <section className="header">
            <Search />
            <p><span>N</span> Neelam</p>
        </section>
    )
}

export default Header