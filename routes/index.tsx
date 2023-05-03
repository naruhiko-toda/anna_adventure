import {Head} from "$fresh/runtime.ts";
import Main from "../islands/Main.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Adventure</title>
        <link crossorigin={"use-credentials"} rel={"manifest"} href={"/manifest.json"} />
        <meta name="theme-color" content="#1a73e8" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="text/javascript" src="/serviceWorker.js"></script>
      </Head>
      <Main/>
    </>
  );
}
