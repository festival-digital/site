import styled from 'styled-components';

export const ChatWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 100vh;
  background: rgb(48,29,61);
  background: linear-gradient(0deg,#9043C5 1.61%,#5D2B7F 59.81%,#2B143B 75.06%,#0C0610 85.72%,#000000 90.24%);
  align-items: center;
  overflow: hidden;
`;

export const ChatLoadingWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #9043C5 1.61%, #5D2B7F 30.81%, #2B143B 62.06%, #0C0610 84.72%, #000000 96.24%);
`;

export const Messages = styled.div`
  position: relative;
  width: 100%;
  max-height: 320px;
  overflow: auto;
  padding: 20px 20px 60px 20px;
  z-index: 20;
  text-align: center;
`;

export const MessagesWrapper = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 420px;
`;

export const UserMessageWrapper = styled.div`
  text-align: right;

  & + div {
    margin-top: 8px;
  }
`;

export const UserMessage = styled.p`
  display: inline-block;
  max-width: 90%;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  background-color: #EA5EBF;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 10px 10px 0px 10px;
`;

export const NomadeMessageWrapper = styled.div`
  text-align: left;

  & + div {
    margin-top: 8px;
  }
`;

export const NomadeMessage = styled.p`
  display: inline-block;
  max-width: 90%;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  background-color: #2BC2E0;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 10px 10px 10px 0px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #000000;
  position: relative;
  text-align: center;
`;

export const FormContent = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 420px;
`;

export const MontainsIllustration = styled.img`
  position: absolute;
  width: 400%;
  bottom: 100%;
  left: 0;
  z-index: 11;
  transform: translateX(-${({ translateX }) => translateX}px);
  transition-duration: 1.5s;

  @media (min-width: 769px) {
    width: 150%;
    transform: translateX(-${({ translateX }) => translateX / 1.2}px);  
  }
`; 

export const StarsIllustration = styled.img`
  position: absolute;
  width: 450%;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translateX(-${({ translateX }) => translateX}px);
  transition-duration: 3s;

  @media (min-width: 769px) {
    width: 180%;
    transform: translateX(-${({ translateX }) => translateX / 1.2}px);  
  }
`; 

export const AvatarIllustration = styled.img`
  height: 180px;
  position: absolute;
  bottom: calc(100% - 26px);
  right: 20px;
  z-index: 40;

  @media (min-width: 769px) {
    right: 200px;
  }
`; 

export const SumWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 120px;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: ${({ diameter }) => diameter}px;
    height: ${({ diameter }) => diameter}px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(43, 194, 224, 0) 0%, #2BC2E0 94.79%);
    opacity: 0.16;
    top: calc(50% - ${({ diameter }) => diameter / 2}px);
    left: calc(50% - ${({ diameter }) => diameter / 2}px);
    border-radius: 50%;
    transition-duration: 2s;
  }

  @media (min-width: 769px) {
    &:before {
      width: ${({ diameter }) => diameter * 2}px;
      height: ${({ diameter }) => diameter * 2}px;
      top: calc(50% - ${({ diameter }) => (diameter * 2) / 2}px);
      left: calc(50% - ${({ diameter }) => (diameter * 2) / 2}px);
    }
  }

  @media (min-width: 769px) {
    top: 30px;
    left: 15vw;
  }
`;

export const SumIllustration = styled.img`
  position: relative;
  display: inline-block;
  width: 100%;
  z-index: 40;
`; 
