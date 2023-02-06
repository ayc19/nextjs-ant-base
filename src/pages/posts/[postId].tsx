import axios from 'axios';

export default function Post({ post }: any) {
    return (
        <>
            <h1>{post.id} {post.title}</h1>
        </>
    )
}

// When fallback is true, it will call getStaticProps
// In the router object router.fallback is true
export async function getStaticProps(context: any) {
    const { params } = context;
    const { postId } = params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return {
        props: {
            post: response.data
        }
    }
}

export async function getStaticPaths(context: any) {
    // const { params } = context;
    // const { postId } = params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const arrOfPosts = response.data
    const paths = arrOfPosts.map((post: any) => {
        return {
            params: { postId: `${post.id}` }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }

}