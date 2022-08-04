import React, { useRef } from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  IconButton,
  IconAnchor,
  Drawer,
  useDisclosure,
  media,
} from '@andideve/ids-react';

import { IconButtonList } from '../../../components/molecules/footer/icon-button-list';
import {
  Brand,
  BrandProps,
  NavigationMenu,
  Menu,
  ButtonList,
  Humberger,
} from '../../../components/molecules/navbar';
import ThemeToggle from '../../../components/molecules/theme-toggle';

import SVGGitHub from '../../../components/atoms/icons/GitHub';

import { UI } from '../../../config/globals';

const Nav = styled.nav`
  --spacing: 3rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 ${UI.FRAME_X};
  height: ${UI.NAVBAR_HEIGHTS};
  border-bottom: 1px solid var(--color-system-separator);
  background-color: var(--color-system-background);
  z-index: 999;
  .Nav__NavigationMenu {
    margin: 0 var(--spacing);
  }
  .Nav__IconButtonList {
    margin: 0 calc(-0.75rem + var(--spacing));
  }
  ${media('lg')} {
    .Nav__IconButtonList {
      margin-left: 0;
    }
  }
`;

const DrawerFooter = styled.div`
  padding: calc(${UI.NAVBAR_HEIGHTS} / 2) ${UI.FRAME_X};
`;

export default function Navbar({ brand, menuItems }: { brand: BrandProps; menuItems: Menu[] }) {
  const { isOpen, toggle } = useDisclosure();

  const drawerRef = useRef<HTMLDivElement>(null);

  const iconButtons = (
    <>
      <li>
        <IconAnchor
          title="View GitHub Repository"
          variant="plain"
          href="https://github.com/andideve/minimal-kit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGGitHub />
        </IconAnchor>
      </li>
      <li>
        <ThemeToggle variant="plain" />
      </li>
    </>
  );
  const buttons = (
    <>
      <li>
        <Button variant="plain">Login</Button>
      </li>
      <li>
        <Button variant="filled">Get Started</Button>
      </li>
    </>
  );
  const drawer = (
    <Drawer
      isOpen={isOpen}
      transition={{
        props: ['opacity', 'transform'],
        duration: 100,
        easing: 'linear',
        initial: { opacity: 0, transform: 'translateY(-1.5rem)' },
        expanded: { opacity: 1, transform: 'translateY(0)' },
      }}
      style={{
        top: UI.NAVBAR_HEIGHTS,
        height: `calc(100vh - ${UI.NAVBAR_HEIGHTS})`,
        backgroundColor: 'var(--color-system-background)',
      }}
    >
      <Drawer.Content>
        <NavigationMenu items={menuItems} media="mobile" />
        <DrawerFooter>
          <ButtonList device="mobile">{buttons}</ButtonList>
        </DrawerFooter>
      </Drawer.Content>
    </Drawer>
  );

  return (
    <Nav className="flex items-center justify-between">
      <Brand {...brand} />
      <Box display={{ _: 'none', 2: 'block' }}>
        <NavigationMenu items={menuItems} className="Nav__NavigationMenu" />
      </Box>
      <div className="flex items-center">
        <IconButtonList className="Nav__IconButtonList">{iconButtons}</IconButtonList>
        <Box display={{ _: 'none', 2: 'block' }}>
          <ButtonList>{buttons}</ButtonList>
        </Box>
        <Box ref={drawerRef} display={{ _: 'block', 2: 'none' }}>
          <IconButton
            variant="plain"
            size="sm"
            aria-label={isOpen ? 'close drawer' : 'open drawer'}
            onClick={toggle}
            sx={{ '--i-size': 'inherit', margin: '0 -.625rem' }}
          >
            <Humberger expanded={isOpen} />
          </IconButton>
          {drawer}
        </Box>
      </div>
    </Nav>
  );
}
