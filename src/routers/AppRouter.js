import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Portifolio from '../components/Portifolio'
import ThingsIveDone from '../components/ThingsIveDone'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                 <Route path="/" component={Home} exact={true} />
                 <Route path="/portifolio" component={Portifolio}  />
                 <Route path="/contact" component={Contact}  />
                 <Route path="/thingsIveDone/:id" component={ThingsIveDone}  />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;