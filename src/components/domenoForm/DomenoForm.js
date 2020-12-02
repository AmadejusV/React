import React,{useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import "./domenoForm.scss";

function DomenoForm() {

    const [domainName, setDomainName] = useState("");
    const [domainObject, setDomainObject] = useState(null);

    const getDomainRequest = async (domainName) =>{
        
        const url="https://api.domainsdb.info/v1/domains/search?limit=50&domain="+domainName;
        // console.log(url);
        const response = await fetch(url);

        const responseJson = await response.json();
        
        setDomainObject(responseJson);
        console.log(responseJson)
    }

    useEffect(() =>{
        getDomainRequest(domainName);
    }, [domainName]);

    function getInfo(e){
        console.log(domainObject);
        e.preventDefault();
    }

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
                <Button onClick={getInfo} className="violet" type="submit">
                    Ieškoti
                </Button>
            </Form>
        </div>
    );
}

export default DomenoForm;





