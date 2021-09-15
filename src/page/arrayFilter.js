import {Fragment, useEffect, useState} from "react"

const ArrayFilter = () => {

    const arr = [1, 2, 3, 4, 5]
    const filteredValue = arr.filter((key) => {
        return key != "3"
    })
    console.log("without filter array", arr) // [1,2,3,4,5]
    console.log("Array filtered", filteredValue)  // [1,2,4,5]


    const [data, setData] = useState([
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": "259"
            }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        }
    ])

    const [filteredArr, setFilteredArr] = useState([])


    useEffect(() => {
        setFilteredArr(data)
    }, [])

    const handlePriceChangeGreatorThan100 = () => {
        const priceGreatorThan100FilteredData = data.filter((key) => {
            return key.price > 100
        })

        console.log({priceGreatorThan100FilteredData})
        setFilteredArr(priceGreatorThan100FilteredData)
    }

    const handlePriceLessThan100 = () => {
        const priceLessThan100FilterdData = data.filter((key) => {
            return key.price < 100
        })

        console.log({priceLessThan100FilterdData})
        setFilteredArr(priceLessThan100FilterdData)
    }

    return (
        <Fragment>

            <h1 className="text-center">
                Array Filter
            </h1>

            <button className="btn btn-primary pr-5" onClick={handlePriceChangeGreatorThan100}>
                Price greator than 100
            </button>

            <button className="btn btn-primary pl-5" onClick={handlePriceLessThan100}>
                Price less than 100
            </button>

            <div className="row">
                {filteredArr.length > 0 && filteredArr.map((key, index) => {

                    return (
                        <Fragment>
                            <div className="col-md-4">
                                <div className="card productGrid mt-5 p-3">
                                    <div className="prodImageBlock">
                                        <img src={key.image} alt="prod name" className="prodImage"/>
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


        </Fragment>
    )
}

export default ArrayFilter
