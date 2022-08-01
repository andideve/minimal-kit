import type { NextPage } from 'next';
import React from 'react';
import { GridContainer, Box, Image, AspectRatio, Button, media } from '@andideve/ids-react';
import clsx from 'clsx';

import Page, { Section } from '../containers/template/Page';

import HeroHorizontal from '../containers/organisms/hero/horizontal';
import HeroVertical from '../containers/organisms/hero/vertical';

import ArticleHead from '../components/molecules/article-head';

import { UI } from '../config/globals';

function newArray(length: number, value?: unknown) {
  return new Array(length).fill(value);
}

const sections = {
  heros: {
    horizontal: (
      <Section title="heros/horizontal">
        <HeroHorizontal />
      </Section>
    ),
    vertical: (
      <Section title="heros/vertical">
        <HeroVertical />
      </Section>
    ),
    verticalWithImage: (
      <Section title="heros/verticalWithImage">
        <HeroVertical includeImage />
      </Section>
    ),
  },
  contents: {
    center: {
      '1': (
        <Section title="contents/center/1" className="text-center">
          <Section.HeaderContainer>
            <Section.Head
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <Image
            ratio={590 / 425}
            alt="Andi"
            width={590}
            src="/assets/images/image.svg"
            className="dummy-image-wrapper"
            sx={{ margin: '0 auto', maxWidth: 800 }}
          />
        </Section>
      ),
      '2': (
        <Section title="contents/center/2" className="text-center">
          <Section.HeaderContainer>
            <Section.Head
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <GridContainer
            sx={{
              'article:not(:first-of-type)': { marginTop: UI.SECTION_SPACE },
              article: { gridColumn: '1/-1' },
              [media('lg')]: {
                article: { gridColumn: 'auto/span 6' },
                'article:not(:first-of-type)': { margin: 0 },
              },
            }}
          >
            {newArray(2).map((v, i) => (
              <article key={i}>
                <Image
                  ratio={590 / 425}
                  alt="Andi"
                  width={590}
                  src="/assets/images/image.svg"
                  className="dummy-image-wrapper"
                />
                <ArticleHead
                  mt="2rem"
                  title="Aenean egestas libero amet vulputate."
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus."
                  size="3xl"
                />
              </article>
            ))}
          </GridContainer>
        </Section>
      ),
      '3': (
        <Section title="contents/center/3" className="text-center">
          <Section.HeaderContainer>
            <Section.Head
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <GridContainer
            sx={{
              rowGap: '3rem',
              article: { gridColumn: 'auto/span 4' },
            }}
          >
            {newArray(3).map((v, i) => (
              <article key={i}>
                <Image
                  ratio={590 / 425}
                  alt="Andi"
                  width={590}
                  src="/assets/images/image.svg"
                  className="dummy-image-wrapper"
                />
                <ArticleHead
                  mt="2rem"
                  title="Aenean egestas libero amet vulputate."
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit."
                  size="2xl"
                />
              </article>
            ))}
          </GridContainer>
        </Section>
      ),
      '4': (
        <Section title="contents/center/4" className="text-center">
          <Section.HeaderContainer>
            <Section.Head
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <GridContainer sx={{ article: { gridColumn: 'auto/span 4' } }}>
            {newArray(3).map((v, i) => (
              <Box as="article" key={i} p="2rem">
                <AspectRatio
                  ratio={1}
                  maxW={64}
                  sx={{
                    margin: '0 auto',
                    borderRadius: 999,
                    backgroundColor: 'var(--color-system-background-secondary)',
                  }}
                />
                <ArticleHead
                  mt="1.5rem"
                  title="Platea lectus sit."
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam."
                  size="xl"
                />
              </Box>
            ))}
          </GridContainer>
          <Section.Footer>
            <Button variant="plain">Show more</Button>
          </Section.Footer>
        </Section>
      ),
      '5': (
        <Section title="contents/center/5" className="text-center">
          <Section.HeaderContainer>
            <Section.Head
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <Box sx={{ 'article:not(:first-of-type)': { marginTop: UI.SECTION_SPACE } }}>
            {newArray(3).map((v, i) => (
              <GridContainer
                as="article"
                key={i}
                className={clsx(i % 2 !== 0 && 'reversed', 'items-center')}
                sx={{
                  '.Grid__Image': { gridColumn: '1/-1' },
                  '.Grid__Content': { gridColumn: '1/-1', marginTop: '2rem' },
                  [media('lg')]: {
                    '.Grid__Image': { gridColumn: '1/span 6' },
                    '.Grid__Content': { gridColumn: '8/-1', margin: 0, textAlign: 'right' },
                    '&.reversed': {
                      '.Grid__Image': { gridRowStart: 1, gridColumn: '7/-1' },
                      '.Grid__Content': { gridColumn: '1/span 5', textAlign: 'left' },
                    },
                  },
                }}
              >
                <div className="Grid__Image">
                  <Image
                    ratio={590 / 425}
                    alt="Andi"
                    width={590}
                    src="/assets/images/image.svg"
                    className="dummy-image-wrapper"
                  />
                </div>
                <div className="Grid__Content">
                  <ArticleHead
                    title="Aenean egestas libero amet vulputate."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit."
                    size="2xl"
                  />
                </div>
              </GridContainer>
            ))}
          </Box>
        </Section>
      ),
    },
    left: {
      '1': (
        <Section title="contents/left/1">
          <Section.HeaderContainer>
            <Section.Head
              className="text-center"
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <Box sx={{ 'article:not(:first-of-type)': { marginTop: UI.SECTION_SPACE } }}>
            {newArray(2).map((v, i) => (
              <GridContainer
                as="article"
                key={i}
                className="items-center"
                sx={{
                  '.Grid__Content': { gridColumn: '1/-1' },
                  '.Grid__Image': { gridColumn: '1/-1', marginTop: '2rem' },
                  [media('lg')]: {
                    '.Grid__Content': { gridColumn: '1/span 5' },
                    '.Grid__Image': { gridColumn: '7/-1', margin: 0 },
                  },
                }}
              >
                <div className="Grid__Content">
                  <ArticleHead
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus."
                    size="4xl"
                  />
                </div>
                <div className="Grid__Image">
                  <Image
                    ratio={590 / 425}
                    alt="Andi"
                    width={590}
                    src="/assets/images/image.svg"
                    className="dummy-image-wrapper"
                  />
                </div>
              </GridContainer>
            ))}
          </Box>
        </Section>
      ),
      '2': (
        <Section title="contents/left/2">
          <GridContainer
            as="article"
            className="items-center"
            sx={{
              '.Grid__Content': { gridColumn: '1/-1' },
              '.Grid__Image': { gridColumn: '1/-1', marginTop: '2rem' },
              [media('lg')]: {
                '.Grid__Content': { gridColumn: '1/span 5' },
                '.Grid__Image': { gridColumn: '7/-1', margin: 0 },
              },
            }}
          >
            <div className="Grid__Content">
              <ArticleHead
                mb="2rem"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus."
                size="4xl"
              />
              <Button variant="plain" sx={{ marginLeft: '-1.25rem' }}>
                Read more
              </Button>
            </div>
            <div className="Grid__Image">
              <Image
                ratio={590 / 425}
                alt="Andi"
                width={590}
                src="/assets/images/image.svg"
                className="dummy-image-wrapper"
              />
            </div>
          </GridContainer>
        </Section>
      ),
      '3': (
        <Section title="contents/left/3">
          <Section.HeaderContainer>
            <Section.Head
              className="text-center"
              title="Suspendisse vitae pharetra netus"
              description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
            />
          </Section.HeaderContainer>
          <GridContainer
            className="items-center"
            sx={{
              '.Grid__Content': { gridColumn: '1/-1' },
              '.Grid__Image': { gridColumn: '1/-1', marginTop: '3rem' },
              [media('lg')]: {
                '.Grid__Content': { gridColumn: '1/span 5' },
                '.Grid__Image': { gridColumn: '7/-1', margin: 0 },
              },
            }}
          >
            <div className="Grid__Content">
              <Box
                sx={{
                  'article:not(:first-of-type)': {
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-system-separator)',
                  },
                }}
              >
                {newArray(3).map((v, i) => (
                  <Box
                    as="article"
                    key={i}
                    gridTemplateColumns="4rem auto"
                    className="grid items-center"
                  >
                    <AspectRatio
                      ratio={1}
                      sx={{
                        borderRadius: 999,
                        backgroundColor: 'var(--color-system-background-secondary)',
                      }}
                    />
                    <ArticleHead
                      ml="1.5rem"
                      title="Platea lectus sit."
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam."
                      size="xl"
                      space=".5rem"
                    />
                  </Box>
                ))}
              </Box>
            </div>
            <div className="Grid__Image">
              <Image
                ratio={590 / 425}
                alt="Andi"
                width={590}
                src="/assets/images/image.svg"
                className="dummy-image-wrapper"
              />
            </div>
          </GridContainer>
        </Section>
      ),
    },
  },
};

const Home: NextPage = () => (
  <Page>
    {sections.heros.horizontal}
    {sections.heros.vertical}
    {sections.heros.verticalWithImage}
    {sections.contents.center[1]}
    {sections.contents.center[2]}
    {sections.contents.center[3]}
    {sections.contents.center[4]}
    {sections.contents.center[5]}
    {sections.contents.left[1]}
    {sections.contents.left[2]}
    {sections.contents.left[3]}
  </Page>
);

export default Home;
