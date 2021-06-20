import {Fragment, useEffect, useState} from "react";
import Header from "../component/Header/Header";
import axios from "axios";

const LandingPage = () => {

    const [products, setProducts] = useState([])

    // going to load product list from api call

    const getProductList = () => {
        axios.get('https://60cf27294a030f0017f67585.mockapi.io/products')
            .then((res) => {
                setProducts(res.data)
            }).catch((err) => {
            console.log('error', err)
        })
    }

    useEffect(() => {
        getProductList()
    }, [])


    return (
        <Fragment>


            <div className="container">
                <div className="col-md-12">
                    <h1 className="text-center p-5">
                        Featured Products
                    </h1>


                    <div className="row">


                        {products.length > 0 && products.map((key, index) => {
                            return (
                                <Fragment>
                                    <div className="col-md-4">
                                        <a href={`/detail/${key.id}`}>
                                            <div className="productLayout border1">
                                                <div className="prodImageBlock">
                                                    <img src={key.avatar}
                                                         className="img img-responsive"
                                                         alt="prod name"/>
                                                </div>
                                                <div className="prodContentBlock">
                                                    <h1> {key.name}</h1>
                                                    <h6> Rs. {key.price}</h6>
                                                    <h5>
                                                        {key.description}
                                                    </h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Fragment>
                            )
                        })}


                    </div>


                </div>

            </div>


        </Fragment>
    )
}

export default LandingPage
