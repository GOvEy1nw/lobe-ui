import {
  Snippet,
  SnippetProps,
  StoryBook,
  useControls,
  useCreateStore,
} from '@govey1nw/lobehub-ui';

export default () => {
  const store = useCreateStore();
  const control: SnippetProps | any = useControls(
    {
      children: 'pnpm install @govey1nw/lobehub-ui',
      copyable: true,
      language: 'sh',
      spotlight: false,
      symbol: '$',
      type: {
        options: ['ghost', 'block'],
        value: 'ghost',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Snippet {...control} />
    </StoryBook>
  );
};
