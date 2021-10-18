import '../styles/globals.css'
import 'antd/dist/antd.css'
import AppContextProvider from "../context/appContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
