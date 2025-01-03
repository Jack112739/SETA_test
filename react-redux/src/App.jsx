import { useDispatch } from 'react-redux';
import './App.css'
import PostForm from './PostForm.jsx';
import PostList from './PostList.jsx';
import { init } from './json_server.jsx';

function App() {

  const dispatch = useDispatch();
  dispatch(init('https://jsonplaceholder.typicode.com/posts'));
  return (
    <>
      <h1>React Redux application</h1>
      <PostForm/>
      <PostList link='https://jsonplaceholder.typicode.com/posts'/>
    </>
  )
}

export default App
