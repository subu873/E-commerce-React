import { useState } from "react"
import { Fragment } from "react"
import ToDoList from "../component/Todos"

const LearnMemo = () => {

    const [todoListData, setTodoListData] = useState(["todo1", "todo2"])
    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        setCount((c) => c + 1)
    }

    return (
        <Fragment>
            <h1>Learn Memo Hook</h1>

            <ToDoList data={todoListData} />

            <h2>Count {count}</h2>

            <button className="btn btn-primary"
                onClick={handleIncrement}>Increment</button>

        </Fragment>
    )
}

export default LearnMemo