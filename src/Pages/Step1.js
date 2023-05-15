import React,{useState, useEffect} from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Step1 = () => {
    const navigate = useNavigate();
    const [legalEntityName, setlegalEntityName] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [postCode, setPostCode] = useState("");

    const [abn, setAbn] = useState("");
    const [city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");



    const data = () =>{
        localStorage.setItem("legal_entity_name", JSON.stringify(legalEntityName));
       localStorage.setItem("name", JSON.stringify(name));
       localStorage.setItem("address", JSON.stringify(address));
       localStorage.setItem("abn", JSON.stringify(abn));
       localStorage.setItem("city", JSON.stringify(city));
       localStorage.setItem("phone_number", JSON.stringify(phoneNumber));
       localStorage.setItem("email", JSON.stringify(email));
       localStorage.setItem("postcode", JSON.stringify(postCode));
     } 

    return (
        <div>
            <h5 className="title ">Steps 1 of 5</h5>
            <div className="hgt">
                <p className="sub-title">Company Details</p>
                <div className="flxbox">
                    <div>
                        <FormGroup>
                            <Label>
                                Login Entity name
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Login Entry name"
                                type="text"
                                value={legalEntityName}
                                onChange={(e) => setlegalEntityName(e.target.value)}

                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                ACN
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="ACN"
                                type="text"
                               
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Physical address
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Physical address "
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup>
                            <Label>
                                Company name
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Company name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                ABN
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="ABN"
                                type="text"
                                value={abn}
                                onChange={(e) => setAbn(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Phone
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Phone"
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Postal address
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Postal address"
                                type="text"
                                value={postCode}
                                onChange={(e) => setPostCode(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="nxtBtn"  onClick={() =>{ navigate('/2'); data();}}>Next</button>
            </div>
        </div>
    )
};
export default Step1;