import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const NFTPage = dynamic(() => import("@/components/NFTPage"));

export default function NFT() {
  return (
    <>
      <NFTPage />
    </>
  );
}

NFT.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
