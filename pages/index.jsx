import Loader from "@/components/Loader";
import ArtistInfo from "@/sections/ArtistInfo";
import CollectionInfo from "@/sections/CollectionInfo";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Sponsors from "@/sections/Sponsors";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader />;

  return (
    <>
      <Head>
        <title>NFT Collection Landing</title>
        <meta name="description" content="XXXX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Sponsors />
      <CollectionInfo />
      <ArtistInfo />
      <CTA />
      <Footer />
    </>
  );
}
