import NavBar from "@/components/navBar/navBar";
import {MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";

import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return (
    <MantineProvider>
      <NavBar />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
