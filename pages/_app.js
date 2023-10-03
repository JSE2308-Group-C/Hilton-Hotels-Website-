// import '../styles/globals.css'


import LandingPage from ".";
import MainNavigation from "../Components/Layout/MainNavigation";




// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
 export default function App(){
  return(
   <div>
    <MainNavigation />
   <LandingPage />
   </div>
  )
 }