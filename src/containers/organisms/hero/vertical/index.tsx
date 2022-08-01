import React from 'react';
import { Box, Button, Image } from '@andideve/ids-react';

import { Section } from '../../../template/Page';

export default function HeroVertical({ includeImage }: { includeImage?: true }) {
  return (
    <div className="text-center">
      <Section.HeaderContainer>
        <Section.Head
          mb="3rem"
          title="Suspendisse vitae pharetra netus"
          description="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus."
        />
      </Section.HeaderContainer>
      <Box sx={{ 'button:not(:first-of-type)': { marginLeft: '1rem' } }}>
        <Button variant="filled">Primary button</Button>
        <Button variant="plain">Tertiary button</Button>
      </Box>
      {includeImage && (
        <Section.Footer as="div">
          <Image
            ratio={590 / 425}
            alt="Andi"
            width={590}
            src="/assets/images/image.svg"
            className="dummy-image-wrapper"
            sx={{ margin: '0 auto', maxWidth: 800 }}
          />
        </Section.Footer>
      )}
    </div>
  );
}

HeroVertical.defaultProps = { includeImage: undefined };
