import React from 'react';
import useWarehouses from '../hooks/useWarehouses';
import WarehouseTable from '../components/WarehouseTable/WarehouseTable';

const HomePage: React.FC = () => {
    const { warehouses, loading, error } = useWarehouses();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <h1>Warehouses</h1>
            <WarehouseTable warehouses={warehouses} />
        </div>
    );
};

export default HomePage;
