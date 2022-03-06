import { Fragment } from "react";

const TestPage = () => {


    const arr = [1, 2, 3, 4, 5, 6, 7, 8]

    const resp = arr.every((key) => {
        return key > 0
    })

    console.log("res", resp)

    return (
        <Fragment>
            <h1 className="text-center mt-5">Testing Array Every Method</h1>
        </Fragment>
    )
}
export default TestPage
