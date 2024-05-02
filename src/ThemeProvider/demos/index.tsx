import { ThemeProvider } from '@govey1nw/lobehub-ui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">LobeHub</Button>
    </ThemeProvider>
  );
};
