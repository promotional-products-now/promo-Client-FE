// src/colorthief.d.ts
declare module "colorthief" {
  export default class ColorThief {
    getColor(img: HTMLImageElement, quality?: number): [number, number, number];
    getPalette(
      img: HTMLImageElement,
      colorCount?: number,
      quality?: number,
    ): [number, number, number][];
  }
}

declare module "replace-color" {
  type ColorOptions = {
    type: "hex" | "rgb"; // Color format (e.g., hex or rgb)
    targetColor: string; // The color to replace (e.g., '#FFFFFF')
    replaceColor: string; // The new color to apply (e.g., 'transparent' or '#000000')
  };

  interface ReplaceColorOptions {
    image: string; // The image source (can be a file path or data URL)
    colors: ColorOptions; // Object containing target and replacement colors
    formula?: "E76" | "E94" | "E00"; // Delta-E formula to use for color difference calculation
    deltaE?: number; // Tolerance for the color difference (0 - 100)
  }

  interface JimpObject {
    getBase64(mime: string, callback: (err: Error | null, base64: string) => void): void;
    write(path: string, callback?: (err: Error | null) => void): void;
    scan(
      x: number,
      y: number,
      width: number,
      height: number,
      callback: (x: number, y: number, idx: number) => void,
    ): void;
    bitmap: {
      width: number;
      height: number;
      data: Buffer; // Image data in a buffer
    };
  }

  function replaceColor(
    options: ReplaceColorOptions,
    callback?: (err: Error | null, jimpObject: JimpObject) => void,
  ): Promise<JimpObject>;

  export = replaceColor;
}
