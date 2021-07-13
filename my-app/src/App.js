import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Progress percent={66} />
    </div>
  );
}

export default App;
