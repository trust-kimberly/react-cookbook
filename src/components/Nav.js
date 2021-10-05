import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
    return (
        <>
            <nav>
                <h1>Nav</h1>
                <Link to="/">Go to Home Page</Link>
                <Link to="/about/">About</Link>
                <Link to="/recipes/">Recipes</Link>
                <Link to="/contact/">Contact</Link>
            </nav>
        </>
    )
}

export default Nav