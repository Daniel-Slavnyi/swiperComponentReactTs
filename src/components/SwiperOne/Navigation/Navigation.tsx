import { CommonClassProps } from "../types";

import cn from "classnames";
import css from "./Navigation.module.scss";

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disabledNext,
  onPrevClick,
  onNextClick,
  className,
}) => {
  return (
    <div className={cn(className, css.navigation)}>
      <button
        className={cn(css.navBtn, css.navBtnPrev)}
        disabled={disabledPrev}
        onClick={onPrevClick}
      >
        prevPhoto
      </button>
      <button
        className={cn(css.navBtn, css.navBtnNext)}
        disabled={disabledNext}
        onClick={onNextClick}
      >
        nextPhoto
      </button>
    </div>
  );
};
