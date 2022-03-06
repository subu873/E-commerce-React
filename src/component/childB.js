import { Fragment } from "react"
import ChildC from "./childC"

const ChildB = ({ firstName }) => {
    return (
        <Fragment>
            <h1>
                Child B
            </h1>
            <ChildC firstName={firstName} />
        </Fragment>

    )
}

export default ChildB