import React from "react";
import "./domenuList.scss";
import {data} from "../domenoForm/DomenoForm.js";
import InfoForma from "../infoForma/InfoForma.js";

function DomenuList(){

    return(
        <div>
            <h1>Išsaugotų domenų sarašas</h1>
            <ul>
                {data!=null?data.map(object=><InfoForma
                    key={object.domain}
                    ns={object.NS}
                    a={object.A}
                    domain={object.domain}
                    country={object.country}
                />):null}
            </ul>
        </div>
    );
}

// data[0].A

export default DomenuList;