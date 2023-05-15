import React,{useState} from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Step4 = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const data = () =>{
        localStorage.setItem("first_name", JSON.stringify(firstName));
       localStorage.setItem("last_name", JSON.stringify(lastName));
       localStorage.setItem("username", JSON.stringify(username));
       localStorage.setItem("email", JSON.stringify(email));
       localStorage.setItem("phone", JSON.stringify(phone));
       localStorage.setItem("email", JSON.stringify(email));
       localStorage.setItem("role", JSON.stringify(role));
     }

    return (
        <div>
            <h5 className="title ">Steps 4 of 5</h5>
            <div className="hgt">
                <p className="sub-title">User Details</p>
                <div className="flxbox">
                    <div>
                        <FormGroup>
                            <Label>
                                First Name
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="First Name"
                                type="text"
                                placeholder= "Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Username
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Username"
                                type="text"
                                placeholder= "Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Phone Number
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Phone Number"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup>
                            <Label>
                                Last Name
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Last Name"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Email
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Role
                                <span className='star'>*</span>
                            </Label>
                            <Input
                                name="Role"
                                type="text"
                                placeholder="Admin"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="backBtn"  onClick={() => navigate('/3')}>Back</button>
                <button className="nxtBtn"  onClick={() =>{ navigate('/5'); data();}}>Next</button>
            </div>
        </div>
    )
};
export default Step4;