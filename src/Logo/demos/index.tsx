import { Logo, LogoProps, StoryBook, useControls, useCreateStore } from '@govey1nw/lobehub-ui';

export default () => {
  const store = useCreateStore();
  const control: LogoProps | any = useControls(
    {
      size: {
        max: 240,
        min: 16,
        step: 4,
        value: 64,
      },
      type: {
        options: ['3d', 'flat', 'mono', 'text', 'combine'],
        value: '3d',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Logo {...control} />
    </StoryBook>
  );
};
