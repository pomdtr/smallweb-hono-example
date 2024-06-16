import { Layout } from "../components/layout.tsx";
import type { Post } from "../http.tsx";

const List = (props: { post: Post }) => (
    <li>
        <a href={`/post/${props.post.id}`}>{props.post.title}</a>
    </li>
);

export const Top = (props: { posts: Post[] }) => {
    return (
        <Layout title={"Top"}>
            <main>
                <h2>Posts</h2>
                <ul>
                    {props.posts.map((post) => <List post={post} />)}
                </ul>
            </main>
        </Layout>
    );
};
