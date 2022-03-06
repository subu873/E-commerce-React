import { Fragment } from "react"

const ChildC = ({ firstName }) => {
    return (
        <Fragment>
            <h1>
                Child C
            </h1>
            <h5> Name is  {firstName}</h5>
        </Fragment>

    )
}

export default ChildC