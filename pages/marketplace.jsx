import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const MarketplacePage = dynamic(() => import("@/components/MarketplacePage"));

export default function Marketplace() {
  return (
    <>
      <MarketplacePage />
    </>
  );
}

Marketplace.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
