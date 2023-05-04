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
        };
      }
      let x = 0;

      function refresh() {
        console.log("refresh")
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        x = x + 1;

        const image = imageRef.current;
        if (image) {
          ctx?.drawImage(image, x, 0, image.width * 0.1, image.height * 0.1);
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
