import { Fragment } from "react"
import ChildB from "./childB"

const ChildA = ({ firstName }) => {
    return (
        <Fragment>
            <h1>
                Child A
            </h1>

            <ChildB firstName={firstName} />

        </Fragment>
    )
}

export default ChildA