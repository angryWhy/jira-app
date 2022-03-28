import { Button } from 'antd';
import './App.css';
import UnauthApp from "./components/unauthicatedapp";
function App() {
  return (
    <div className="App">
      <UnauthApp/>
    <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
