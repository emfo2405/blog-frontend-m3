import UpdatePost from "./UpdatePost";



type PostProps = {
    id: number,
    title: string;
    content: string;
    image: string;
    created: string;
    getPosts: () => Promise<void>;
};


function BlogPost({id, title, image, content, created, getPosts}: PostProps) {


return (

        <div className='post' key={id}>
            <h2>{title}</h2>
            <img className='blogImg' src={image}></img>
            <p className='lineheight'>{content}</p>
            <p className='lineheight'>{new Date(created).toLocaleDateString("sv-SE")}</p>
            <button>Visa hela inlägget</button>

            <UpdatePost id={id} title={title} content={content} image={image} getPosts={getPosts}/>
        </div>

);
}

export default BlogPost;