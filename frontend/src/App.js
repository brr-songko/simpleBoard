import { Route, Routes } from 'react-router-dom';
import BoardList from './routes/BoardList'; 
import Home from "./routes/Home";
import React from "react";
import BoardText from './routes/BoardText';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from './routes/BoardUpdate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path="/board/:boardId" element={<BoardText/>}/>
      <Route path="/write" element={<BoardWrite />} />
      <Route path="/update/:boardId" element={<BoardUpdate />} />
    </Routes>
  );
}

export default App;
