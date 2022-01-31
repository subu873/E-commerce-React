import { Fragment, useRef, useState } from "react"
import { useEffect } from "react/cjs/react.development";

const LearnUseRefHook = () => {

    const [name, setName] = useState("")

    const inputRef = useRef();

    const handleRefClick = () => {
        inputRef.current.style.display = 'none';
        inputRef.current.focus()
    }

    useEffect(() => {
        console.log("rerender")
    })

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <Fragment>

            <input type="text" value="" onChange={handleChange} value={name} />

            <input type="text" ref={inputRef} name="name" />

            <button onClick={handleRefClick}>
                Submit
            </button>

        </Fragment>
    )
}

export default LearnUseRefHook