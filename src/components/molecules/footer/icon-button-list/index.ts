import styled from '@emotion/styled';

const IconButtonList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`;

export { IconButtonList };
export default IconButtonList;
