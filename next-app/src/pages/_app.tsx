import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import NavBar from "@/components/navBar";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <NavBar />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
