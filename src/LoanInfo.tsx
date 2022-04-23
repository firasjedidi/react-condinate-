import React, {useState, useEffect} from "react";

const LoanInfo: any = (props : any) => {
    let data = props.data
    let interest = 0
    let [total, settotal] = useState(0)
    let [info, setInfo] = useState('')
    let [monthlyInstallment, setmonthlyInstallment] = useState(0)
    let currentDate = new Date();
    let date;
    let [loanAmount,setloanAmount]=useState(0)
    let [monthLoan,setmonthLoan]=useState(0)
    const handleChange = (event : any) => {
        const {name} = event.target;
        if(name === "loanAmount"){
            setloanAmount(event.target.valueAsNumber);
        }
        else {
            setmonthLoan(event.target.valueAsNumber)
        }
    };
    const handleChangeMonth=(event:string)=>{
        if(event ==='-'){
            setmonthLoan((prevState)=>prevState-1)
        }else{
            setmonthLoan((prevState)=>prevState+1)
        }
    }
  
    
    useEffect(() => {
        
            if (Object.entries(props.data).length !== 0) {
                if (loanAmount < parseFloat(data.min_amount)) {
                    setInfo('you should respect the min and max amounts of the selected product')
                } else if (monthLoan > parseInt(data.max_tenure) || monthLoan < parseInt(data.min_tenure)) {
                    setInfo('you should respect the min and max tenure properties of the selected product')
                } else {
                    settotal(() => loanAmount + (loanAmount * interest))
                    setmonthlyInstallment(() => total / monthLoan)
                    currentDate.setMonth(currentDate.getMonth() + monthLoan);
                    console.log(currentDate,currentDate.toLocaleString(
                        'default', {month: 'long'}
                      ) ,currentDate.getFullYear())
                    setInfo(`You’re planning ${monthLoan} monthly deposits to reach your $${loanAmount} goal by 
                    ${currentDate.toLocaleString('default', {month: 'long'}) } 
                     ${currentDate.getFullYear()}. The total amount loaned will be ${total}`)
                }
            } else {
                setInfo('you should select the loan type')
            }
        
    }, [handleChange, handleChangeMonth])
    return (
        <div>

            <div className="flex justify-evenly lex flex-wrap">
                <div>
                    <h3>Loan amount</h3>
                    <input type="number" name="loanAmount" className="min-w-full   border-[#E9EEF2] rounded px-2 py-1 border-2"
                        onChange={handleChange}/>
                </div>
                <div>
                    <h3> Number of Months</h3>
                    <button className="translate-x-4 fixed"  onClick={()=>handleChangeMonth('-')}>{"<"}</button>
                    <input type="number" name="monthLoan" className="  border-[#E9EEF2] py-1 rounded border-2 text-center"
                        onChange={handleChange} value={monthLoan}/>
                        <button className="-translate-x-4 fixed" onClick={()=>{handleChangeMonth('+')}}>{">"} </button>
                </div>

            </div>

            <div className="border-[#E9EEF2] py-1 border-2">
                <h3>
                    Monthly amount <span className="text-[#0079FF]">${monthlyInstallment}</span></h3>
            </div>
            <div className="border-[#E9EEF2] py-1 bg-[#F4F8FA]">
                <h3>{info}</h3>
            </div>
            <button className="mt-40 py-4 min-w-full min-w-80 bg-[#1B31A8] center text-white  rounded-full">Apply Now </button>
        </div>
    )
}

   
export default LoanInfo;