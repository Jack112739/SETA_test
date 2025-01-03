
import './Post.css'
import { useSelector } from 'react-redux';

function PostList() {

    const hook = useSelector((state) => state.json_server.get_hook);
    return (
        <div className={hook.data ? 'post-list': ''}>
            {   hook.pending ? 'Loading...' : 
                hook.error ? (<span style='text-color: red;'>ERROR: {hook.error}</span>):
                        hook.data.map(post => (
                            <div className="post" key={post.id}>
                                <h2 className='post-title'>{post.title}</h2>
                                <div className='author'>By: {"user#" + post.userId}</div>
                                <div className='content'> {post.body} </div>
                            </div>
                        ))
            }
        </div>
    )
}

export default PostList;