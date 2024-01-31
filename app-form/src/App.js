// import Header from './component/Header.js'
import './App.css';
// import Templet from './component/Template.js';
// import MainBody from './component/MainBody.js';
// import FormHeader from './component/FormHeader.js'
// import Tablet from './component/Tablet.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main.js';
import Form from './components/Form.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Form/:id" element={<Form />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
