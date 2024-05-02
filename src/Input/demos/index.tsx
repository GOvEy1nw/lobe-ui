import { Input, InputProps, StoryBook, useControls, useCreateStore } from '@govey1nw/lobehub-ui';

export default () => {
  const store = useCreateStore();
  const controls: InputProps | any = useControls(
    {
      placeholder: 'Type keywords...',
      type: {
        options: ['ghost', 'block', 'pure'],
        value: 'ghost',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Input {...controls} />
    </StoryBook>
  );
};
