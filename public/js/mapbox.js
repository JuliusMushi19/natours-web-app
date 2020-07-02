/* eslint-disable */
export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibm9kZW1hcGJveCIsImEiOiJja2JrMW4zcnowcmQ2MnNwZnh4YTJ2NjNjIn0.BaRyGlmYhYpqCaA5nymPlA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/nodemapbox/ckbk2y0fd0d8o1inoghl06w0w',
        scrollZoom: false
        // center: [-118.102815, 34.096762],
        // zoom: 10,
        // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker'; 

        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);

        // Add popup
        new mapboxgl.Popup({offset: 30}).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};
