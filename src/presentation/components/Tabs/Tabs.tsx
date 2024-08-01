// /src/components/Tabs.tsx
import React, { useState } from 'react';
import TodayBilling from '../Daily/DailyTable/TodayBilling';
import MonthlyBilling from '../Monthly/MonthlyTable/MonthlyBilling';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('today');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'today':
                return <TodayBilling />;
            case 'monthly':
                return <MonthlyBilling />;
            default:
                return null;
        }
    };

    return (
        <div className="container mt-5">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'today' ? 'active' : ''}`}
                        onClick={() => setActiveTab('today')}
                    >
                        Facturación del día
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'monthly' ? 'active' : ''}`}
                        onClick={() => setActiveTab('monthly')}
                    >
                        Facturación por mes
                    </button>
                </li>
            </ul>
            <div className="tab-content mt-4">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Tabs;
