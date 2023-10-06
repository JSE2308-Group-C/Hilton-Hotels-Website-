// import '../styles/globals.css'

import MainLayout from "../Components/Layout/MainLayout"

// import MainNavigation from "../Components/Layout/MainNavigation";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
        <Component {...pageProps} />
    </MainLayout>
  )
}
export default MyApp
// // export default MyApp
//  export default function App(){
//   return <MainNavigation />
//  }