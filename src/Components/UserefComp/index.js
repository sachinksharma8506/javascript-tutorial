import { useEffect, useRef, useState } from "react"

const Userefcomp = () => {
    const [value, setValue]= useState('');
    const [value1, setValue1]= useState('');
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = '';
    }, [value, value1])
    return (
        <>
            {value}
            <input ref={inputRef}  type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <input ref={inputRef} type="text" value={value1} onChange={(e) => setValue1( e.target.value)}></input>
        </>
    )
}

export default Userefcomp;