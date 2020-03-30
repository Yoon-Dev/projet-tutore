import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Tuto from './page/tuto/Tuto';
import Root from './page/root/Root';
import LastNews from './page/last-news/LastNews';
import Header from './component/header/Header';
import { ArticleProvider } from './services/Article';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Route render={(location) => {
          return (
          <Switch location={location.location}>
            <Route exact path="/" component={Root}/>
            <Route path="/tuto" component={Tuto} />
            <Route path="/last-news">
              <ArticleProvider>
                <LastNews/>
              </ArticleProvider>
            </Route>
          </Switch>            
          )
        }}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
