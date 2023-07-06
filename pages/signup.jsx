import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const SignupPage = dynamic(() => import("@/components/SignupPage"));

export default function Signup() {
  return (
    <>
      <SignupPage />
    </>
  );
}

Signup.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
