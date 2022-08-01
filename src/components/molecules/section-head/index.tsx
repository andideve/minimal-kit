import React from 'react';
import { Box, Heading, Paragraph } from '@andideve/ids-react';

import { UI } from '../../../config/globals';
import { SectionHeadProps } from './types';

function SectionHead({
  children,
  mb = UI.SECTION_SPACE,
  title,
  description,
  ...rest
}: SectionHeadProps) {
  return (
    <Box as="header" mb={mb} {...rest}>
      <Heading as="h2" size="6xl" className="font-bold">
        {title}
      </Heading>
      {description && (
        <Paragraph mt="1rem" size="xl" className="color-secondary">
          {description}
        </Paragraph>
      )}
      {children}
    </Box>
  );
}

export { SectionHead };
export * from './types';
export default SectionHead;
