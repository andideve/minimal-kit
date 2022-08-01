import React from 'react';
import type { BoxProps } from '@andideve/ids-react';
import type { SpacingProps } from '@andideve/ids-react/dist/lib/style-props/spacing';

export interface ArticleHeadProps extends SpacingProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  description?: string;
  size?: '4xl' | '3xl' | '2xl' | 'xl';
  as?: BoxProps['as'];
  textAlign?: BoxProps['textAlign'];
  space?: BoxProps['mt'];
}
