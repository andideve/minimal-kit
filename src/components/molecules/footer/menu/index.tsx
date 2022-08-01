import React from 'react';
import styled from '@emotion/styled';
import { media } from '@andideve/ids-react';

import { Item } from '../../navbar/menu';
import { Menu } from '../../../../types/defaults';

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  ${media('lg')} {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    li:not(:first-of-type) {
      margin-left: 1.5rem;
    }
  }
`;

function NavigationMenu({
  items,
  ...rest
}: {
  items: Menu[];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <List {...rest}>
      {items.map((menu) => (
        <Item key={menu.to} label={menu.label} to={menu.to} />
      ))}
    </List>
  );
}

NavigationMenu.defaultProps = { className: undefined, style: undefined };

export { NavigationMenu };
export type { Menu };
export default NavigationMenu;
