import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
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
          <Route render={({location}) => {
            return (
            <TransitionGroup>
              <CSSTransition
              key={location.key}
              timeout={350}
              classNames="fade"
              >
                <Switch location={location}>
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
              </CSSTransition>      
            </TransitionGroup>           
            )
          }}/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}
const defaultTheme = createMuiTheme();
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
    MuiCardMedia: {
      img: {

        [defaultTheme.breakpoints.up('sm')]: {
          maxHeight: "400px"
        },
        [defaultTheme.breakpoints.up('lg')]: {
          maxHeight: "450px"
        },
      },
    },
  },
});

export default App;
