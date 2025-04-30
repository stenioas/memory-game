import { Navbar, NavbarContent, Tab, Tabs } from '@heroui/react';
import TabBegginer from './TabBegginer';
import TabIntermediate from './TabIntermediate';
import TabAdvanced from './TabAdvanced';
import { useState } from 'react';

const MemoryGame = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Iniciante');
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Navbar className="dark">
        <NavbarContent
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Tabs
            size="md"
            radius="md"
            variant="bordered"
            color="primary"
            className="dark"
            classNames={{
              panel: 'p-0 w-full',
              tabList: 'flex-1 max-w-[480px]',
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '480px',
            }}
            onSelectionChange={(value) => setSelectedTab(value as string)}
          >
            <Tab key="Iniciante" title="Iniciante"></Tab>
            <Tab key="Intermediário" title="Intermediário"></Tab>
            <Tab key="Avançado" title="Avançado"></Tab>
          </Tabs>
        </NavbarContent>
      </Navbar>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {selectedTab === 'Iniciante' && <TabBegginer />}
        {selectedTab === 'Intermediário' && <TabIntermediate />}
        {selectedTab === 'Avançado' && <TabAdvanced />}
      </div>
    </div>
  );
};

export default MemoryGame;
