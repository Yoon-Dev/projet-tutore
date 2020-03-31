import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Tuto from './page/tuto/Tuto';
import Root from './page/root/Root';
import LastNews from './page/last-news/LastNews';
import SingleNew from './page/single-new/SingleNew';
import Header from './component/header/Header';
import { ArticleProvider } from './services/Article';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { marge } from './utils/styles';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <Route path="/:id">
                <ArticleProvider>
                  <SingleNew/>
                </ArticleProvider>
              </Route>
            </Switch>            
            )
          }}/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiCardContent: {
      // Name of the rule
      root: {
        // Some CSS
        padding: `${marge*4}px ${marge*4}px ${marge*2}px ${marge*4}px`,
      },
    },
  },
});

export default App;
