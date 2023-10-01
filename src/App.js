import './App.css';
import { AccordionApp } from './components/AccordionApp/AccordionApp'; //подключение компонента
import { AccordionData } from './components/AccordionApp/accordion.const';
function App() {
  return (
    <div className="App">
        <AccordionApp data = {AccordionData}/>
    </div>
  );
}

export default App;
