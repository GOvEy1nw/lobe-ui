import { ConfigProvider, Logo } from '@govey1nw/lobehub-ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
