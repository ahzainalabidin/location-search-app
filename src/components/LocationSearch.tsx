import { useState } from "react";
import type { Place } from "../api/Place";
import { search } from "../api/search";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {

    const [term, setTerm] = useState('');
    const [place, setPlace] = useState<Place[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await search(term);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="font-bold" htmlFor="term">
                    Search
                </label>
                <input
                    className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
                    id="term"
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                />
            </form>
        </div>
    );

}