import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products, categories }) {
  return (
    <div className="h-full bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header categories={categories} />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.log("Error while fetching products\n", err));
  const categories = await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .catch((err) => console.log("Error while fetching products\n", err));
  return {
    props: {
      products,
      categories,
    },
  };
}
