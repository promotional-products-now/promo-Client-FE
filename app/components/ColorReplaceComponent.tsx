import { Image as ImageComponent, ImageProps } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";

const ColorReplaceComponent = (props: ImageProps) => {
  const [colorReplacedImage, setColorReplacedImage] = useState<string>("");
  const cacheRef = useRef<Map<string, string>>(new Map());
  const [imageSrc] = useState(props.src || "");

  useEffect(() => {
    const replaceColorUsingCanvas = (
      src: string,
      targetColor: string,
      replacementColor: string,
    ) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Handle CORS
      img.src = src;

      img.onerror = (error) => {
        console.error("Image loading failed:", error);
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Convert targetColor to RGB
        const targetRGB = hexToRgb(targetColor);

        // Loop through each pixel and change the target color
        for (let i = 0; i < data.length; i += 4) {
          const red = data[i];
          const green = data[i + 1];
          const blue = data[i + 2];

          // Check if pixel color matches the target color (allowing some tolerance)
          if (isColorMatch(red, green, blue, targetRGB, 10)) {
            // 10 is the tolerance
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const base64Image = canvas.toDataURL("image/png");

        cacheRef.current.set(src, base64Image);
        setColorReplacedImage(base64Image);
      };
    };

    if (props.src) {
      if (cacheRef.current.has(props.src)) {
        setColorReplacedImage(cacheRef.current.get(props.src) as string);
        return;
      }

      replaceColorUsingCanvas(props.src, "#FFFFFF", "#00000000");
    }
  }, [props.src]);

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const isColorMatch = (
    r: number,
    g: number,
    b: number,
    targetRGB: { r: number; g: number; b: number },
    tolerance: number,
  ) => {
    return (
      Math.abs(r - targetRGB.r) <= tolerance &&
      Math.abs(g - targetRGB.g) <= tolerance &&
      Math.abs(b - targetRGB.b) <= tolerance
    );
  };

  return colorReplacedImage ? (
    <img src={colorReplacedImage} alt={props.alt} className={props.className} />
  ) : (
    <ImageComponent
      src={imageSrc}
      alt={props.alt}
      removeWrapper
      radius={props.radius}
      className={props.className}
      loading="lazy"
    />
  );
};

export default ColorReplaceComponent;
