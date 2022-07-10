import * as turf from '@turf/turf'
import { v1 as uuidv1 } from 'uuid';
export const creatFillLayer = (data: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined) => {
    const layer: mapboxgl.AnyLayer = {
        'id': `${uuidv1()}`,
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': data
        },
        'layout': {},
        'paint': {
            'fill-color': [
                'case',
                ['boolean', ['has', 'fillColor'], false],
                ['get', 'fillColor'], '#29323B'
            ]
        },
    }
    return layer

}
export const creatSymbolLayer = (data: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined) => {
    const layer: mapboxgl.AnyLayer = {
        'id': `${uuidv1()}`,
        type: 'symbol',
        source: {
            type: 'geojson',
            data: data,
        },
        layout: {
            'icon-image': ['get', 'icon'],
            'text-field': ['get', 'name'],
            'text-font': ['Open Sans Italic'],
            'text-offset': [0, 0.7],
            'text-anchor': 'top',
            'text-size': 12,
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'text-optional': true,
        },
        paint: { 'text-color': 'white' },
    }
    return layer
}
export const creatLineLayer = (data: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined) => {
    const layer: mapboxgl.AnyLayer = {
        'id': `${uuidv1()}`,
        type: 'line',
        source: {
            type: 'geojson',
            'data': data
        },
        layout: {
            'line-join': 'miter',
            'line-cap': 'butt',
        },
        paint: {
            'line-color': '#58626B',
            'line-width': 2,
            'line-gap-width': 2,
        },
    }
    return layer
}

export const getPolygonPoint = (PolygonData: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined) => {
    const data = JSON.parse(JSON.stringify(PolygonData))
    data.features.forEach((item: any, index: string | number) => {
        const pol = item.geometry.coordinates
        const polygon = turf.polygon(pol)
        const centers: any = turf.centerOfMass(polygon)
        data.features[index].geometry.coordinates = centers.geometry.coordinates
        data.features[index].geometry.type = 'Point'
    })
    return data
}