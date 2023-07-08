import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import store from "../public/src/app/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
    </ThemeProvider>
  );
}

export default App;