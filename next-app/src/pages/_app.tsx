import NavBar from "@/components/navBar/navBar";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { I18nextProvider } from "react-i18next";
import i18next from "@/Public/Locales/i18n";
import LanguageSwitcher from "@/components/switch/switch";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <MantineProvider>
          <NavBar />
          <LanguageSwitcher />
          <Component {...pageProps} />
        </MantineProvider>
      </I18nextProvider>
    </Provider>
  );
}
