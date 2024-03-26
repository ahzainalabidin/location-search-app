import { useState } from "react";
import type { Place } from "../api/Place";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {

    const [place, setPlace] = useState<Place[]>([]);

    return (
        <div>Search for a location!</div>
    );

}