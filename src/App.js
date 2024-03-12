import './App.css';
import CharacterList from './pages/CharecterList';
import CharacterDetail from './pages/CharacterDetail';
import { Route, Routes} from "react-router";
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' Component={CharacterList} />
          <Route exact path='/search' Component={Search} />
          <Route exact path='/:id' Component={CharacterDetail} />
        </Routes>
    </div>
  );
}

export default App;
