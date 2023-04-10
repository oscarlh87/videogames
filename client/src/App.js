import './App.css';
import Landing from './Views/Landing';
import Home from './Views/Home';
import Detail from './Views/Detail';
import Form from './Views/Form';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
     <Route path='/' element={<Landing/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/Game/:id' element={<Detail/>}/>
     <Route path='/Create' element={<Form/>}/>
    </Routes>
  );
}

export default App;
