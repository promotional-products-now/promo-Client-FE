// app/nprogress.js
import NProgress from "nprogress";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@remix-run/react";

NProgress.configure({
  showSpinner: false,
  speed: 500,
  minimum: 0.2,
  //   trickleRate: 0.02,
  trickleSpeed: 800,
});

// Define the debounce function with TypeScript types
function debounce<F extends (...args: any[]) => void>(
  func: F,
  wait: number,
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function ProgressBar() {
  const navigation = useNavigation();
  const [isProgressActive, setIsProgressActive] = useState<boolean>(false);

  // Single debounced function to handle progress
  const debouncedHandleProgress = useRef(
    debounce((active: boolean) => {
      if (active) {
        NProgress.start();
      } else {
        NProgress.done();
      }
    }, 100),
  );

  useEffect(() => {
    setIsProgressActive(navigation.state === "loading");
    debouncedHandleProgress.current(navigation.state === "loading");

    // Cleanup to ensure progress bar is completed if the component is unmounted
    return () => {
      NProgress.done();
    };
  }, [navigation.state]);

  return null;
}
