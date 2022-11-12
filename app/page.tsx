import "server-only";
import { Suspense } from "react";
import { Home } from "@/components/pages/Home";
import { ReactServerComponent } from "@/components/RSC";

export default function HomePage() {
  return (
    <>
      <Home />
      <Suspense fallback={<div>loading...</div>}>
        <ReactServerComponent />
      </Suspense>
    </>
  );
}
