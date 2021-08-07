import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const ProductDetail = () => {


    const history = useHistory()

    const params = useParams()

    const [count, setCount] = useState(0)
    const [data, setData] = useState({})

    const getProductInfo = () => {
        // url parameter accessing by window object
        //const prodId = window.location.pathname.replace("/detail/","")

        const prodId = params.productId

        const apiUrl = "https://60cf27294a030f0017f67585.mockapi.io/products/" + prodId
        axios.get(apiUrl)
            .then((res) => {
                console.log('product info res', res.data)
                setData(res.data)
            }).catch((err) => {
            console.log('error', err)
        })
    }

    const handleGoToAnyPage = (anyPage) => {
        history.push(anyPage)
    }

    const increment = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('count increment value change', count)
        if (count === 5) {
            getProductInfo()
        }
    }, [count])

    // useCallBack
    // useReducer
    // useMemo



    return (
        <Fragment>


            <div className="container">
                <div className="col-md-12">
                    <h1 className="product text-center p-5">
                        Product Detail page
                    </h1>

                    <h5>Proudct Count {count}</h5>

                    <div className="row">
                        <div className="col-md-3">
                            <img src={data.avatar} alt="prod name"/>
                        </div>

                        <div className="col-md-9">
                            <h1>{data.name}</h1>
                            <h5>
                                Rs. {data.price}
                            </h5>
                            <p>
                                {data.description}
                            </p>

                            <h5>
                                Available Quantity : {data.quantity} Pieces
                            </h5>

                            <button className="btn btn-primary mt-4 btn-lg" onClick={increment}>
                                Increase Product Qunatity
                            </button>

                            <button className="btn btn-primary mt-4 btn-lg" onClick={() => history.goBack()}>
                                Go Back
                            </button>
                        </div>
                    </div>

                </div>


            </div>

        </Fragment>
    )
}
export default ProductDetail
