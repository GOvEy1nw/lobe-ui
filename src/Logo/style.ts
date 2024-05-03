import { createStyles } from 'antd-style';

export const LOGO_3D = {
  path: '/assets/rais-logo.svg', // Relative path to the logo file
  pkg: '', // No external package
  version: '', // No version
};

export const LOGO_FLAT = {
  path: '/assets/rais-icon.svg', // Relative path to the logo file
  pkg: '', // No external package
  version: '', // No version
};

export const LOGO_TEXT = {
  path: '/assets/rais-logotext.svg', // Relative path to the logo file
  pkg: '', // No external package
  version: '', // No version
};

export const useStyles = createStyles(({ css }) => {
  return {
    extraTitle: css`
      font-weight: 300;
      white-space: nowrap;
    `,
  };
});
