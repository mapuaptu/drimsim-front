import React, { PureComponent } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Home from './pages/Home';
import User from './pages/User';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: #e5e5e5;
  }
`;

// TODO убрать перед деплоем порт
const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyles />
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user/:id" component={User} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
