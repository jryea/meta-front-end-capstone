import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BookTablePage from './Components/BookTablePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='book' element={<BookTablePage />} />
      </Routes>
    </>
  );
}

export default App;
