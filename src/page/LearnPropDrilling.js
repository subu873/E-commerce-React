import { Fragment } from "react"
import { useState } from "react/cjs/react.development"
import ChildA from "../component/childA"

const LearnPropDrilling = () => {

    const [name, setName] = useState("Ankit singh")

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Learn Prop Drilling
            </h1>

            <ChildA firstName={name} />

        </Fragment>

    )
}

export default LearnPropDrilling