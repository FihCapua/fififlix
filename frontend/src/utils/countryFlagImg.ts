import eua from "../assets/images/usa.svg";

export const countryFlag = (country: string) => {
  switch (country) {
  case "Estados Unidos":
    return eua;

  default:
    return null;
  }
};
