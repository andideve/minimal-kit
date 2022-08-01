import React, { useMemo } from 'react';
import { Box, Heading, Paragraph } from '@andideve/ids-react';

import { ArticleHeadProps } from './types';

function ArticleHead({
  children,
  as = 'header',
  title,
  description,
  size = '4xl',
  space = '1rem',
  ...rest
}: ArticleHeadProps) {
  const typeSize = useMemo(() => (/^(4xl|3xl)$/.test(size) ? 'lg' : 'base'), [size]);
  return (
    <Box as={as} {...rest}>
      <Heading as="h3" size={size} className="font-semibold">
        {title}
      </Heading>
      {description && (
        <Paragraph mt={space} size={typeSize} className="color-secondary">
          {description}
        </Paragraph>
      )}
      {children}
    </Box>
  );
}

export { ArticleHead };
export * from './types';
export default ArticleHead;
