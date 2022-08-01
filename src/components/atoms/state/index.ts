import { newTransition, TRANSITION_MS } from '@andideve/ids-react';
import styled from '@emotion/styled';

export default styled.span`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-system-foreground);
  transition: ${newTransition('opacity', { duration: TRANSITION_MS })};
  *:focus-within > &,
  *:active > & {
    opacity: 0.075;
  }
`;
