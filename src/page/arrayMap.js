import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const ProductsMap = () => {



    const [data, setData] = useState([])


    useEffect(() => {

        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data)
                }

            }).catch((err) => {
                console.log("error", err)
                setData([])

            })

    }, [])


    return (
        <Fragment>

            <h1>Products Listing</h1>

            <div className="col-md-12">
                <div className="row">

                    {data.length > 0 && data.map((key, index) => {
                        console.log("key", key)
                        return (
                            <Fragment>
                                <div className="col-md-4">
                                    <div className="card productGrid mt-5 p-3">
                                        <div className="prodImageBlock">
                                            <img src={key.image} alt="prod name" className="prodImage" />
                                        </div>
                                        <div className="prodContentBlock">
                                            <h1>{key.title}</h1>
                                            <p>{key.description}</p>
                                            <p>Product Price {key.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })}

                </div>
            </div>

        </Fragment>
    )
}

export default ProductsMap
