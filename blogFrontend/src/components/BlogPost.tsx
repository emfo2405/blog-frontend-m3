


type PostProps = {
    title: string;
    content: string;
    image: string;
    created: string;
};


function BlogPost({title, image, content, created}: PostProps) {


return (

        <div className='post'>
            <h2>{title}</h2>
            <img className='blogImg' src={image}></img>
            <p className='lineheight'>{content}</p>
            <p className='lineheight'>{new Date(created).toLocaleDateString("sv-SE")}</p>
            <button>Visa hela inlägget</button>
        </div>

);
}

export default BlogPost;