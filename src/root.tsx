import { QwikLottie } from "./lottie";
import { Options } from "./types";

import * as animationData from "../assets/cycleAnimation.json";

export default () => {
  const defaultOptions: Options = {
    animationData,
    // path: '../assets/cycleAnimation.json'
    // path: 'https://assets7.lottiefiles.com/packages/lf20_M6jA5UNDHa.json',
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <QwikLottie options={defaultOptions} />
      </body>
    </>
  );
};
