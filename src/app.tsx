import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import data from "../build/public/products.json"
import LoanType from "./loanType"

const App = () => (
    <div className="justify-center items-center">
        <LoanType products={data}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
