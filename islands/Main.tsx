import { useEffect, useRef } from "preact/hooks";

export default function Main() {
  // canvas要素の取得
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // canvas要素がレンダリングされた後に実行される処理
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      // 画面を更新する関数を定義 (繰り返しここの処理が実行される)
      function update() {
        // 画面全体をクリア
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // 主人公の画像を表示
        const image = new Image();
        image.onload = () => {
          ctx?.drawImage(image, 0, 0);
          // 再描画
          window.requestAnimationFrame(update);
        };
        image.src = "/images/anna/base.jpg";
      }

      // ロード時に画面描画の処理が実行されるようにする
      window.addEventListener("load", update);

      // cleanup関数を返して、windowのloadイベントリスナーを削除する
      return () => {
        window.removeEventListener("load", update);
      };
    }
  }, []);

  return (
    <canvas ref={canvasRef} id="maincanvas" width="640" height="480"></canvas>
  );
}
