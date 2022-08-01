import React from 'react';
import styled from '@emotion/styled';
import { Box, IconButton, Paragraph, useTheme, media } from '@andideve/ids-react';

import { Brand, BrandProps } from '../../../components/molecules/navbar/brand';
import { IconButtonList, NavigationMenu, Menu } from '../../../components/molecules/footer';

import SVGDribbble from '../../../components/atoms/icons/Dribbble';
import SVGInstagram from '../../../components/atoms/icons/Instagram';
import SVGLinkedIn from '../../../components/atoms/icons/LinkedIn';

import { UI } from '../../../config/globals';

const Root = styled.footer`
  --row-space: 1.5rem;
  padding: ${UI.SECTION_SPACE} ${UI.FRAME_X};
  .Footer__Row {
    padding-top: var(--row-space);
    &:first-of-type {
      border-top: 1px solid var(--color-system-separator);
    }
    .IconButtonList {
      margin: -0.75rem;
    }
    .Nav,
    .IconButtonList {
      padding-top: var(--row-space);
    }
  }
  ${media('lg')} {
    .Footer__Row {
      .Nav,
      .IconButtonList {
        padding-top: 0;
      }
    }
  }
`;

export default function Footer({
  brand,
  menuItems,
  copy,
}: {
  brand: BrandProps;
  menuItems: Menu[];
  copy: string;
}) {
  const theme = useTheme();
  const iconButtons = (
    <>
      <li>
        <IconButton aria-label="Dribbble" variant="plain">
          <SVGDribbble />
        </IconButton>
      </li>
      <li>
        <IconButton aria-label="Instagram" variant="plain">
          <SVGInstagram />
        </IconButton>
      </li>
      <li>
        <IconButton aria-label="LinkedIn" variant="plain">
          <SVGLinkedIn />
        </IconButton>
      </li>
    </>
  );
  return (
    <Root>
      <Box
        flexDirection={{ _: 'column', 2: 'row' }}
        alignItems={{ 2: 'center' }}
        className="Footer__Row relative flex justify-between"
      >
        <Brand {...brand} />
        <nav className="Nav">
          <NavigationMenu items={menuItems} />
        </nav>
        <IconButtonList className="IconButtonList">{iconButtons}</IconButtonList>
      </Box>
      <Box textAlign={{ _: 'left', 2: 'center' }} className="Footer__Row">
        <Paragraph
          size="xs"
          className={`font-semibold ${
            theme.colorMode === 'dark' ? 'color-tertiary' : 'color-secondary'
          }`}
        >
          {copy}
        </Paragraph>
      </Box>
    </Root>
  );
}
