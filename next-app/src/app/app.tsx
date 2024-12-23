import NavBar from "@/components/navBar";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
export default function App() {
  return (
    <MantineProvider
    // theme={{ colorScheme: "light" }}
    // withGlobalStyles
    // withNormalizeCSS
    >
      <NavBar></NavBar>
    </MantineProvider>
  );
}
