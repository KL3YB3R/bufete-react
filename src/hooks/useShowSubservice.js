import React from "react";
import { constitucionEmpresas } from "../helpers/subservicesObjects";

export const useShowSubservice = (url) => {
  let subservice;

  switch (url) {
    case "constitucionEmpresa":
      subservice = constitucionEmpresas;
      break;

    default:
      break;
  }

  return subservice;
};
