import { DraggablePanel } from '@lobehub/ui';
import styled from 'styled-components';

const View = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-height: 240px;
`;

export default () => {
  return (
    <View>
      <DraggablePanel placement="top">DraggablePanel</DraggablePanel>
      <div style={{ flex: 1 }}>Content</div>
    </View>
  );
};
