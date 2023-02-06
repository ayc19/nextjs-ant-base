import axios from 'axios';
import Link from 'next/link';

export default function PostsList({ posts }: any) {
    // console.log('posts are ', posts)
    return (
        <>
            <h1>Posts</h1>
            {
                posts.map((post: any) => {
                    return (
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`} passHref={true}> 
                                <h2>{post.id} {post.title}</h2>
                                <hr/>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    return {
        props: {
            posts,
        }
    }
}