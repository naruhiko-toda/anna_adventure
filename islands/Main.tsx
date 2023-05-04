import { useEffect, useRef } from "preact/hooks";

export default function Main() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  let input_key_buffer = {};

  useEffect(() => {
    // キーボードの入力イベントをトリガーに配列のフラグ値を更新させる
    window.addEventListener("keydown", handleKeydown);
    function handleKeydown(e) {
      console.log("key down : " + e.keyCode);
      input_key_buffer[e.keyCode] = true;
    }

    window.addEventListener("keyup", handleKeyup);
    function handleKeyup(e) {
      console.log("key up : " + e.keyCode);
      input_key_buffer[e.keyCode] = false;
    }

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      function loadImage() {
        const image = new Image();
        image.src = "/images/anna/base.jpg";
        image.onload = () => {
          imageRef.current = image;
        };
      }
      let x = 0;
      let y = 0;

      function refresh() {
        console.log("refresh")
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        if (input_key_buffer[37]) {
          // 左が押されていればx座標を1減らす
          x--;
        }
        if (input_key_buffer[38]) {
          // 上が押されていればy座標を1減らす
          y--;
        }
        if (input_key_buffer[39]) {
          // 右が押されていればx座標を1増やす
          x++;
        }
        if (input_key_buffer[40]) {
          // 下が押されていればy座標を1増やす
          y++;
        }

        const image = imageRef.current;
        console.log("x=", x)
        console.log("y=", y)
        if (image) {
          ctx?.drawImage(image, x, y, image.width * 0.1, image.height * 0.1);
        }
        window.requestAnimationFrame(refresh);
      }

      loadImage();
      window.requestAnimationFrame(refresh);
    }
  }, []);

  return (
    <canvas ref={canvasRef} id="maincanvas" width="2000" height="1000"/>
  );
}
