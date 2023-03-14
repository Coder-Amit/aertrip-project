import './App.css';
import Header from './components/Global/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Routing for the pages */}
        <Route path='/' element={<Home w={100} />} />
        <Route path='/result' element={<SearchResult />} />
      </Routes>


    </div>
  );
}

export default App;
