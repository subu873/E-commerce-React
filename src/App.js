import './App.css';
import ProductDetail from "./page/detail";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./page/Landing";
import CustomForms from "./page/CustomForms";
import ProductsMap from "./page/arrayMap";
import ArrayFilter from "./page/arrayFilter";
import ProductListingParent from "./page/propsConcept";
import LearnUseStateHook from "./page/LearnUseState";
import LearnUseEffect from './page/LearnUseEffect';
import TestPage from './page/Dummy';
import FormValidation from './page/FormValidation';

function App() {

    console.log("project env", process.env)

    return (
        <Fragment>
            <Router>
                {/*<Header/>*/}
                <Switch>
                    <Route path="/formik" component={FormValidation} />
                    <Route path="/test-js" component={TestPage} />
                    <Route path="/learn-useEffect" component={LearnUseEffect} />
                    <Route path="/learn-useState" component={LearnUseStateHook} />
                    <Route path="/props-concept" component={ProductListingParent} />
                    <Route path="/array-filter" component={ArrayFilter} />
                    <Route path="/productsListing" component={ProductsMap} />
                    <Route path="/forms" component={CustomForms} />
                    {/* <Route path="/detail/name" component={Dummy}/>*/}
                    <Route path="/detail/:productIdNumber/:productName/"
                        component={ProductDetail} />
                    <Route path="/" component={LandingPage} />
                </Switch>

                {/*<footer>*/}
                {/*    Footer start from here*/}
                {/*</footer>*/}

            </Router>
        </Fragment>

    );
}

export default App;
