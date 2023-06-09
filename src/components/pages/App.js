
import '../css/App.css';
import { Route,Routes } from 'react-router';
import NewsBody from './NewsBody';
import Notfound from './Notfound';
import TrendingNews from './Trendingnews';
import Newspage from './Newspage';
import Addnews from './Addnews';
function App() {
  return (
    <div className="App">
             

      
      <Routes>
        <Route path='/' element={<NewsBody/>} />
        <Route path='*' element={<Notfound/>}  />
        <Route path='/trending' element={<TrendingNews/>} />
        <Route path='/newspage' element={<Newspage/>} />
        <Route path='/add' element={<Addnews/>}/>
      </Routes>


    </div>
  );
}

export default App;
