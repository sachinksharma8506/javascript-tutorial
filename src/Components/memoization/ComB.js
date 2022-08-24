import { memo, useState, useRef, useEffect } from "react";

const CompB = ({...props}) => {
    const { incrementNumber, compbnum, maxValue} = props;
    console.log('This is comp B')
    const ref = useRef(0);

    useEffect(() => {
        ref.current = ref.current + 1;
    });

    const [number, setNumber] = useState(0);
    const buttonClick = () => {
        console.log("Comp B button is clicked");
    }


    return (
        <>
            <div>This is component B called {ref.current} {maxValue}</div>
            <input type="button" onClick={incrementNumber} value={`CompB ${compbnum}`}></input>
            <input type="button" onClick={buttonClick} value="CompB Button"></input>
        </>
    );
}

export default memo(CompB);