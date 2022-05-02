import MapboxDraw from '@mapbox/mapbox-gl-draw'  
import mapboxgl, { Control, IControl } from 'mapbox-gl'
import sdlz from '../img/sdlu.png'
/**
 *  获取地图场景 scene
 */
export class GetMap {
  #map: mapboxgl.Map
  #draw: Control | IControl
  constructor(geoData: MicroFormChange, mapDom: string | HTMLDivElement) {
    const {
      geoUrl,
      geoTwoDimMaxHierarchy,
      geoTwoDimInitialHierarchy,
      geoTwoDimMinHierarchy,
      geoTwoDimViewPoint,
      geoTwoDimViewRotation,
    } = geoData.rows[DEFAULT_SLOTS_ID].slots
    const maxZoom = marked2number(geoTwoDimMaxHierarchy)
    const minZoom = marked2number(geoTwoDimMinHierarchy)
    const zoom = marked2number(geoTwoDimInitialHierarchy)
    const centerPoint: any = marked2string(geoTwoDimViewPoint)
    let center: [number, number] = [0, 0]
    try {
      center = JSON.parse(centerPoint)
    } catch (err) {
      console.warn(err)
    }
    const rotation = marked2number(geoTwoDimViewRotation)
    const geoServiceUrl: any = marked2string(geoUrl)

   
    this.#map = new mapboxgl.Map({
      container: mapDom,
      zoom: 17,
      center,
      style: {
        version: 8,
        name: 'blank',
        sprite: `http://${geoServiceUrl}/sprite/sprite`,
        glyphs: `http://${geoServiceUrl}/glyphs/{fontstack}/{range}.pbf`,
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
            source:'bg',
          }
        ],
      },
    })
    this.#draw = new MapboxDraw()
    this.#map.addControl(this.#draw, 'top-left')
  }
  get map(): mapboxgl.Map {
    return this.#map
  }
  get draw(): any {
    return this.#draw
  }
}
