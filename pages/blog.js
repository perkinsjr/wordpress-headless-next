import fetcher from "../lib/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import Link from "next/link";
const blog = ({ allPosts }) => {
  const posts = allPosts;
  return (
    <div className="container">
      <main className="main">
        <div className="grid">
          {posts.map((post) => {
            return (
              <div className="card" key={post.slug}>
                <h3>{post.title}</h3>
                <p>{post.excerpt.replace(/(<([^>]+)>)/gi, "")}</p>
                <p>{post.date}</p>
                <Link href={`/post/${post.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default blog;

export async function getStaticProps() {
  const response = await fetcher(ALL_POSTS);
  const allPosts = response.data.posts.nodes;
  return {
    props: { allPosts },
    revalidate: 1,
  };
}
