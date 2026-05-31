type Props = {
    city: string;
    onChange: (value: string) => void;
    onSearch: () => void;
};

export default function SearchBar({ city, onChange, onSearch }: Props) {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={city}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
                onChange={(e) => onChange(e.target.value)}
                placeholder="都市名を入力(例：Tokyo)"
                className="flex-1 border rounded px-3 py-2 outline-none text-black focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={onSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                検索
            </button>
        </div>
    );
}