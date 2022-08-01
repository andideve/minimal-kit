import Link from 'next/link';
import React from 'react';
import { Text } from '@andideve/ids-react';

import { BrandProps } from './types';

function Brand({ name }: BrandProps) {
  return (
    <Link href="/" passHref>
      <Text as="a" size="base" className="font-bold">
        {name}
      </Text>
    </Link>
  );
}

export { Brand };
export * from './types';
export default Brand;
