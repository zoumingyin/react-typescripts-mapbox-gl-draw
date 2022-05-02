import MapboxDraw from '@mapbox/mapbox-gl-draw'
import mapboxgl, { Control, IControl } from 'mapbox-gl'
import sdlz from '../img/sdlu.png'
/**
 *  获取地图场景 scene
 */
export class GetMap {
	private _map: mapboxgl.Map
	private _draw: Control | IControl
	constructor(mapDom: string | HTMLDivElement) {
    if(mapDom)
		this._map = new mapboxgl.Map({
			container: mapDom,
			zoom: 17,
			center: [117.70038856600844, 36.65975842961744],
			style: {
				version: 8,
				name: 'blank',
				sprite: `http://localhost:3000/sprite/sprite`,
				glyphs: `http://localhost:3000/glyphs/{fontstack}/{range}.pbf`,
				sources: {
					'bg': {
						type: 'image',
						url: sdlz,
						coordinates: [
							[117.69764363765717, 36.66091657591227],
							[117.70066916942596, 36.66091657591227],
							[117.70066916942596, 36.65883377687355],
							[117.69764363765717, 36.65883377687355],
						],
					}
				},
				layers: [
					{
						id: 'background',
						type: 'background',
						paint: { 'background-color': '#0B1D2B' },
					},
					{
						id: 'radar-layer',
						type: 'raster',
						source: 'bg',
					}
				],
			},
		})
		this._draw = new MapboxDraw()
		this._map.addControl(this._draw, 'top-left')
	}
	get map(): mapboxgl.Map {
		return this._map
	}
	get draw(): any {
		return this._draw
	}
}
