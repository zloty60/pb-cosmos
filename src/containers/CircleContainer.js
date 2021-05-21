import { Circle } from "./../components/backgroundElements/BackgroundElements.styled";
import circleUp from "./../assets/img/CircleUp.png";
import circleLeft from "./../assets/img/CircleLeft.png";
import circleRight from "./../assets/img/CircleRight.png";

export function CircleContainer() {
  return (
    <>
      <Circle src={circleLeft} bottom="100px" left="0px" />
      <Circle src={circleRight} top="108px" right="0px" />
      <Circle src={circleUp} top="0px" right="42%" />
    </>
  );
}
