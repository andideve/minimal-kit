import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Text } from '@andideve/ids-react';
import clsx from 'clsx';

import State from '../../../atoms/state';

import { UI } from '../../../../config/globals';
import { Menu } from '../../../../types/defaults';

const DList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    line-height: 44px;
    &:not(:first-of-type) {
      margin-left: 1.5rem;
    }
  }
`;

const MList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    padding: 0 ${UI.FRAME_X};
    height: ${UI.NAVBAR_HEIGHTS};
    border-bottom: 1px solid var(--color-system-separator);
  }
`;

export function Item({ children, label, to }: Menu & { children?: React.ReactNode }) {
  const router = useRouter();
  const active = useMemo(
    () => (to === '/' ? router.asPath === to : router.asPath.startsWith(to)),
    [router.asPath, to],
  );
  return (
    <li className="relative">
      <Link href={to} passHref>
        <Text
          as="a"
          aria-current={active ? 'page' : undefined}
          size="sm"
          className={clsx(!active && 'color-secondary--hoverable', 'font-semibold overlay--after')}
        >
          {label}
          {children}
        </Text>
      </Link>
    </li>
  );
}

Item.defaultProps = { children: undefined };

function NavigationMenu({
  items,
  media,
  ...rest
}: {
  items: Menu[];
  className?: string;
  style?: React.CSSProperties;
  media?: 'mobile';
}) {
  const isMobile = media === 'mobile';
  const List = isMobile ? MList : DList;
  return (
    <List {...rest}>
      {items.map((menu) => (
        <Item key={menu.to} label={menu.label} to={menu.to}>
          {isMobile ? <State /> : null}
        </Item>
      ))}
    </List>
  );
}

NavigationMenu.defaultProps = { className: undefined, style: undefined, media: undefined };

export { NavigationMenu };
export type { Menu };
export default NavigationMenu;
