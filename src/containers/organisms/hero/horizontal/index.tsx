import React from 'react';
import { Box, Button, GridContainer, Image, media } from '@andideve/ids-react';
import clsx from 'clsx';

import SectionHead from '../../../../components/molecules/section-head';
import { UI } from '../../../../config/globals';

function Grid({
  content,
  image,
  reverse,
}: {
  content: React.ReactNode;
  image: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <GridContainer
      className={clsx(reverse && 'reversed', 'items-center')}
      sx={{
        '.HeroGrid__Content': { gridColumn: '1/-1' },
        '.HeroGrid__Image': { gridColumn: '1/-1', marginTop: UI.SECTION_SPACE },
        [media('lg')]: {
          '.HeroGrid__Content': { gridColumn: '1/span 5' },
          '.HeroGrid__Image': { gridColumn: '7/-1', margin: 0 },
          '&.reversed': {
            '.HeroGrid__Content': { gridColumn: '8/-1' },
            '.HeroGrid__Image': { gridRowStart: 1, gridColumn: '1/span 6' },
          },
        },
      }}
    >
      <div className="HeroGrid__Content">{content}</div>
      <div className="HeroGrid__Image">{image}</div>
    </GridContainer>
  );
}

Grid.defaultProps = { reverse: undefined };

export default function HeroHorizontal() {
  return (
    <Grid
      content={
        <>
          <SectionHead
            mb="3rem"
            title="Arcu suscipit massa aliquam"
            description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
          />
          <Box sx={{ 'button:not(:first-of-type)': { marginLeft: '1rem' } }}>
            <Button variant="filled">Primary button</Button>
            <Button variant="plain">Tertiary button</Button>
          </Box>
        </>
      }
      image={
        <Image
          ratio={590 / 425}
          alt="Andi"
          width={590}
          src="/assets/images/image.svg"
          className="dummy-image-wrapper"
        />
      }
    />
  );
}
