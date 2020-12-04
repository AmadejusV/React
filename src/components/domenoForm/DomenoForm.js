import React,{useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import InfoForma from "../infoForma/InfoForma";
import "./domenoForm.scss";

function DomenoForm() {

    const [domainName, setDomainName] = useState("");
    const [domainObject, setDomainObject] = useState(null);

    const getDomainRequest = async (e) =>{
        
        e.preventDefault();
        const url=`https://api.domainsdb.info/v1/domains/search?limit=1&domain=${domainName}`;
        
        console.log("paspausta")
        // const response = await fetch(url);
        // console.log("paimta "+url)
        // const responseJson = await response.json();
        // setDomainObject(responseJson);

        const response = await fetch(url)
        .then(responseJson => responseJson.json())
        .then(data=>{return setDomainObject(data.domains[0])})


        // console.log(responseJson)
        console.log("o cia atsakymas ")
        console.log(domainObject)
    }
    
    
    // useEffect(() =>{
    // //     getDomainRequest(domainName);
    // }, []);

    // function getInfo(e){
    //     console.log(domainObject);
    //     e.preventDefault();
    // }

    // useEffect(()=>{
    //     fetch("https://api.domainsdb.info/v1/domains/search?limit=50&domain="+domainName)
    //     .then(res=>res.json())
    //     .then((res)=>{
    //         setDomainObject(res)
    //     })
    // },[domainObject])
    
    function domainInputHandler(event){
        const ivestasDomain = event.target.value;
        setDomainName(ivestasDomain);
        console.log(ivestasDomain)
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Domeno paieška: pvz.: "kitm.lt"</Form.Label>
                    <Form.Control type="text" onChange={domainInputHandler} value={domainName} placeholder="Įveskite domeną..." />
                </Form.Group>
                <Button onClick={getDomainRequest} className="violet" type="submit">
                    Ieškoti
                </Button>
            </Form>
            
            <ul>
                 {domainObject!==null?<InfoForma ns={domainObject.NS} a={domainObject.A} country={domainObject.country} domain={domainObject.domain}/>:null}
            </ul>
        </div>
    );
}

export default DomenoForm;





