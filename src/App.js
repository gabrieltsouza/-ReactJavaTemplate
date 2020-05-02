import React, { Component, lazy } from 'react';
import './App.css';

/*
import MenuApp from './component/menuapp/MenuAppSwipable';
*/
import MenuApp from './component/menuapp/MenuApp';

import { Switch, Route } from 'react-router-dom'

/* Loading components begining*/
import menuItems from './component/menuapp/menuAppSource.json'
import About from './component/about/About';
import notFound404 from './component/notfound404/notFound404';
/* Loading components finished*/

/*
to check in the future about dinamic imports (quem sabe né)
var x = "xAbout";
var y = "./About";
const w = "/about";
const menu1 = lazy(() => import(y));
const menu1 = lazy(() => import("./About"));
*/

class App extends Component {
  render() {
    return (
      <div>
        <div id="root_header" class="flex-container-header">
          <div id="root_header_1" id="MenuApp">
            <MenuApp />
          </div>
          <div id="root_header_2">
          </div>
          <div id="root_header_3">
          </div>
          <div id="root_header_4">
          </div>
        </div>

        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={About} />
            <Route path="/about" component={About} />
            <Route path='*' component={notFound404} />

            { menuItems.data.map( ( menuOption ) => {
              return '<! --' + menuOption.name + '--> ' 
            } ) }

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
