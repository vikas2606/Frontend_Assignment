import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './components/config';
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import './App.css'
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from './components/Homepage';
import Success from './components/Success';


function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route exact path='/chatbot' element={<Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />} />
          <Route exact path='/success' Component={Success} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
