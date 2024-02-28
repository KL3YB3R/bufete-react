import { useState } from "react";
import iconBlue from "./../assets/img/logo-blue.png";
import iconOrange from "./../assets/img/logo-orange.png";
import { D, W } from "./../utils/variables";

export const useHeaderOptions = () => {
  const [rotateButton, setRotateButton] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [subOption, setSubOption] = useState(false);
  const [showOrHide, setShowOrHideOption] = useState(false);

  const showHideMenu = () => {
    setRotateButton((rotateButton) => !rotateButton);
    setShowMobileMenu((showMobileMenu) => !showMobileMenu);
  };

  const showSubOption = (e) => {
    setSubOption(true);
  };

  const hideSubOption = () => {
    setSubOption(false);
  };

  const showOrHideOption = () => {
    setShowOrHideOption((showOrHide) => !showOrHide);
  };

  return [
    showHideMenu,
    showSubOption,
    hideSubOption,
    showMobileMenu,
    subOption,
    rotateButton,
    showOrHideOption,
    showOrHide,
  ];
};
