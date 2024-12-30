import NavBar from "@/components/navBar/navBar";
import {MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";

import {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../store/store";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider>
        <NavBar />
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}
