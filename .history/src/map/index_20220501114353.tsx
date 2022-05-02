import React, { useEffect, useRef } from 'react'
export const Map: React.FC = () => {
    const mapInput = useRef(null)
    useEffect(() => {

        const mapDom: any = mapInput.current
        const mapIns = new GetMap(geoData, mapDom)
        const mapbox = mapIns.map
        const mapDraw = mapIns.draw
        sceneRef.current = mapbox
        drawRef.current = mapDraw
        setGisSvcIp(gisSvc)
        setCenterPoint(center)
        setCenterZoom(19)
        mapbox.on('zoom', () => {
            changeView(mapbox, mapbox)
        })
        mapbox.on('dragend', () => {
            changeView(mapbox, mapbox)
        })
        mapbox.on('click', (evt: any) => {
            clickDevices(mapbox, evt)
        })
        mapbox.on('load', () => { })
        mapbox.on('draw.create', updateArea);

        mapbox.on('draw.delete', updateArea);

        mapbox.on('draw.update', updateArea);
        mapbox.on('draw.update', (e) => {
            console.log('update:', e)
        })

        mapbox.on("draw.selectionchange", () => {
            fea = mapDraw.getSelected()

            if (fea && fea.features && fea.features[0]) {
                const properties = fea.features[0].properties
                // 判断系统属性字段SM开头除了SMID & SMUSERID不显示
                const reg = new RegExp("^(?=SM)")
                propertiesList = []
                for (const iable in properties) {
                    if (!reg.test(iable) || iable == "SMID" || iable == "SMUSERID") {

                        propertiesList.push(iable)
                    }
                }
                // 判断是否已经创建了table表
                const dom = document.getElementById("propertiesTable")
                if (dom) {
                    dom?.parentNode?.removeChild(dom);
                }
                // 创建页面table表
                const tabl = document.createElement("table");
                tabl.setAttribute("id", "propertiesTable");
                const tablebody = document.createElement("tbody");
                const tablehead = document.createElement("thead");
                let tr, tdP, tdV, tdtext;
                const trHead = document.createElement("tr");
                const tdHeadP = document.createElement("td");
                const tdHeadV = document.createElement("td");
                const tdHeadPTX = document.createTextNode("PROPERTY");
                const tdHeadVTX = document.createTextNode("VALUE");
                tdHeadP.appendChild(tdHeadPTX)
                tdHeadV.appendChild(tdHeadVTX)
                trHead.appendChild(tdHeadP)
                trHead.appendChild(tdHeadV)
                tablehead.appendChild(trHead)
                tabl.appendChild(tablehead)

                for (let i = 0; i < propertiesList.length; i++) {
                    tr = document.createElement("tr");
                    tdP = document.createElement("td")
                    tdV = document.createElement("td")
                    tdtext = document.createTextNode(propertiesList[i]);
                    tdP.appendChild(tdtext)
                    tr.appendChild(tdP)
                    if (propertiesList[i] == "SMID") {
                        tdtext = document.createTextNode(properties[propertiesList[i]]);
                        tdV.appendChild(tdtext)
                    } else {
                        const inp = document.createElement("input");
                        inp.value = properties[propertiesList[i]]
                        inp.setAttribute("onChange", "inputChange(" + i + ")")
                        inp.setAttribute("id", "input" + i)
                        tdV.appendChild(inp)
                    }
                    tr.appendChild(tdV)

                    tablebody.appendChild(tr)
                }
                tabl.appendChild(tablebody)
                document.getElementsByTagName("body")[0].appendChild(tabl)
            }

        }

        )
        mapbox.on('dblclick', (evt) => {
            const feature = mapbox.queryRenderedFeatures(evt.point)[0]
            if (!feature) return
            const { id } = feature.properties as Record<string, any>
            const featureSource = feature.source
            if (mapDraw.getAll().features.find((feature: Feature) => { return feature.id === id })) {
                const feature = mapDraw.getAll().features.find((feature: Feature) => { return feature.id === id })
                const source = mapbox.getSource(feature.properties.source) as any
                const sourceData = source.serialize().data
                const { features } = sourceData
                features.push(feature)
                source.setData(sourceData)
                mapDraw.delete(feature.id)
            } else {
                const source = mapbox.getSource(featureSource) as any
                const sourceData = source.serialize().data
                const { features } = sourceData
                const idx = features.findIndex((feature: Feature) => {
                    return feature.properties?.id === id
                })
                console.log(feature)
                features.splice(idx, 1)
                source.setData(sourceData)
                const fid = mapDraw.add(feature)
                console.log(fid)
                mapDraw.setFeatureProperty(fid[0], 'source', featureSource)
            }


        })

    }, [])
    return (<div> </div>)
}