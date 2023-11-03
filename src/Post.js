
function Post(props){
    return (
        <div id={props.index}>
        <p>UserID: {props.userId}</p>
        <p>ID: {props.id}</p>
        <p>Title: {props.title}</p>
        <p>Body: {props.body}</p>
        </div>
    );
}

export default Post