
import { useEffect, useState } from "react"
import { Fragment } from "react/cjs/react.production.min"

const LearnUseEffect = () => {

    const [value, setValue] = useState(5)


    // call only on page load
    useEffect(() => {
        console.log("page load useeffect hook called")
    }, [])


    useEffect(() => {

        console.log("after value changes", value)

        // component unmount phase 
        return () => {
            console.log("component unmount case triggered")
        }

    }, [value])

    const handleIncrement = () => {
        setValue(previousValue => previousValue + 1)
    }

    return (
        <Fragment>
            <div className="container">
                <h1 className="mt-5 mb-5"> Learn Use Effect</h1>
                <h5>
                    Current value is {value}
                </h5>

                <button onClick={handleIncrement}>
                    Increment
                </button>

            </div>
        </Fragment>
    )
}

export default LearnUseEffect