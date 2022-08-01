import React from 'react';
import { Container, Box, BoxProps } from '@andideve/ids-react';
import styled from '@emotion/styled';

import Head from './Head';

import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';

import SectionHead from '../../components/molecules/section-head';

import { UI } from '../../config/globals';

import { siteMetadata } from '../../_data/app/site-metadata';
import { siteMenu } from '../../_data/app/site-menu';
import { footerMenu } from '../../_data/app/footer-menu';

const Main = styled.main`
  margin-top: ${UI.NAVBAR_HEIGHTS};
`;

interface HeaderContainerProps {
  children: React.ReactNode;
  centered?: boolean;
}

interface SectionFooterProps {
  children: React.ReactNode;
  as?: BoxProps['as'];
}

export const Section: React.FC<React.HTMLAttributes<HTMLElement>> & {
  HeaderContainer: React.FC<HeaderContainerProps>;
  Head: typeof SectionHead;
  Footer: React.FC<SectionFooterProps>;
} = ({ children, ...rest }) => (
  <Box as="section" px={UI.FRAME_X} py={UI.SECTION_SPACE} {...rest}>
    <Container>{children}</Container>
  </Box>
);

Section.HeaderContainer = ({ children, centered = true }) => (
  <Box mx={centered ? 'auto' : undefined} maxW={590}>
    {children}
  </Box>
);

Section.Head = SectionHead;

Section.Footer = ({ children, as = 'footer' }) => (
  <Box as={as} mt={UI.SECTION_SPACE}>
    {children}
  </Box>
);

export default function Page({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const fullTitle = title ? [title, siteMetadata.title].join(' — ') : siteMetadata.title;
  return (
    <>
      <Head title={fullTitle} description={description} />
      <header>
        <h1 className="sr-only">{fullTitle}</h1>
        <Navbar brand={{ name: siteMetadata.title }} menuItems={siteMenu} />
      </header>
      <Main>
        <Box
          sx={{
            backgroundColor: 'var(--color-system-separator)',
            section: { backgroundColor: 'var(--color-system-background)' },
            'section:not(:first-of-type)': { marginTop: UI.SECTION_SPACE },
          }}
        >
          {children}
        </Box>
      </Main>
      <Footer
        brand={{ name: siteMetadata.title }}
        menuItems={footerMenu}
        copy="&copy; 2022 Andi (deve). All Rights Reserved."
      />
    </>
  );
}

Page.defaultProps = { title: undefined, description: undefined };
