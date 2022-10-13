import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
