import { useCallback, useState, useRef, useEffect, useMemo } from "react";
import CompA from "./ComA";
import CompB from "./ComB";

const CompMain = () => {
    const [num, setnum] = useState(0);
    const [numA, setnumA] = useState(0);
    const [staticVal, setStatic] = useState(0);
    const ref = useRef(0);

    useEffect(() => {
        ref.current = ref.current + 1;
    });

    const incrementNumber = useCallback(() => {
        setnum(num + 1);
    },[num])

    const greatestnumber =  useMemo(() => {
        console.log('greatestnumber')
        return 'Got the greatest value';
            // for( let num = 0; num < 100000; num++) {
            //     if(num === 100000 ) {
                    
            //     }
            // }
    },[num])
    const MemonizedFunction = useCallback(num => incrementNumberA(num), [numA]);
    const incrementNumberA = (number) => {
        setnumA(number);
    }

    return (
        <>
        { ref.current}
        <CompA incrementNumberA={MemonizedFunction} ></CompA>
        <CompB incrementNumber = {incrementNumber} maxValue={greatestnumber} compbnum={num}></CompB>
        </>
    )
}

export default CompMain;