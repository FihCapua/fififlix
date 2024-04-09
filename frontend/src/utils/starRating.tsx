import star from "../assets/images/icons/star.svg";

export const starRating = (stars: any) => {
  const totalStars = 5;
  const filledStars = parseInt(stars, 10);

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <img src={star} key={index} alt="star" />
      ))}
      {[...Array(totalStars - filledStars)].map((_, index) => (
        // eslint-disable-next-line max-len
        <img src={star} alt="star" key={index + filledStars} style={{ display: filledStars === totalStars ? "inline" : "none" }} />
      ))}
    </>
  );
};
