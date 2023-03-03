import React from "react"

import MainHeaderContent from "./MainHeaderContent.jsx"
import HeaderTop from "./HeaderTop.jsx"
import HeaderBottom from "./HeaderBottom.jsx"

function Header(props) {
    return (
        <header>
            <HeaderTop />
            <MainHeaderContent />
            <HeaderBottom />
        </header>
    )
}

export default Header