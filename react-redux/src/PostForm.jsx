import { useDispatch} from "react-redux";
import { togle_visibility } from "./App";
import { post_data } from "./json_server";
import './form.css';

function PostForm() {
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault();
        dispatch(post_data({
            title: document.getElementById('title').value,
            userId: document.getElementById('userId').value,
            body: document.getElementById('post_body').value
        }));
        dispatch(togle_visibility());
    };
    const cancel = (e) =>{
        e.preventDefault();
        dispatch(togle_visibility());
    }
    return (
        <form className="submit-form" onSubmit={submit}>
            <div className="wrapper">
                <label>Post title: </label>
                <input type="text" id="title" />
            </div>
            <div className="wrapper">
                <label>user id: </label>
                <input type="text" id='userId'/>
            </div>
            <label>Content:</label>
            <textarea id='post_body'></textarea>
            <div className="wrapper">
                <button style={{backgroundColor: 'blue'}}>Submit</button>
                <button style={{backgroundColor: 'red'}} onClick={cancel}>Cancel</button>
            </div>
        </form>
    ) 
}


export default PostForm;