import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import PostForm from './PostForm.jsx';
import PostList from './PostList.jsx';
import { init, get_data } from './json_server.jsx';
import { createSlice } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();
  dispatch(init('https://jsonplaceholder.typicode.com/posts'));
  dispatch(get_data());
  const visible = useSelector((state) => state.visibility.visible);

  return (
    <>
    <button onClick={() => dispatch(togle_visibility())}>Add new post</button>
      <div className='overlay' style={{display: visible ? 'block': 'none'}}>
        <PostForm/>
      </div>
      <h1>React Redux application</h1>
      <PostList link='https://jsonplaceholder.typicode.com/posts'/>
    </>
  )
}

const visibility_slice = createSlice({
  name: 'visibility',
  initialState: {
    visible: false
  },
  reducers: {
    togle_visibility: (state) => {
      state.visible = !state.visible;
    }
  }
});

export const {togle_visibility} = visibility_slice.actions;
export const visibility = visibility_slice.reducer;
export default App
