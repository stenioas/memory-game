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
        alignItems: 'center',
        height: '100%',
        maxWidth: '360px',
        padding: '24px',
      }}
    >
      <Tabs
        size="md"
        radius="md"
        color="primary"
        className="dark"
        classNames={{ panel: 'p-0 w-full max-h-[800px]' }}
      >
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
