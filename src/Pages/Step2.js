import React, { useState } from "react";
import { Input, FormGroup, Label } from 'reactstrap';
import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const Step2 = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState("");
    const [productType, setProductType] = useState("");
    const [productLife, setProductLife] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState("");

    const handleChange = (file) => {
        setFile(file);
    };

    const data = () =>{
       localStorage.setItem("product", JSON.stringify(product));
      localStorage.setItem("productType", JSON.stringify(productType));
      localStorage.setItem("productLife", JSON.stringify(productLife));
      localStorage.setItem("productName", JSON.stringify(productName));
      localStorage.setItem("productImage", JSON.stringify(productImage));
    }
    return (
        <div>
        <h5 className="title ">Steps 2 of 5</h5>
        <div style={{height: '82vh'}}>
            <p className="sub-title">Product Details</p>
            <div className="flxbox">
                <div>
                    <FormGroup>
                        <Label>
                            Industry
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            type="select"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}

                        >
                            <option>
                                Manufacturing
                            </option>
                            <option>
                                Manufacturing
                            </option>
                            <option>
                                Manufacturingss
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Product Type
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            type="select"
                            value={productType}
                            onChange={(e) => setProductType(e.target.value)}

                        >
                            <option>
                               Single
                            </option>
                            <option>
                               Double
                            </option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Product Variant
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            name="Product variant "
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Expected Product Life
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            name="Expected product life "
                            type="text"
                            value={productLife}
                            onChange={(e) => setProductLife(e.target.value)}
                        />
                    </FormGroup>

                </div>
                <div>
                    <FormGroup>
                        <Label>
                            Product Category
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            name="Product category"
                            type="text"
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Product Name
                                <span className='star'>*</span>
                        </Label>
                        <Input
                            name="Product name"
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Product Image
                                <span className='star'>*</span>
                        </Label>
                        <div className="relative">
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                                value={productImage}
                                onChange={(e) => setProductImage(e.target.value)}
                            />
                              <div className="absolut">
                              <p className="Drag">Drag and Drop files here</p>
                              <p className="mt-2 mb-2 Drag-sub">  Or</p>
                              <p className="Drag">Browse files</p>
                              <p className="Drag-sub">(Supported files: Jpeg, Png, Svg and Pdf)</p>
                              </div>
                        </div>
                    </FormGroup>
                </div>
            </div>
            <button className="product">+ Add Product</button>
            </div>
            <div className="btn">
            <button className="backBtn" onClick={() => navigate('/')}>Back</button>
            <button className="nxtBtn"  onClick={() =>{ navigate('/3'); data();}}>Next</button>
            </div>
        </div>
    )
};
export default Step2;