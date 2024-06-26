import { Layout } from "../components/layout.tsx";
import type { Post } from "../http.tsx";

export const Page = (props: { post: Post }) => {
    return (
        <Layout title={props.post.title}>
            <main>
                <h2>{props.post.title}</h2>
                <p>{props.post.body}</p>
            </main>
        </Layout>
    );
};
