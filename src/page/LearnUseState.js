import {Fragment, useEffect, useState} from "react";

const LearnUseStateHook = () => {

    const [count, setCount] = useState(5)

    const handleIncrement = () => {
        console.log("before count increase", count)
        setCount(count + 1)
        console.log("after count increase", count)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        console.log("useEffect count called", count)
    }, [count])

    return (
        <Fragment>
            <div className="text-center">
                <h1> Learning useState Hook</h1>

                <h5>Count Value = {count}</h5>

                <button className="btn btn-primary mr-5" onClick={handleIncrement}>
                    Increment
                </button>
                <button className="btn btn-primary" onClick={handleDecrement}>
                    Decrement
                </button>
            </div>

        </Fragment>
    )
}

export default LearnUseStateHook
