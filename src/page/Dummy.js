import { Fragment } from "react";

const TestPage = () => {


    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const resp = arr.some((key) => {
        return key > 5
    })

    console.log("array some response", resp)

    const person = [
        {
            name: "Deepak",
            age: 25
        }, {

            name: "shubham",
            age: 16
        }, {

            name: "Ayush",
            age: 34
        }
    ]

    const isAdult = person.some((key) => {
        return key.age >= 18
    })

    console.log("person is adult check", isAdult)

    return (
        <Fragment>
            <h1 className="text-center mt-5">Testing Array Some Method</h1>
        </Fragment>
    )
}
export default TestPage
