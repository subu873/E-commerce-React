import { Fragment, useCallback, useState } from "react"
import ToDoList from "../component/Todos"

const LearnUseCallBackHook = () => {

    const [todo, setTodo] = useState([])
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevstate => prevstate + 1)
    }

    const handleAddNewToDo = useCallback(() => {
        console.log("some operationn")
        //array merge
    }, [todo])

    return (
        <Fragment>
            <div className="container mt-5">
                <div className="col-md-12 text-center">
                    <h1>Learn Use Call Back Hook</h1>

                    <ToDoList todo={todo} addNewTodo={handleAddNewToDo} />

                    <h3 className="mt-3">Count value is {count}</h3>
                    <button className="btn btn-primary" onClick={handleIncrement}>Increment </button>

                </div>
            </div>
        </Fragment>
    )
}

export default LearnUseCallBackHook