import React from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './relay/environment';

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
       query AppQuery {
        allTodos{
            id,
            content
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        console.log(props);


        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading</div>
        }
        const { allTodos } = props;
        console.log(allTodos);

        return allTodos.map(m => <div key={m.id}>Conteudo: {m.content}</div>)
      }} />
  );
}

export default App;
