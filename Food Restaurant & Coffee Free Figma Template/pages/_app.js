import '../App/globals.css';
import Head from 'next/head'; // Import the Head component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Add Font Awesome stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

