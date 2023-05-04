import { useEffect, useRef } from "preact/hooks";

export default function Main() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      function loadImage() {
        const image = new Image();
        image.src = "/images/anna/base.jpg";
        image.onload = () => {
          imageRef.current = image;
          refresh();
        };
      }

      function refresh() {
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        const image = imageRef.current;
        if (image) {
          ctx?.drawImage(image, 0, 0, image.width * 0.1, image.height * 0.1);
        }
        window.requestAnimationFrame(refresh);
      }

      window.addEventListener("load", loadImage);

      return () => {
        window.removeEventListener("load", loadImage);
      };
    }
  }, []);

  return (
    <canvas ref={canvasRef} id="maincanvas" width="640" height="480"></canvas>
  );
}
