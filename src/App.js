import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { options } from './config/options';
import './App.css';
import Test from './components/test';
// import Artists from './components/artists';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: options[1]
    }
  }

  changeLang = (lang) => {
    const { i18n } = this.props;
    const { value } = lang;
    this.setState({ lang });
    i18n.changeLanguage(value);
  }


  render() {
    const Artists = lazy(() => import('./components/artists'));
    function myComponent() {
      return (
        <div>
          <Suspense fallback={<div>...loading</div>}>
            <Artists />
          </Suspense>
        </div>
      )
    }
    const { t } = this.props;
    return (
      <div className="App-Root">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/test" render={
              props => <Test {...props} lang={this.state.lang} change={this.changeLang}></Test>
            } ></Route>
            <Suspense fallback={<h1>Still loading</h1>}>
              <Route exact={true} path="/artists" render={props => <Artists {...props} lang={this.state.lang} change={this.changeLang}></Artists>}>
              </Route>
            </Suspense>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withTranslation('translations')(App);
