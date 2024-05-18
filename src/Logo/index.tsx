'use client';

import { useTheme } from 'antd-style';
import { type ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Img from '@/Img';
import { DivProps } from '@/types';

import Divider from './Divider';
import LogoHighContrast from './LogoHighContrast';
import { LOGO_3D, LOGO_FLAT, LOGO_TEXT, useStyles } from './style';

export interface LogoProps extends DivProps {
  /**
   * @description Additional React Node to be rendered next to the logo
   */
  extra?: ReactNode;
  /**
   * @description Size of the logo in pixels
   * @default 32
   */
  size?: number;
  /**
   * @description Type of the logo to be rendered
   * @default '3d'
   */
  type?: '3d' | 'flat' | 'high-contrast' | 'text' | 'combine';
}

const Logo = memo<LogoProps>(({ type = '3d', size = 36, style, extra, className, ...rest }) => {
  const theme = useTheme();
  const { styles } = useStyles();
  let logoComponent: ReactNode;

  switch (type) {
    case '3d': {
      logoComponent = <Img alt="lobehub" src={LOGO_3D.path} style={style} width={size} {...rest} />;
      break;
    }
    case 'flat': {
      logoComponent = <Img alt="lobehub" src={LOGO_FLAT.path} style={style} width={size} />;
      break;
    }
    case 'high-contrast': {
      logoComponent = <LogoHighContrast style={style} width={size} {...rest} />;
      break;
    }
    case 'text': {
      logoComponent = <Img alt="lobehub" height={size} src={LOGO_TEXT.path} style={style} />;
      break;
    }
    case 'combine': {
      logoComponent = (
        <>
          <Img alt="lobehub" src={LOGO_3D.path} width={size} />
          <Img alt="lobehub" src={LOGO_TEXT.path} style={style} width={size} />
        </>
      );
      break;
    }
  }

  if (!extra) return logoComponent;

  const extraSize = Math.round((size / 3) * 1.9);

  return (
    <Flexbox align={'center'} className={className} horizontal style={style} {...rest}>
      {logoComponent}
      <Divider style={{ color: theme.colorFill, height: extraSize, width: extraSize }} />
      <div className={styles.extraTitle} style={{ fontSize: extraSize }}>
        {extra}
      </div>
    </Flexbox>
  );
});

export default Logo;
