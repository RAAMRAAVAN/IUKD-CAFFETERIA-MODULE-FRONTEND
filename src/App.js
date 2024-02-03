import './App.css';
import {Provider} from "react-redux"
import store from './redux/store';
// import UserContainer from './components/UserContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Login } from './components/login/Login';
// import { Signup } from './components/Signup/Signup';
// import Header from './components/Header';
import CaffeteriaHome from './components/CaffeteriaHome';
// import { Sms } from './components/Sms';
function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Signup/>}/> */}
            {/* <Route path="/" element={<Login/>}/> */}
            <Route path="/" element={<CaffeteriaHome/>}/>
            {/* <Route path="/sms" element={<Sms/>}/> */}
          </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
