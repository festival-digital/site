import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleContainer = styled.div`
width: 100%;
height: 48px;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: ${({ backgroundColor, theme }) =>
  backgroundColor || theme.neutralColor[8]};
padding-left: ${({ theme }) => theme.spacingInset.xs};
color: ${({ theme }) => theme.neutralColor[1]};
`;

export const Separator = styled.div`
width: 100%;
height: 40px;
background-color: ${({ backgroundColor, theme }) =>
  backgroundColor || theme.neutralColor[8]};
color: ${({ theme }) => theme.neutralColor[1]};
`;

export const FilterContainer = styled.div`
display: flex;
flex-direction: column;
background: ${({ theme }) => theme.neutralColor[8]};
padding: ${({ theme }) => theme.spacingSquish.nano};

& input {
  background: #404040;
  color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 40px;
}
`;

export const FilterButtonContainer = styled.div`
display: flex;
margin-top: ${({ theme }) => theme.spacingInline.xxxs};
& button {
  margin-right: ${({ theme }) => theme.spacingInline.nano};
}
`;

export const PlainButton = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 16px;
height: 33px;
/* Brand / Secondary / Medium */
background: ${({ background }) => background || `#414141`};
border-radius: ${({ theme }) => theme.borderRadius.sm};
color: ${({ theme }) => theme.neutralColor[1]};
`;