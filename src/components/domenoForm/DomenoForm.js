import React,{useState} from "react";
import {Form, Button} from 'react-bootstrap';
import InfoForma from "../infoForma/InfoForma";
import "./domenoForm.scss";


let savedDomains = localStorage.getItem('savedDomainsArray')
     ? JSON.parse(localStorage.getItem('savedDomainsArray'))
     : [];
  
     localStorage.setItem('savedDomainsArray', JSON.stringify(savedDomains));
     const data = JSON.parse(localStorage.getItem('savedDomainsArray'));


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

         await fetch(url)
        .then(responseJson => responseJson.json())
        .then(data=>{return setDomainObject(data.domains[0])})


        // console.log(responseJson)
        console.log("o cia atsakymas ")
        console.log(domainObject)
    }
    
    // localStorage.clear() 

    // useEffect(() =>{
    // //     getDomainRequest(domainName);
    // }, []);

    

    console.log(data+" cia yra savedDomains array pries istumiant nauja object")
    console.log(data[4])

    function saveDomainHandler(event){
        event.preventDefault();
        savedDomains.push(domainObject);
        localStorage.setItem("savedDomainsArray", JSON.stringify(savedDomains));
    }
    
    
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
                <Button onClick={saveDomainHandler} className="violet" type="submit">
                    Išsaugoti
                </Button>
            </Form>
            
            <ul>
                 {domainObject!==null?<InfoForma ns={domainObject.NS} a={domainObject.A} country={domainObject.country} domain={domainObject.domain}/>:null}
            </ul>
        </div>
    );
}

export default DomenoForm;
export {data};




