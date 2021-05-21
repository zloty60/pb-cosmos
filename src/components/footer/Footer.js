import { FooterWrapper, FooterText } from "./Footer.styled";
import { Conatainer, Box } from "./../base/Grid.styled";

export function Footer() {
  return (
    <FooterWrapper>
      <Conatainer>
        <Box display="flex" justifyContent="space-between">
          <FooterText>Copyright © Usertive & SpaceX API</FooterText>
          <FooterText>Recruiment Task / Summer 2021</FooterText>
        </Box>
      </Conatainer>
    </FooterWrapper>
  );
}
