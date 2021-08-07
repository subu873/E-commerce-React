import './App.css';
import ProductDetail from "./page/detail";
import {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./page/Landing";
import Header from "./component/Header/Header";
import CustomForms from "./page/CustomForms";

function App() {
    return (
        <Fragment>
            <Router>
                {/*<Header/>*/}
                <Switch>
                    <Route path="/forms" component={CustomForms}/>
                    {/* <Route path="/detail/name" component={Dummy}/>*/}
                    <Route path="/detail/:productId/:productName/:productPrice/:productQuantity"
                           component={ProductDetail}/>
                    <Route path="/" component={LandingPage}/>
                </Switch>

                {/*<footer>*/}
                {/*    Footer start from here*/}
                {/*</footer>*/}

            </Router>
        </Fragment>

    );
}

export default App;
