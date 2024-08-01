// /src/presentation/components/ChartModal.tsx
import React from 'react';
import Modal from 'react-modal';
import { Bar } from 'react-chartjs-2';
import '../../index.css'
interface ChartModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    data: any;
    options: any;
    title: string;
}

const ChartModal: React.FC<ChartModalProps> = ({ isOpen, onRequestClose, data, options, title }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel={title} className="chart-modal" overlayClassName="chart-modal-overlay">
            <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={onRequestClose}>
                    <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Bar data={data} options={options} />
            </div>
        </Modal>
    );
};

export default ChartModal;
