import React from "react";
import "./infoForma.scss";

function InfoForma(props){

    return(
        <div>
            <ul>
                <li>NS: {props.ns}</li>
                <li>A: {props.a}</li>
                <li>Country: {props.country}</li>
                <li>Domain: {props.domain}</li>
            </ul>
        </div>
    );
}

export default InfoForma;