import { Html } from "next/document";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>MyApp</title>
                <meta name="theme-color" content="#3c1742" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
