import Head from "next/head";
import tw, { css } from "twin.macro";
import { TicketIcon, UsersIcon } from "@heroicons/react/outline";
import { LCDClient, WasmAPI } from "@terra-money/terra.js";
import { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";

import { useTerra } from "../hooks/useTerra";
import Layout from "../components/Layout";


export default function Home() {

  const terra = new LCDClient({
    URL: "https://lcd.terra.dev/",
    chainID: "columbus-4",
  });

  const fetchContractQuery = useCallback(async () => {
    /** 
    const api = new WasmAPI(terra.apiRequester);
    try {
      const contractConfigInfo = await api.contractQuery(
        process.env.NEXT_PUBLIC_CW721_ADDRESS,
        {
          config: {},
        }
      );
    } catch (e) {
      console.log(e);
    }
    */
  }, []);

  useEffect(() => {
    fetchContractQuery();
  }, [fetchContractQuery]);

  return (
    <>
      <Head>
        <title>Dynamint</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main tw="relative mt-16 lg:mt-24 pb-4">
          ...
        </main>
      </Layout>
    </>
  );
}
