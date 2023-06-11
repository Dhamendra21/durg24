
import '../css/App.css';
import { Route,Routes } from 'react-router';
import NewsBody from './NewsBody';
import Notfound from './Notfound';
import TrendingNews from './Trendingnews';
import Newspage from './Newspage';
import Addnews from './Addnews';
import Sportsnews from './Sportsnews';
function App() {
  return (
    <div className="App">
             

      
      <Routes>
        <Route path='/' element={<NewsBody/>} />
        <Route path='*' element={<Notfound/>}  />
        <Route path='/trending' element={<TrendingNews/>} />
        <Route path='/sports' element={<Sportsnews/>}/>
        <Route path='/newspage' element={<Newspage/>} />
        <Route path='/add' element={<Addnews/>}/>
      </Routes>


    </div>
  );
}

export default App;
