import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import NewPost from './components/NewPost';
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/posts" element={<Posts/>} />
       <Route exact path='posts/:id' element={<Post/>} />
       <Route exact path="/posts/new" element={<NewPost/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;


