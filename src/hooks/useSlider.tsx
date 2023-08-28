import { useCallback, useEffect, useState } from "react";

interface SliderHookOptions {
  ref: React.RefObject<HTMLElement>;
  tabIndex: number;
}

const useSlider = ({ ref, tabIndex }: SliderHookOptions) => {
  const [sliderInfo, setSliderInfo] = useState<{ height: number; top: number }>(
    { height: 0, top: 0 }
  );

  const moveSlider = useCallback(() => {
    const refCur = ref.current;
    const container = refCur?.children;
    if (container) {
      console.log("Item:", container[tabIndex].getBoundingClientRect().top);
      setSliderInfo((prevState) => ({
        ...prevState,
        height: container[tabIndex].getBoundingClientRect().height,
        top:
          container[tabIndex].getBoundingClientRect().top -
          refCur.getBoundingClientRect().top,
      }));
    }
  }, [tabIndex, ref]);

  useEffect(() => {
    moveSlider();
    window.addEventListener("resize", moveSlider);
    return () => window.removeEventListener("resize", moveSlider);
  }, [moveSlider]);

  return sliderInfo;
};

export default useSlider;
