// /src/components/Tabs.tsx
import React, { useState, useCallback } from 'react';
import TodayBilling from '../Today/TodayBilling/TodayBilling';
import MonthlyBilling from '../Monthly/MonthlyBilling/MonthlyBilling';

interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
    <li className="nav-item">
        <button className={`nav-link ${isActive ? 'active' : ''}`} onClick={onClick}>
            {label}
        </button>
    </li>
);

interface TabContentProps {
    activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
    switch (activeTab) {
        case 'today':
            return <TodayBilling />;
        case 'monthly':
            return <MonthlyBilling />;
        default:
            return null;
    }
};

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'today' | 'monthly'>('today');

    const handleTodayClick = useCallback(() => setActiveTab('today'), []);
    const handleMonthlyClick = useCallback(() => setActiveTab('monthly'), []);

    return (
        <div className="container mt-5">
            <ul className="nav nav-tabs">
                <Tab label="Facturación del día" isActive={activeTab === 'today'} onClick={handleTodayClick} />
                <Tab label="Facturación por mes" isActive={activeTab === 'monthly'} onClick={handleMonthlyClick} />
            </ul>
            <div className="tab-content mt-4">
                <TabContent activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Tabs;
