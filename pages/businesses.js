import Head from 'next/head'
import Header from "../src/components/Header.js";

function Business() {
    return(
        <>
        <Head>
        <title>Businesses</title>
        <meta name="description" content="Generated by create next app" />
        </Head>
        <Header />
        <div className="w-full pt-4">
        <h1 className="text-4xl	text-center">Businesses</h1>
        </div>
      </>
    )
  }
  
  export default Business