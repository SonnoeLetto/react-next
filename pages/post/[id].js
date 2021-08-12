import {useRouter} from "next/router";
import Link from "next/link";
export default function Post({post})   {
    const router = useRouter()

    return (
        <div>
            <h1>post {router.query.id}</h1>
            <p>{post.title}</p>
            <Link href={'/posts'}><button>Back</button></Link>
        </div>

    )
}

Post.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post = await response.json();

    return {
        post
    }
}