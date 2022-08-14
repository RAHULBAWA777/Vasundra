import { useState } from "react"
import "./popUp.css"
 export default function PopUpComponent({popUpState,setPopUpState}){
    
    return(<div className={popUpState?"pop-up":"pop-up-closed"}>
        
        <h2 className="he">DISCLAIMER</h2>
        <h5 className="hp">By using or accessing the Website you agree with the Disclaimer without any qualification or limitation. The Company reserves the right to terminate, revoke, modify, alter, add and delete any one or more of the terms and conditions of the website. The Company shall be under no obligation to notify the visitor of the amendment to the terms and conditions and the visitor shall be bound by such amended terms and conditions.</h5>
        <button className="butt" onClick={()=>setPopUpState(false)}>AGREE</button>
    </div>)
}