// app/nprogress.js
import NProgress from "nprogress";
import { useEffect } from "react";
import { useNavigation } from "@remix-run/react";

NProgress.configure({
  showSpinner: false,
  speed: 500,
  minimum: 0.2,
  //   trickleRate: 0.02,
  trickleSpeed: 800,
});

export function ProgressBar() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      NProgress.done();
    } else {
      NProgress.start();
    }
  }, [navigation.state]);

  return null;
}
