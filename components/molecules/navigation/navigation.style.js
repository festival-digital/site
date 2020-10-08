import styled from 'styled-components';

export const Navigation = styled.ul`
  display: ${(props) => {
    const { column } = props;
    return column ? 'grid' : 'inline-flex';
  }};
  align-items: center;
  grid-template-rows: 50px 50px auto;
  width: 100%;
  margin: ${(props) => {
    const { column } = props;
    return column ? '50px 20px' : '0';
  }};

  & li:nth-child(3) {
    align-self: end;
  }
`;

export const NavigationItem = styled.li`
  margin-right: ${(props) => {
    const { column } = props;
    return column ? '0' : '24px';
  }};
  text-transform: uppercase;
  text-align: ${(props) => {
    const { column } = props;
    return column ? 'center' : 'left';
  }};

  > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => {
      const { column } = props;
      return column ? '18px' : '16px';
    }};
    line-height: 19px;
    color: ${({ theme }) => theme.brandColor.fourtiary.medium};
  }
`;
