// import ThreeApp from "../threejs/ThreeApp";
// import { useLayoutEffect } from "react";
// import { useThree } from "../hooks/useThree";
import ThreeCanvas from "../components/ThreeCanvas";

export default function Home() {
  //The argument for useThree is your threejs main class
  // const canvas = useThree(ThreeApp);

  return (
    <>
      <h1>hello</h1>
      <ThreeCanvas />
      {/* <div ref={canvas} style={{ height: "100vh" }} /> */}
    </>
  );
}
