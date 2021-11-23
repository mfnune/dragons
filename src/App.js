import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import List from './components/List';
import AddDragon from './components/AddDragon';
import EditDragon from './components/EditDragon';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/addDragon" element={<AddDragon />}/>
          <Route path="/detail" element={<Detail />}/>
          <Route path="/editdragon/:id" element={<EditDragon />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;