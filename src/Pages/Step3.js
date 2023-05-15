import React, { useState } from "react";
import { Input, FormGroup, Label } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Step3 = () => {
    const navigate = useNavigate();
    const [provider, setProvider] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [businessPhone, setBusinessPhone] = useState("");
    const [technicalName, setTechnicalName] = useState("");
    const [technicalEmail, setTechnicalEmail] = useState("");
    const [technicalPhone, setTechnicalPhone] = useState("");

    const data = () =>{
        localStorage.setItem("provider", JSON.stringify(provider));
       localStorage.setItem("name", JSON.stringify(businessName));
       localStorage.setItem("email", JSON.stringify(businessEmail));
       localStorage.setItem("phone", JSON.stringify(businessPhone));
       localStorage.setItem("name", JSON.stringify(technicalName));
       localStorage.setItem("email", JSON.stringify(technicalEmail));
       localStorage.setItem("phone", JSON.stringify(technicalPhone));
     }
    return (
        <div>
            <h5 className="title ">Steps 3 of 5</h5>
            <p className="sub-title">Supply Chain Partner</p>
            <div>
                <div>
                    <FormGroup className="w-50">
                        <Label>
                            List of Supply Chain provider
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            type="select"
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                        >
                            <option>
                                Manufacturer
                            </option>
                            <option>
                                Manufacturing
                            </option>
                        </Input>
                    </FormGroup>
                    <p className="sub-title">Business Contact</p>
                    <div className="flxbox">
                        <FormGroup>
                            <Label>
                                Name
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Name "
                                type="text"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Email
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Email"
                                type="email"
                                value={businessEmail}
                                onChange={(e) => setBusinessEmail(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <FormGroup className="w-50">
                        <Label>
                            Phone
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            name="Phone"
                            type="number"
                            value={businessPhone}
                            onChange={(e) => setBusinessPhone(e.target.value)}
                        />
                    </FormGroup>
                    <p className="sub-title">Technical Contact</p>
                    <div className="flxbox">
                        <FormGroup>
                            <Label>
                                Name
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Name "
                                type="text"
                                value={technicalName}
                                onChange={(e) => setTechnicalName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Email
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Email"
                                type="email"
                                value={technicalEmail}
                                onChange={(e) => setTechnicalEmail(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <FormGroup className="w-50">
                        <Label>
                            Phone
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            name="Phone"
                            type="number"
                            value={technicalPhone}
                            onChange={(e) => setTechnicalPhone(e.target.value)}
                        />
                    </FormGroup>
                </div>
                <button className="product">+ Add More</button>
            </div>
            <div className="btn mt-3">
                <button className="backBtn"  onClick={() => navigate('/2')}>Back</button>
                <button className="nxtBtn"  onClick={() =>{ navigate('/4'); data();}}>Next</button>
            </div>
        </div>
    )
};
export default Step3;