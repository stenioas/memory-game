import { Tab, Tabs } from '@heroui/react';
import TabBegginer from './TabBegginer';
import TabIntermediate from './TabIntermediate';
import TabAdvanced from './TabAdvanced';

const MemoryGame = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '312px',
      }}
    >
      <Tabs color="primary" className="dark">
        <Tab title="Iniciante">
          <TabBegginer />
        </Tab>
        <Tab title="Intermediário">
          <TabIntermediate />
        </Tab>
        <Tab title="Avançado">
          <TabAdvanced />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MemoryGame;
