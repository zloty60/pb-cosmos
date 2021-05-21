import planetImg from "./../../assets/img/Planet.png";
import rocketImg from "./../../assets/img/Rocket.png";
import { Planet, IllustrationWrapper, Rocket } from "./Illustration.styled";

export function Illustration({ isAnimated }) {
  return (
    <IllustrationWrapper>
      <Planet src={planetImg} />
      <Rocket src={rocketImg} isAnimated={isAnimated} />
    </IllustrationWrapper>
  );
}
