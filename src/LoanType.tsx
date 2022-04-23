import React, {useState} from "react"
import LoanInfo from "./LoanInfo";

const LoanType: any = (props : any) => {
    let [info, setInfo] = useState({})

    return (
        <div className="container mx-40   ">
            <div className=" flex justify-center items-center ">
                {
                props.products.map((e : any, key : number) => (
                    <div>
                        <img className="w-10 h-10"
                            src={
                                e.image
                            }
                            key={key}
                            alt={
                                e.name
                            }
                            onClick={
                                () => setInfo(e)
                            }/>
                    </div>
                ))
            } </div>
            <LoanInfo data={info}/>
        </div>
    )
}


    

export default LoanType;