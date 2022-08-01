import React, { useCallback } from 'react';
import { IconButton, useColorMode } from '@andideve/ids-react';

import SVGSun from '../../atoms/icons/Sun';
import SVGMoon from '../../atoms/icons/Moon';

import { ThemeToggleProps } from './types';

const titleModes = {
  dark: 'Appearance Light Mode',
  light: 'Appearance Dark Mode',
};

const iconModes = {
  dark: <SVGSun />,
  light: <SVGMoon />,
};

function ThemeToggle(props: ThemeToggleProps) {
  const { state, setMode } = useColorMode();

  const toggle = useCallback(() => {
    setMode((s) => (s === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <IconButton title={titleModes[state]} onClick={toggle} {...props}>
      {iconModes[state] || null}
    </IconButton>
  );
}

export { ThemeToggle };
export * from './types';
export default ThemeToggle;
