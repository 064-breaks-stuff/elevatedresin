import { useLocation } from "react-router-dom";

import { conversion } from "../data/conversion";

export default function useQuoteTarget(label = conversion.primaryQuoteLabel) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  if (isHomepage) {
    return {
      label,
      href: conversion.quoteSectionHash,
      isHomepage,
      targetType: "anchor"
    };
  }

  return {
    label,
    to: conversion.contactRoute,
    isHomepage,
    targetType: "route"
  };
}