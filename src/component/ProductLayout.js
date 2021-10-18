import {Fragment} from "react"
const ProductLayout = (props)=>{
    const {name,description,price} = props

    return (
        <Fragment>
            <div className="card">
                <h1>{name}</h1>
                <p> {description}</p>
                <p>Product Price $ {price}</p>
            </div>
        </Fragment>
    )
}

export default ProductLayout
