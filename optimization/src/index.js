import ReactDOM from 'react-dom';
import App from './App';

//render(<App/>, document.getElementById('root'));
const root=ReactDOM.createRoot(document.getElementById('root'));//this syntax is for react 18

root.render(<App/>);