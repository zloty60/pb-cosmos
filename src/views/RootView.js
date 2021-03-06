import { useState, useEffect } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Conatainer, Box, Margin } from "./../components/base/Grid.styled";
import { Navbar } from "./../components/navbar/Navbar";
import { Button } from "./../components/button/Button.styled";
import { CardContainer } from "./../containers/CardContainer";
import { Illustration } from "./../components/illustration/Illustration";
import { Modal, OutsideClickHandler } from "./../components/modal/Modal";
import { Footer } from "./../components/footer/Footer";
import { DotContainer } from "./../containers/DotContainer";
import { CircleContainer } from "./../containers/CircleContainer";

export function RootView() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshRate: 500,
    refreshMode: "debounce",
  });

  useEffect(() => {
    if (width < 900) {
      alert(
        "Projekt nie jest responsywny, zalecana szerokość ekranu to minimum 900 px !"
      );
    }
  }, [width]);

  const handleAnimations = () => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Margin mb="70px" />
      <div ref={ref}></div>
      <Conatainer>
        <Box display="flex" flexWrap="wrap">
          <Box flexBasis="50%">
            <CardContainer setOpenModal={setOpenModal} />
          </Box>
          <Box flexBasis="50%">
            <Box
              display="flex"
              flexdirection="column"
              alignItems="center"
              justifyContent="space-between"
              height="100%"
            >
              <Illustration isAnimated={isAnimated} />
              <Button
                onClick={handleAnimations}
                disabled={isAnimated ? true : false}
              >
                Launch Rocket!
              </Button>
            </Box>
          </Box>
        </Box>
        <DotContainer />
      </Conatainer>
      <Margin mt="70px" />
      <Footer />
      {isOpenModal && (
        <>
          <Modal setOpenModal={setOpenModal} />
          <OutsideClickHandler setOpenModal={setOpenModal} />
        </>
      )}
      <CircleContainer />
    </>
  );
}
