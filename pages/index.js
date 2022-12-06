import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Next crash course</title>
        <meta name="description" content="this is an next crash course" />
      </Head>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    }, // will be passed to the page component as props
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     }, // will be passed to the page component as props
//   };
// };
