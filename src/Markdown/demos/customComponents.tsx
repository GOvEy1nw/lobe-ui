import {
  Markdown,
  MarkdownProps,
  StoryBook,
  useControls,
  useCreateStore,
} from '@govey1nw/lobehub-ui';

import { content2 } from './data';

export default () => {
  const store = useCreateStore();
  const options: MarkdownProps | any = useControls(
    {
      children: {
        rows: true,
        value: content2,
      },
      fullFeaturedCodeBlock: false,
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Markdown
        {...options}
        componentProps={{
          a: {
            rel: '',
            target: '_self',
          },
          hr: {
            children: 'Custom HR',
            dashed: true,
          },
          img: {
            style: {
              border: '5px solid green',
              borderRadius: '20px',
            },
          },
        }}
      />
    </StoryBook>
  );
};
