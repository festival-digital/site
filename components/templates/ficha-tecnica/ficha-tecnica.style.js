import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperSearch = styled.div`
  margin: 24px 0;

  @media (min-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
  font-size: 24px;
  margin: 24px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  max-width: 1040px;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  margin-right: 16px;
`;

export const ListItem = styled.li`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
`;

export const Strong = styled.span`
  font-weight: bold;
`;

export const Contact = styled.div`
  display: block;

  @media (min-width: 700px) {
    display: flex;
  }
  > div {
    margin-bottom: 48px;

    @media (min-width: 700px) {
      flex: 1;
    }
  }
`;

export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const ContainerGeneric = styled.div`
  display: block;
  margin-bottom: 48px;
`;

export const WrapperGeneric = styled.div`
  display: block;

  @media (min-width: 700px) {
    display: flex;
    > ul {
      flex: 1;
    }
  }
`;
