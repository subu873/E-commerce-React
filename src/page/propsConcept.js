import {Fragment} from "react";
import ProductLayout from "../component/ProductLayout";

const ProductListingParent = () => {
    return (
        <Fragment>
            <h1>Product listing website</h1>

            <div className="row">
                <div className="col-md-4">
                    <ProductLayout name="product 1" description="prod 1 description" price={25.00}/>
                </div>
                <div className="col-md-4">
                    <ProductLayout name="product 2" description="prod 2 description" price={2.00}/>
                </div>
                <div className="col-md-4">
                    <ProductLayout name="product 3" description="prod 3 description" price={223.00}/>
                </div>

            </div>

        </Fragment>
    )
}

export default ProductListingParent
