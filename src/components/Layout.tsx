import tw from "twin.macro";

import Header from "./Header/Header";
import AppProviders from "./AppProviders";
import Terra from "../assets/terra.svg";

export default function Layout({ children }) {
  return (
    <AppProviders>
      <Header />
      {children}
      <footer tw="mt-4">
        <div tw="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8"><div tw="md:flex p-4 rounded-xl font-bold">Built on <Terra width={24} height={24} tw="mx-2" /> Terra</div></div>
      </footer>
    </AppProviders>
  );
}
