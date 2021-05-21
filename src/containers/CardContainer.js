import { Card } from "./../components/card/Card";
import { Box, Margin } from "./../components/base/Grid.styled";
import img1 from "./../assets/img/1.png";
import img2 from "./../assets/img/2.png";
import img3 from "./../assets/img/3.png";
import img4 from "./../assets/img/4.png";

export function CardContainer({ setOpenModal }) {
  return (
    <>
      <Box display="flex" justifyContent="center" gap="30px">
        <Card name="capsules" imgSrc={img1} setOpenModal={setOpenModal} />
        <Card name="crew" imgSrc={img2} setOpenModal={setOpenModal} />
      </Box>
      <Margin mt="32px" />
      <Box display="flex" justifyContent="center" gap="30px">
        <Card name="rockets" imgSrc={img3} setOpenModal={setOpenModal} />
        <Card name="starlink" imgSrc={img4} setOpenModal={setOpenModal} />
      </Box>
    </>
  );
}
