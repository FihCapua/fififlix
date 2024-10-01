import brasil from "../assets/images/brasil.svg";
import czechRepublic from "../assets/images/czech-republic.svg";
import eua from "../assets/images/usa.svg";
import japan from "../assets/images/japan.svg";
import uruguay from "../assets/images/uruguay.svg";

export const countryFlag = (country: string) => {
  switch (country) {
  case "EUA" || "Estados Unidos":
    return eua;

  case "Japão":
    return japan;

  case "República Checa":
    return czechRepublic;

  case "Uruguai":
    return uruguay;

  case "Brasil":
    return brasil;

  default:
    return null;
  }
};
