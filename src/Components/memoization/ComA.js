import { memo, useEffect, useRef, useState } from "react";

const CompA = ({...props}) => {
    const [renderCount, setRenderCount] = useState(0) 
    const {incrementNumberA} = props
    const ref = useRef(0);

    useEffect(() => {
        //setRenderCount(prevcount => prevcount + 1); // if we update the state under useEffect it will continuously re render the page
        // setInterval((time) => {
        //     console.log('New time',time)
        // }, 2000)
        ref.current = ref.current + 1;
    });

    console.log('This is comp A')
    const buttonClick = () => {
        incrementNumberA(Math.random());
    }

    return (
        <>
        <div>This is component A called {ref.current}</div>
        <input type="button" onClick={buttonClick} value="CompA"></input>
        </>
    );
}

export default memo(CompA);