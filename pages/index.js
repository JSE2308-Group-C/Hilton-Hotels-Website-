
import Head from "next/head";
import Home from './main-page/Home'
import { Fragment } from "react";


function LandingPage() {
  return (
    <Fragment>
     <Head>
        <title>
            Hiltons Hotel
        </title>
        <meta name='description' content='Hilton Hotel' />
     </Head>


     <Home />
    </Fragment>
  );
}

export default LandingPage;
