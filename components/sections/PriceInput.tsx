interface PriceInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const PriceInput = ({ label, value, onChange, className = '' }: PriceInputProps) => {
  return (
    <div className={`${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          className="focus:ring-primary focus:border-primary block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min="0"
          step="10"
        />
      </div>
    </div>
  );
};