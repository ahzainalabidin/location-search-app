interface SearchResponse {
    features: {
        geometry: {
            coordinates: number[];
        };
        properties: {
            place_id: number;
            display_name: string;
        };
    }[];
}

export const search = async (term: string) => {

    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
    );

    const data: SearchResponse = await res.json();
    console.log(data)

};
