// /src/components/Select.tsx
import React from 'react';

interface SelectProps {
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string | number; label: string }[];
}

const Select: React.FC<SelectProps> = React.memo(({ label, value, onChange, options }) => (
    <div className="col-md-6">
        <label className="form-label">{label}:</label>
        <select className="form-select" value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
));

export default Select;