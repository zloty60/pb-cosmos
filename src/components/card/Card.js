import { useDispatch } from "react-redux";

import { fetchSpaceXData } from "./../../store/actions/spaceXDataActions";
import {
  CardWrapper,
  CardTitle,
  CardImage,
  CardOverlay,
  CardParagraph,
} from "./Card.styled";

export function Card({ name, imgSrc, setOpenModal }) {
  const dispatch = useDispatch();

  const handleCard = () => {
    setOpenModal(true);
    dispatch(fetchSpaceXData(name));
  };

  return (
    <CardWrapper onClick={handleCard}>
      <CardOverlay>
        <CardParagraph>Details</CardParagraph>
      </CardOverlay>
      <CardImage imgSrc={imgSrc} />
      <CardTitle>{name}</CardTitle>
    </CardWrapper>
  );
}
