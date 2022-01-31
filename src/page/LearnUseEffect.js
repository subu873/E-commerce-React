
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Fragment } from "react/cjs/react.production.min"

const LearnUseEffect = () => {

    const history = useHistory()

    console.log("History obj is ", { history })

    const [value, setValue] = useState(5)


    const goBack = () => {
        history.goBack()
    }

    const goToHomePage = () => {
        history.push("/test")
    }


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


                <button className="btn btn-primary ml-5 mr-5" onClick={goBack}>
                    Go Back
                </button>
                <button className="btn btn-primary ml-5 mr-5" onClick={goToHomePage}>
                    Go to Homepage
                </button>

            </div>
        </Fragment>
    )
}

export default LearnUseEffect