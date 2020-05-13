import React from "react"
import Header from "./Header"
import MemeCollection from "./MemeCollection"
import MemeGenerator from "./MemeGenerator"

function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
            <MemeCollection />
        </div>
    )
}

export default App