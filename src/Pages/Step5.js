import React,{useState} from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Step5 = () => {
    const navigate = useNavigate();
    const [modules, setModules] = useState("");
    const [users, setUsers] = useState("");
    const [subscriptionFees, setSubscriptionFees] = useState("");
    
    const data = () =>{
        localStorage.setItem("modules", JSON.stringify(modules));
       localStorage.setItem("no_of_users", JSON.stringify(users));
       localStorage.setItem("subsription_fees", JSON.stringify(subscriptionFees));
     }

     let [num, setNum]= useState(0);
     let incNum =()=>{
       if(num<10)
       {
       setNum(Number(num)+1);
       }
     };
     let decNum = () => {
        if(num>0)
        {
         setNum(num - 1);
        }
     }
    let handleChange = (e)=>{
      setNum(e.target.value);
     }

    return (
        <div>
        <h5 className="title ">Steps 5 of 5</h5>
              <div className="hgt">
            <p className="sub-title">Subscription</p>
            <div className="flxbox" style={{justifyContent: "inherit"}}>
                <div style={{ borderRight: "2px solid rgb(49, 49, 49)" }}>
                    <p className="pg-txt">Select Plan</p>
                    <div className="radio">
                        <input type="radio" id="Monthly" name="fav_language" value="Monthly" checked />
                        <label for="Monthly" >Monthly</label> <br></br>
                        <input type="radio" id="Annually" name="fav_language" value="Annually" />
                        <label for="Annually">Annually</label> <br></br>
                    </div>

                    <p className="pg-txt">Modules</p>
                    <div className="bor">
                        <div className="bg-blk">
                            <p className="pg-txt">Standard </p>
                            <p className="pg-txt">$ 250/User </p>
                        </div>
                        <div className="p-3">
                            <label className="container">
                                <span className="span">CRM</span>
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span className="span">Asset Management</span>
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span className="span">Value Chain Tracking</span>
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span className="span">Consumer Engagement</span>
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bor mt-3">
                        <div className="bg-blk">
                            <p className="pg-txt">Optional </p>
                            <p className="pg-txt">$ 250/User </p>
                        </div>
                        <div className="p-3">
                            <label className="container">
                                <span className="span">Order & Stock Management</span>
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="right-wrap">
                    <div className="flxbox mb-3">
                        <div>
                            <p className="pg-txt">Users</p>
                            <p className="Drag-sub" style={{ textAlign: "left", marginTop: -10, marginBottom: 0 }}>(Starting at '5 Users')</p>
                        </div>
                        <div className="count">
                            <button onClick={decNum}>-</button>
                           <input type="text" style={{width: "18px", backgroundColor: "rgb(72, 70, 70)", border:"none", color:"#fff"}} value={num} onChange={handleChange}/>
                            <button onClick={incNum}>+</button>
                        </div>
                    </div>

                    <p className="pg-txt">Subscription Fee</p>
                    <div className="flxbox">
                        <p className="pg-txt" style={{ fontSize: 14 }}>Standard <span className="Drag-sub">(5 Users)</span></p>
                        <p className="pg-txt">$1250.00 </p>
                    </div>
                    <div className="flxbox">
                        <p className="pg-txt" style={{ fontSize: 14 }}>OSM <span className="Drag-sub">(5 Users)</span></p>
                        <p className="pg-txt">$1250.00 </p>
                    </div>
                    <div className="flxbox">
                        <p className="pg-txt" style={{ fontSize: 14 }}>GST <span className="Drag-sub">(10%)</span></p>
                        <p className="pg-txt">$250.00 </p>
                    </div>
                    <div className="flxbox">
                        <b><p className="pg-txt" style={{ fontSize: 14 }}>Total</p></b>
                        <b> <p className="pg-txt">$2250.00 </p></b>
                    </div>
                    <p className="pg-txt mt-3">Payment Method</p>
                    <div className="radio">
                        <input type="radio" id="Paypal " name="fav" value="MonPaypal" checked/>
                        <label for="Paypal ">Paypal </label> <br></br>
                        <input type="radio" id="Debit/Credit card  " name="fav" value="Debit/Credit card  " />
                        <label for="Annually">Debit/Credit card  </label> <br></br>
                        <input type="radio" id="Invoice " name="fav" value="Invoice " />
                        <label for="Annually">Invoice</label> <br></br>
                    </div>
                </div>

            </div>
            </div>
            <div className="btn">
                <button className="backBtn"  onClick={() => navigate('/4')}>Back</button>
                <button className="nxtBtn " style={ {cursor: "not-allowed"}}  onClick={() =>{ navigate('/5'); data();}} disabled>Next</button>
            </div>
        </div>
    )
};
export default Step5;