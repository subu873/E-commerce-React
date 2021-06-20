import './App.css';
import ProductDetail from "./page/detail";
import {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./page/Landing";
import Header from "./component/Header/Header";

function App() {
    return (
        <Fragment>
            <Router>
                <Header/>
                <Switch>
                    {/* <Route path="/detail/name" component={Dummy}/>*/}
                    <Route path="/detail/:productId" component={ProductDetail}/>
                    <Route path="/" component={LandingPage}/>
                </Switch>

                <footer>
                    Footer start from here
                </footer>

            </Router>
        </Fragment>

    );
}

export default App;
