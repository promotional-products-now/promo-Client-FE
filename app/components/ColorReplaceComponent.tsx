import { Image as ImageComponent, ImageProps } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import replaceColor from "replace-color";

const ColorReplaceComponent = (props: ImageProps) => {
  const [colorReplacedImage, setColorReplacedImage] = useState<string>("");
  const cacheRef = useRef<Map<string, string>>(new Map()); // Cache to store processed images

  useEffect(() => {
    if (props.src) {
      // Check if the image has already been processed and cached
      if (cacheRef.current.has(props.src)) {
        setColorReplacedImage(cacheRef.current.get(props.src) as string);
        return;
      }

      // Load and process the image
      replaceColor({
        image: props.src as string,
        colors: {
          type: "hex",
          targetColor: "#FFFFFF", // Color to replace
          replaceColor: "#00000000", // Transparent replacement
        },
      })
        .then((jimpObject: any) => {
          jimpObject.getBase64("image/png", (err: any, base64: string) => {
            if (err) {
              console.error("Color replacement failed:", err);
              return;
            }

            // Cache the processed image and update state
            cacheRef.current.set(props.src as string, base64);
            setColorReplacedImage(base64);
          });
        })
        .catch((err: any) => {
          console.error("Image processing error:", err);
        });
    }
  }, [props.src]);
  if (colorReplacedImage) {
    return <img src={colorReplacedImage} alt={props.alt} className={props.className} />;
  }

  return (
    <ImageComponent
      src={props.src}
      alt={props.alt}
      removeWrapper
      radius={props.radius}
      className={props.className}
      loading="lazy"
    />
  );
};

export default ColorReplaceComponent;
