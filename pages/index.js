
import Head from "next/head";
import Home from './main-page/Home'
import { Fragment } from "react";
import Hero from "./main-page/Hero";

function LandingPage() {
  return (
    <Fragment>
     <Head>
        <title>
            Hiltons Hotel
        </title>
        <meta name='description' content='Hilton Hotel' />
     </Head>

     <Hero />

     <Home />
    </Fragment>
  );
}

export default LandingPage;
