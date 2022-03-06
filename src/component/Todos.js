import { Fragment, memo } from "react"

const ToDoList = (props) => {

    console.log("todo list render", props)

    return (
        <Fragment>
            <h1>To Do List</h1>
        </Fragment>
    )
}

export default memo(ToDoList)