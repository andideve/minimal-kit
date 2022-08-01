import React from 'react';
import type { BoxProps } from '@andideve/ids-react';

export interface SectionHeadProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  description?: string;
  mt?: BoxProps['mt'];
  mb?: BoxProps['mb'];
}
