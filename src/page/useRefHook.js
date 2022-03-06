import { Fragment, useRef, useState } from "react"
import { useEffect } from "react/cjs/react.development";

const LearnUseRefHook = () => {

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("a");

    console.count('counter')
    useEffect(() => {

        console.log({ inputValue }, { previousInputValue })
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

export default LearnUseRefHook