import eua from "../assets/images/usa.svg";
import japan from "../assets/images/japan.svg";
import czechRepublic from "../assets/images/czech-republic.svg";
import uruguay from "../assets/images/uruguay.svg";

export const countryFlag = (country: string) => {
  switch (country) {
  case "Estados Unidos" || "EUA":
    return eua;

  case "Japão":
    return japan;

  case "República Checa":
    return czechRepublic;

  case "Uruguai":
    return uruguay;

  default:
    return null;
  }
};
