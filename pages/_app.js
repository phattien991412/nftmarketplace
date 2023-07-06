import SEO from "@/components/SEO";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <SEO />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
