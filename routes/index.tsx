import {Head} from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import {useEffect} from "preact/hooks";
import {setServiceWorker} from "../utils/setServiceWorker.tsx";

export default function Home() {
  useEffect(() => {
    setServiceWorker();
  }, []);
  return (
    <>
      <Head>
        <title>Anna Adventure</title>
        <link crossorigin={"use-credential"} rel={"manifest"} href={"/manifest.json"} />
        <meta name="theme-color" content="#1a73e8" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.png"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
