import {
  component$,
  useStore,
  useSignal,
  noSerialize,
  useOnWindow,
  $,
} from "@builder.io/qwik";
import lottie from "lottie-web";
import { Options } from "./types";

export interface OptionsProps {
  options: Options;
}

export const QwikLottie = component$(({ options }: OptionsProps) => {
  const store = useStore({
    anim: noSerialize({}),
  });
  const canvas = useSignal<Element>();

  useOnWindow(
    "load",
    $(() => {
      store.anim = noSerialize(
        lottie.loadAnimation({
          container: options.container || canvas.value,
          renderer: options.renderer || "svg",
          loop: options.loop || true,
          autoplay: options.autoplay || true,
          animationData: options.animationData,
          path: options.path,
          rendererSettings: options.rendererSettings,
          name: options.name,
        })
      );
    })
  );

  return <div ref={canvas}></div>;
});
