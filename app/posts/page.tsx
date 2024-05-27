import Link from "next/link";
import styles from "./postsPage.module.css";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";
const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Idata {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Posts = async () => {
  const response = await fetch(base_url);
  const data: Idata[] = await response.json();
  return (
    <div>
      <h1 className={styles.bgBlue}>{new Date ().toLocaleTimeString()}</h1>

      <h2 className="bg-red-500">Halo</h2>
      <Link href="/">Home</Link>
      <Link href="/product">Product</Link>
      <div>
        {data.map((post) => {
          return (
            <CardList key={post.id}>
              <h1>{post.id}</h1>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <ViewUserButton userId={post.userId}/>
            </CardList>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
