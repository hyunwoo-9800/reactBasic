import logo from './logo.svg';
import './App.css';
import BasicJSX from './jsx_examples/BasicJSX';
import JSXSyntaxRules from './jsx_examples/JSXSyntaxRules';
import JSXExpressions from './jsx_examples/JSXExpressions';

function App() {
  return (
    <div className="App">
      <BasicJSX></BasicJSX>
      <JSXSyntaxRules></JSXSyntaxRules>
      <JSXExpressions></JSXExpressions>
    </div>
  );
}

export default App;
