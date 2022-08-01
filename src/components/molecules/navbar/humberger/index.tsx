import React from 'react';
import styled from '@emotion/styled';

const Styled = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  &:before,
  &:after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: var(--color-system-foreground);
    transition: transform 0.2s ease;
  }
  &.expanded {
    &:before {
      transform: translateY(0.375rem) rotate(45deg);
    }
    &:after {
      transform: translateY(-0.375rem) rotate(-45deg);
    }
  }
`;

function Humberger({ expanded }: { expanded?: boolean }) {
  return <Styled className={expanded ? 'expanded' : undefined} />;
}

Humberger.defaultProps = { expanded: undefined };

export { Humberger };
export default Humberger;
