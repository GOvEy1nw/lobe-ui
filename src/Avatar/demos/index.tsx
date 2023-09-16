import { ActionIconProps, Avatar, StroyBook, useControls, useCreateStore } from '@lobehub/ui';

import { useCdnFn } from '@/ConfigProvider';

export default () => {
  const genCdnUrl = useCdnFn();
  const store = useCreateStore();
  const control: ActionIconProps | any = useControls(
    {
      animation: false,
      avatar: genCdnUrl({
        path: 'assets/logo-3d.webp',
        pkg: '@lobehub/assets-logo',
        version: '1.1.0',
      }),
      background: '#FEE064',
      shape: {
        options: ['circle', 'square'],
        value: 'circle',
      },
      size: {
        max: 128,
        min: 16,
        step: 1,
        value: 40,
      },
      title: 'cm',
    },
    { store },
  );

  return (
    <StroyBook levaStore={store}>
      <Avatar {...control} />
    </StroyBook>
  );
};
