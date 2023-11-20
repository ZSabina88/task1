import React from 'react';
import { CORE_CONCEPTS } from "./data";

function CoreConcept() {
    return (
        (CORE_CONCEPTS.map((item) => 
            <li>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </li>
        
        ))

    );
}

export default CoreConcept;
