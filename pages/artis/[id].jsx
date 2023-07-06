import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const ProfilePage = dynamic(() => import("@/components/ProfilePage"));

export default function Profile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
