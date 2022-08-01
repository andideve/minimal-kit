import { styles, media, Theme } from '@andideve/ids-react';

const global = (theme: Theme) => `
:root {
  color-scheme: ${theme.colorMode};
  font-size: 14px;
}
${media('lg')} {
  :root { font-size: 16px; }
}

${styles.flexbox}
${styles.layouts}
${styles.size}
${styles.typography}

// Colors

.color-primary {
  color: var(--g-color-system-accent);
}
.color-secondary,
.color-secondary--hoverable {
  color: var(--color-system-foreground-secondary);
}
.color-secondary--hoverable {
  &:focus {
    color: var(--color-system-foreground);
  }
  ${media('lg')} {
    &:hover {
      color: var(--color-system-foreground);
    }
  }
}
.color-tertiary {
  color: var(--color-system-foreground-tertiary);
}

// Components

.dummy-image-wrapper {
  border: 2px solid var(--color-system-separator);
  border-radius: ${theme.radii.md};
  background-color: var(--color-system-background);
}

// Others

.sr-only {
  overflow: hidden;
  position: absolute;
  left: -100vw;
  max-width: 0;
}`;

export { global as globalStyles };
