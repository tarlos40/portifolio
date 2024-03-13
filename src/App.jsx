import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './views/public/home';

import './css/styles.css';
import './css/fonts.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
