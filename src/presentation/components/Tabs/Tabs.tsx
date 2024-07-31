// /src/presentation/components/Tabs/Tabs.tsx
import React from 'react';
import 'react-tabs/style/react-tabs.css';
import DailyTable from '../Daily/DailyTable/DailyTable';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import MonthlyTable from '../Monthly/MonthlyTable/MonthlyTable';


const BillingTabs: React.FC = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Facturación del día</Tab>
                <Tab>Facturación por mes</Tab>
            </TabList>
            <TabPanel>
                <DailyTable />
            </TabPanel>
            <TabPanel>
                <MonthlyTable />
            </TabPanel>
        </Tabs>
    );
};

export default BillingTabs;
