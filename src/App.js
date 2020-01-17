import React from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, QueryRender } from 'react-relay';
import environment from './relay/environment';

function App() {
  return (
    <QueryRender
      environment={environment}
      query={graphql`
        query {
          allTodos{
            id,
            content,
            isCompleted
            tags {
              name
            }
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading</div>
        }
        return <div>Conteudo: {props.allTodos.content}</div>
      }} />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
