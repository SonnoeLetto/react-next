import {useState, useEffect} from "react";

import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function Posts({posts}) {
    // const [posts, setPosts] = useState([])
    //
    // useEffect(()=> {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts');
    //         const json = await response.json();
    //         setPosts(json)
    //
    //     }
    //     load()
    //
    // })
    return (
        <MainLayout>
            <h1>Posts</h1>
            <p>
                {
                    posts.map(element =>
                        (
                            <li key={element.id}>
                                <Link href={`/post/${element.id}`}>
                                    <p>{element.title}</p>
                                </Link>
                            </li>
                        )
                    )
                }
            </p>
        </MainLayout>
    )

}
Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();
    return {
        posts
    }
}