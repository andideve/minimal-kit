import styled from '@emotion/styled';
import React from 'react';

const spacing = '.75rem';

const DList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li:not(:first-of-type) {
    margin-left: ${spacing};
  }
`;

const MList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  li {
    text-align: center;
    &:not(:first-of-type) {
      margin-top: ${spacing};
    }
  }
`;

function ButtonList({
  children,
  device,
  ...rest
}: { device?: 'mobile' } & React.HTMLAttributes<HTMLUListElement>) {
  const List = device === 'mobile' ? MList : DList;
  return <List {...rest}>{children}</List>;
}

ButtonList.defaultProps = { device: undefined };

export { ButtonList };
export default ButtonList;
