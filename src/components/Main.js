import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Home from './Home';
/* import Product from './Product';
import Supplier from './Supplier';
import Contact from './Contact';
import ProductCatalogue from './ProductCatalogue';
 */
class Main extends Component {
    render(){
        return(
            <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              {/* <Route path='/product' component={Product}/>
              <Route path='/supplier' component={Supplier}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/productCatalogue' component={ProductCatalogue}/> */}
            </Switch>
          </div>
        );
    }
}

export default Main;
