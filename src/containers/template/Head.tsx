import NextHead from 'next/head';
import React from 'react';

import { siteMetadata } from '../../_data/app/site-metadata';

export default function Head({
  title,
  description = siteMetadata.description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <NextHead>
      <meta name="description" content={description} />
      <title>{title}</title>
    </NextHead>
  );
}

Head.defaultProps = { description: undefined };
