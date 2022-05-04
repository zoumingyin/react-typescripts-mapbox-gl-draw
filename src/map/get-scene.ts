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

		this._map = new mapboxgl.Map({
			container: mapDom,
			zoom: 17,
			center: [117.69931568236984, 36.65981867593794],
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
		this._draw = new MapboxDraw({
			styles: [
				{
					"id": "gl-draw-line",
					"type": "line",
					"filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-color": "#D20C0C",
						"line-dasharray": [0.2, 2],
						"line-width": 2
					}
				},
				// polygon fill
				{
					"id": "gl-draw-polygon-fill",
					"type": "fill",
					"filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
					"paint": {
						'fill-color': [
							'case',
							['boolean', ['has', 'fillColor'], false],
							['get', 'fillColor'], 'red'
						],
						"fill-outline-color": "#D20C0C",
					}
				},
				// polygon mid points
				{
					'id': 'gl-draw-polygon-midpoint',
					'type': 'circle',
					'filter': ['all',
						['==', '$type', 'Point'],
						['==', 'meta', 'midpoint']],
					'paint': {
						'circle-radius': 3,
						'circle-color': '#fbb03b'
					},
				},
				{
					"id": "gl-draw-polygon-stroke-active",
					"type": "line",
					"filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-color": "#D20C0C",
						"line-dasharray": [0.2, 2],
						"line-width": 2
					}
				},
				// vertex point halos
				{
					"id": "gl-draw-polygon-and-line-vertex-halo-active",
					"type": "circle",
					"filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
					"paint": {
						"circle-radius": 5,
						"circle-color": "#FFF"
					}
				},
				// vertex points
				{
					"id": "gl-draw-polygon-and-line-vertex-active",
					"type": "circle",
					"filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
					"paint": {
						"circle-radius": 3,
						"circle-color": "#D20C0C",
					}
				},

				// INACTIVE (static, already drawn)
				// line stroke
				{
					"id": "gl-draw-line-static",
					"type": "line",
					"filter": ["all", ["==", "$type", "LineString"], ["==", "mode", "static"]],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-color": "#000",
						"line-width": 3
					}
				},
				// polygon fill
				{
					"id": "gl-draw-polygon-fill-static",
					"type": "fill",
					"filter": ["all", ["==", "$type", "Polygon"], ["==", "mode", "static"]],
					"paint": {
						"fill-color": "#000",
						"fill-outline-color": "#000",
					}
				},
				// polygon outline
				{
					"id": "gl-draw-polygon-stroke-static",
					"type": "line",
					"filter": ["all", ["==", "$type", "Polygon"], ["==", "mode", "static"]],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-color": "#000",
						"line-width": 3
					}
				},

			]
		})
		this._map.addControl(this._draw, 'top-left')
	}
	get map(): mapboxgl.Map {
		return this._map
	}
	get draw(): any {
		return this._draw
	}
}
