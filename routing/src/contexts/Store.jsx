import React, { useState } from "react";
import { sampleContext } from "./testContext";

function Store({ children }) { // Accept children as props

    const [a, setA] = useState(10);

    return (
        <sampleContext.Provider value={{ a, setA }}>
            {children}
        </sampleContext.Provider>
    );
}

export default Store;