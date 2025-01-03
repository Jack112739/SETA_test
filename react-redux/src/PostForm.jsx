import { useState } from "react";

function PostForm() {
    const [visible, setVisibility] = useState(false);
    return (
        <div display={visible ? 'block': 'none'} className='background'>
            <form>
                <label>Post title: </label>
                <input type="text" required />
                <label>user id: </label>
                <input type="text" required />
                Content: <br/>
                <textarea></textarea>
                <button onClick={submit_post}>Submit</button>
            </form>
        </div>
    )
}

function submit_post(e) {

}

export default PostForm;