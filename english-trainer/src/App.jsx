// import {Fragment} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Header from './components/Layout/Header';
import Dictionary from './pages/Dictionary';
import Train from './pages/Train';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/dictionary' element={<Dictionary />} exact='true' />
        <Route path='/train' element={<Train />} />
        <Route path='*' element={<Navigate to='/dictionary' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
