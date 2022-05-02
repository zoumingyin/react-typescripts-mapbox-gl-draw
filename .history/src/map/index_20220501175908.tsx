import React, { useEffect, useRef, useState } from 'react'
import { GetMap } from './get-scene'
import * as turf from '@turf/turf'
import { Feature } from '@turf/turf'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import './mapbox-gl.css'
import { Box, Typography } from '@mui/material'
const data = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"id": "248876f1-8c32-4be3-9056-38fff2a66a3a",
		"properties": {
			"id": "248876f1-8c32-4be3-9056-38fff2a66a3a",
			"resname": "办公室",
			"resbigtype": "房间",
			"restype": "办公室",
			"restypeid": "fba08ef0-917c-4c1d-bf6b-0b6bf2123362",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001006e12e",
			"icon": "build",
			"fill-color": "red"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70007427607189, 36.65979576418741],
					[117.70007410756052, 36.65983516704374],
					[117.70010628359164, 36.65983525529518],
					[117.70010655687622, 36.659795823021724],
					[117.70007427607189, 36.65979576418741]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "05f07a30-cc03-4681-b5c6-bc954a4386ce",
		"properties": {
			"id": "05f07a30-cc03-4681-b5c6-bc954a4386ce",
			"resname": "民警卫生间",
			"resbigtype": "房间",
			"restype": "卫生间",
			"restypeid": "7e9f7820-aa3a-46cd-b35a-9cacaa19e013",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001006e136",
			"fill-color": "blue"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70007390936341, 36.65988878114739],
					[117.70007373124815, 36.6599304441696],
					[117.70010568725401, 36.65993030969146],
					[117.70010604348543, 36.65988862145443],
					[117.70007390936341, 36.65988878114739]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "e23a347a-319d-4fdc-ad7f-ead18421135d",
		"properties": {
			"id": "e23a347a-319d-4fdc-ad7f-ead18421135d",
			"resname": "一大队1#1洗刷间",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b59a"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70027111284453, 36.659829074195315],
					[117.7002717991125, 36.659929560956385],
					[117.70030807703715, 36.65992964710645],
					[117.70030874758997, 36.6598287884289],
					[117.70027111284453, 36.659829074195315]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "2e1c77a9-9d96-45fc-b491-041ca7f05398",
		"properties": {
			"id": "2e1c77a9-9d96-45fc-b491-041ca7f05398",
			"resname": "客梯",
			"resbigtype": "房间",
			"restype": "走道",
			"restypeid": "0106c863-f54c-41ec-821f-30f5c903165f",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001094e003"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70010662847194, 36.6597850640499],
					[117.70010671753, 36.65977329718889],
					[117.7001219987866, 36.65977329298644],
					[117.70012207212864, 36.659785011519304],
					[117.70010662847194, 36.6597850640499]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "b3d99321-dac8-44e1-8f37-a92435759c8e",
		"properties": {
			"id": "b3d99321-dac8-44e1-8f37-a92435759c8e",
			"resname": "热力间",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-0000109517d5"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70010671753, 36.659773301391354],
					[117.70010685198983, 36.659759075394135],
					[117.70013006113032, 36.659759004652855],
					[117.70013009780045, 36.65976501415817],
					[117.7001162362288, 36.65976501625944],
					[117.70011625194479, 36.65977329718889],
					[117.70010671753, 36.659773301391354]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "e73b8e3a-5274-487f-abb6-3c631f806398",
		"properties": {
			"id": "e73b8e3a-5274-487f-abb6-3c631f806398",
			"resname": "楼梯",
			"resbigtype": "房间",
			"restype": "走道",
			"restypeid": "0106c863-f54c-41ec-821f-30f5c903165f",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001094e010"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70011625194479, 36.65977329718889],
					[117.7001162362288, 36.65976501625944],
					[117.70013009256239, 36.659765018360645],
					[117.70012995635622, 36.65977328037914],
					[117.70011625194479, 36.65977329718889]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "4b4f56e3-36dd-4641-af40-483624da103c",
		"properties": {
			"id": "4b4f56e3-36dd-4641-af40-483624da103c",
			"resname": "会议室",
			"resbigtype": "房间",
			"restype": "办公室",
			"restypeid": "fba08ef0-917c-4c1d-bf6b-0b6bf2123362",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001006e131"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70007426559482, 36.659795747377615],
					[117.70010653504895, 36.65979580270985],
					[117.70010683976555, 36.65975902636552],
					[117.70007428829526, 36.659759075394135],
					[117.70007426559482, 36.659795747377615]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "c8491731-61dd-4a6d-be32-e0b567d87655",
		"properties": {
			"id": "c8491731-61dd-4a6d-be32-e0b567d87655",
			"resname": "一大队1#1厕所",
			"resbigtype": "房间",
			"restype": "卫生间",
			"restypeid": "7e9f7820-aa3a-46cd-b35a-9cacaa19e013",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b588"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7003088523632, 36.6598288493644],
					[117.70030816085625, 36.65992968072594],
					[117.70034856162944, 36.659929546247795],
					[117.7003493160014, 36.6598287884289],
					[117.7003088523632, 36.6598288493644]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "16af1342-a684-4ab4-be20-93513f30d85e",
		"properties": {
			"id": "16af1342-a684-4ab4-be20-93513f30d85e",
			"resname": "通道",
			"resbigtype": "房间",
			"restype": "通道",
			"restypeid": "362c05a2-fe6d-11e2-9217-17537992f626",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-0000109509fb"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70010655862254, 36.65979582162089],
					[117.70010662148664, 36.659785063349545],
					[117.70012208260569, 36.659785011519304],
					[117.70012196037014, 36.659795788001276],
					[117.70010655862254, 36.65979582162089]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "e9ee1220-3356-4b29-a86b-f17f954a3a02",
		"properties": {
			"id": "e9ee1220-3356-4b29-a86b-f17f954a3a02",
			"resname": "门厅一",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001094edf8"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70011657674328, 36.659809249146036],
					[117.70011668675545, 36.659795803410205],
					[117.70012195687748, 36.659795786600455],
					[117.7001219987866, 36.65977328668279],
					[117.70012996159518, 36.65977328037914],
					[117.70013006113032, 36.659759000450364],
					[117.7001571818257, 36.65975893951483],
					[117.70015757996623, 36.659809520204035],
					[117.70011657674328, 36.659809249146036]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "d5e321b2-d67a-4b24-bc71-5f4cfa2c0ca9",
		"properties": {
			"id": "d5e321b2-d67a-4b24-bc71-5f4cfa2c0ca9",
			"resname": "一大队1#1干警大门内",
			"resbigtype": "房间",
			"restype": "通道",
			"restypeid": "362c05a2-fe6d-11e2-9217-17537992f626",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001059d948"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70013007160739, 36.659759004652855],
					[117.70012996159518, 36.6597732824803],
					[117.70015730755391, 36.659773190026414],
					[117.7001571818257, 36.65975893321118],
					[117.70013007160739, 36.659759004652855]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "a43d3933-891f-4e4c-a8cf-8ccd9fb603dd",
		"properties": {
			"id": "a43d3933-891f-4e4c-a8cf-8ccd9fb603dd",
			"resname": "一大队1#1值班室",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5ae"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70015757996623, 36.659809511799125],
					[117.70011657150431, 36.659809251247324],
					[117.700116341002, 36.65983520136379],
					[117.70015762187533, 36.65983541148614],
					[117.70015757996623, 36.659809511799125]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "815dd92f-8959-406d-87f8-2c32af49e801",
		"properties": {
			"id": "815dd92f-8959-406d-87f8-2c32af49e801",
			"resname": "一大队1#1开水间",
			"resbigtype": "房间",
			"restype": "开水间",
			"restypeid": "f795437f-11df-489c-9f80-cb711c5e8e27",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5a6"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70025254692865, 36.65982913302963],
					[117.70025325939058, 36.659929645005164],
					[117.7002717938744, 36.659929560956385],
					[117.70027113379953, 36.659829032170876],
					[117.70025254692865, 36.65982913302963]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "20a39df6-d195-4ec3-85cc-095ea43977b2",
		"properties": {
			"id": "20a39df6-d195-4ec3-85cc-095ea43977b2",
			"resname": "一大队1#1学员大门内",
			"resbigtype": "房间",
			"restype": "通道",
			"restypeid": "362c05a2-fe6d-11e2-9217-17537992f626",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001059dab1"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70036955829754, 36.65976876064326],
					[117.70036931731728, 36.65975847094147],
					[117.70038855902403, 36.65975842891697],
					[117.70038858521714, 36.65976852530602],
					[117.70036955829754, 36.65976876064326]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "713f71ec-0bb1-4995-b716-196057dba3c3",
		"properties": {
			"id": "713f71ec-0bb1-4995-b716-196057dba3c3",
			"resname": "一大队1#1学员大门外",
			"resbigtype": "房间",
			"restype": "通道",
			"restypeid": "362c05a2-fe6d-11e2-9217-17537992f626",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001059d94a"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7003693120783, 36.65975847094147],
					[117.70036926493023, 36.65974915200478],
					[117.70038858521714, 36.65974918562442],
					[117.70038856426214, 36.659758424714525],
					[117.7003693120783, 36.65975847094147]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "53984c60-ccab-47d2-8084-7510d450f1e8",
		"properties": {
			"id": "53984c60-ccab-47d2-8084-7510d450f1e8",
			"resname": "一大队1#1干警大门外",
			"resbigtype": "房间",
			"restype": "通道",
			"restypeid": "362c05a2-fe6d-11e2-9217-17537992f626",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001059d946"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70013007160739, 36.6597589962479],
					[117.7001300244593, 36.65974763912203],
					[117.7001572027798, 36.65974764752697],
					[117.7001572027798, 36.65975893951483],
					[117.70013007160739, 36.6597589962479]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "52266741-7591-4bb2-ad19-70d9625dfceb",
		"properties": {
			"id": "52266741-7591-4bb2-ad19-70d9625dfceb",
			"resname": "一大队1#1寝室1",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5a4"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70015757996623, 36.659809520204035],
					[117.70015718706378, 36.659758941616104],
					[117.70017619477561, 36.65975892130422],
					[117.70017611444915, 36.659809511799125],
					[117.70015757996623, 36.659809520204035]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "ec8f0e14-72b7-4def-9cad-4cbfb65b38d3",
		"properties": {
			"id": "ec8f0e14-72b7-4def-9cad-4cbfb65b38d3",
			"resname": "一大队1#1寝室9",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b598"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70030917192359, 36.659809564329734],
					[117.70030872750814, 36.65975861102325],
					[117.70032725238717, 36.65975858931057],
					[117.70032767497445, 36.65980956012733],
					[117.70030917192359, 36.659809564329734]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "476494b0-60a8-4ea6-b5c2-7aab3e952368",
		"properties": {
			"id": "476494b0-60a8-4ea6-b5c2-7aab3e952368",
			"resname": "一大队1#1学习室",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b594"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70034730434378, 36.65980956643098],
					[117.70034724147969, 36.65975849825746],
					[117.7003693120783, 36.65975847094147],
					[117.7003697992769, 36.65980957693709],
					[117.70034730434378, 36.65980956643098]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "68b706bf-d64b-4e15-babf-cbe4be5bda82",
		"properties": {
			"id": "68b706bf-d64b-4e15-babf-cbe4be5bda82",
			"resname": "一大队1#1寝室5",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b58e"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7002333680869, 36.659809534912625],
					[117.70023321092575, 36.659758773518035],
					[117.70025201782096, 36.659758731493454],
					[117.70025241072251, 36.65980953911503],
					[117.7002333680869, 36.659809534912625]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "4187d655-c8da-4ef5-9ac7-77fe3ee65d83",
		"properties": {
			"id": "4187d655-c8da-4ef5-9ac7-77fe3ee65d83",
			"resname": "一大队1#1寝室4",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5aa"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70021392207087, 36.65980953071018],
					[117.70021410629829, 36.65975881694335],
					[117.70023321179892, 36.65975877071641],
					[117.70023337332498, 36.65980953071018],
					[117.70021392207087, 36.65980953071018]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "7aeff2c2-1ca9-436f-849a-d0bcc81a76e4",
		"properties": {
			"id": "7aeff2c2-1ca9-436f-849a-d0bcc81a76e4",
			"resname": "一大队1#1寝室7",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b58a"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70027117046963, 36.65980954751993],
					[117.7002715170963, 36.65975867826246],
					[117.70028995728394, 36.65975865725021],
					[117.7002903755054, 36.65980955172239],
					[117.70027117046963, 36.65980954751993]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "dc775eba-af57-412d-8674-0054858eb6f6",
		"properties": {
			"id": "dc775eba-af57-412d-8674-0054858eb6f6",
			"resname": "一大队1#1寝室10",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5b4"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7003276802134, 36.65980956853218],
					[117.7003272331785, 36.65975860471953],
					[117.70034722052559, 36.65975851926969],
					[117.70034730434378, 36.65980954962113],
					[117.7003276802134, 36.65980956853218]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "ce83c27f-2741-40d8-87b9-34764657847c",
		"properties": {
			"id": "ce83c27f-2741-40d8-87b9-34764657847c",
			"resname": "一大队1#1寝室6",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b59e"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70025241596149, 36.65980953911503],
					[117.70025202480626, 36.65975871538414],
					[117.7002715144768, 36.659758688768605],
					[117.70027117046963, 36.65980953911503],
					[117.70025241596149, 36.65980953911503]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "a5418ea6-e829-408b-bf6f-aef90df4e293",
		"properties": {
			"id": "a5418ea6-e829-408b-bf6f-aef90df4e293",
			"resname": "一大队1#1寝室8",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b59c"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70029038074439, 36.65980955172239],
					[117.70028999482724, 36.65975864814486],
					[117.7003087074263, 36.659758631335066],
					[117.7003091666846, 36.65980955592484],
					[117.70029038074439, 36.65980955172239]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "4d19569f-28bc-4e11-9b43-1831336137ae",
		"properties": {
			"id": "4d19569f-28bc-4e11-9b43-1831336137ae",
			"resname": "一大队1#1寝室3",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5be"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70019504707348, 36.659809518102776],
					[117.70019500603664, 36.65975886737277],
					[117.7002141010602, 36.659758833753145],
					[117.70021392730986, 36.65980952230524],
					[117.70019504707348, 36.659809518102776]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "d9b483cb-2e46-48d5-9e13-d0c3c9f8554a",
		"properties": {
			"id": "d9b483cb-2e46-48d5-9e13-d0c3c9f8554a",
			"resname": "楼梯二",
			"resbigtype": "房间",
			"restype": "走道",
			"restypeid": "0106c863-f54c-41ec-821f-30f5c903165f",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001094eda2"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7003697992769, 36.65980957693709],
					[117.70036960020664, 36.659788831546265],
					[117.70038070622851, 36.659788764307066],
					[117.70038071437713, 36.65980958510855],
					[117.7003697992769, 36.65980957693709]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "3209fb0a-e73c-4be4-a36f-3266b107b544",
		"properties": {
			"id": "3209fb0a-e73c-4be4-a36f-3266b107b544",
			"resname": "一大队1#1大厅",
			"resbigtype": "房间",
			"restype": "大厅",
			"restypeid": "d8f4b159-00cf-4510-90f5-4dc128b73742",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5a2"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70015058107687, 36.659930084160365],
					[117.70025325939058, 36.659929640802716],
					[117.70025254692865, 36.65982916664916],
					[117.7001576113983, 36.6598295826915],
					[117.70015762187533, 36.65983541148614],
					[117.70015007816224, 36.65983541148614],
					[117.70015058107687, 36.659930084160365]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "3d76ca87-de4d-48f3-b0c0-600b8029f4bd",
		"properties": {
			"id": "3d76ca87-de4d-48f3-b0c0-600b8029f4bd",
			"resname": "一大队1#1心理室",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5a8"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70011560234698, 36.659930250156876],
					[117.70011596905546, 36.659884687266015],
					[117.70015033485853, 36.65988463263422],
					[117.70015058107687, 36.659930218638564],
					[117.70011560234698, 36.659930250156876]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "15b52036-408e-4e0b-91a8-f1dfa25e3d65",
		"properties": {
			"id": "15b52036-408e-4e0b-91a8-f1dfa25e3d65",
			"resname": "门厅二",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001094ee03"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70038069691478, 36.65980959911667],
					[117.70038072718262, 36.659798097947586],
					[117.70038074813762, 36.659791848905186],
					[117.70038070622851, 36.65978873068754],
					[117.70036960020664, 36.659788898785536],
					[117.70036931731728, 36.659758475143946],
					[117.70038856426214, 36.65975842891697],
					[117.70038917369718, 36.65980958183995],
					[117.70038069691478, 36.65980959911667]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "d7a92419-578d-495b-9fca-1e5cab20627a",
		"properties": {
			"id": "d7a92419-578d-495b-9fca-1e5cab20627a",
			"resname": "一大队1#1走廊",
			"resbigtype": "房间",
			"restype": "走道",
			"restypeid": "0106c863-f54c-41ec-821f-30f5c903165f",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b58c"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7001576061593, 36.659829580590326],
					[117.70015757996623, 36.65980950759668],
					[117.70038917369718, 36.65980958183995],
					[117.70038921385995, 36.65982851947223],
					[117.7001576061593, 36.659829580590326]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "40427e02-2148-46d7-bb23-5ded4fbb3f5f",
		"properties": {
			"id": "40427e02-2148-46d7-bb23-5ded4fbb3f5f",
			"resname": "备勤室",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001006e133"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70007411891163, 36.65983518315312],
					[117.7000739355574, 36.65988876013516],
					[117.70010603824645, 36.65988862565692],
					[117.70010627398774, 36.6598352587972],
					[117.70007411891163, 36.65983518315312]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "e998c979-0bd0-4cf1-a07e-228ae59e8ec9",
		"properties": {
			"id": "e998c979-0bd0-4cf1-a07e-228ae59e8ec9",
			"resname": "设备间",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001006e536"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70011617336378, 36.65985827489722],
					[117.70011596905546, 36.659884687266015],
					[117.70015033485853, 36.65988463263422],
					[117.70015020389135, 36.65985841567911],
					[117.70011617336378, 36.65985827489722]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "5a0260c7-be5a-4752-8f82-b9d9996c69a0",
		"properties": {
			"id": "5a0260c7-be5a-4752-8f82-b9d9996c69a0",
			"resname": "一大队1#1谈话间",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b585"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.700116361957, 36.65983518455394],
					[117.70011617336378, 36.659858270694755],
					[117.70015022484544, 36.65985839886933],
					[117.70015007816224, 36.65983538627145],
					[117.700116361957, 36.65983518455394]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "37c1b253-375c-49e7-907e-7a65503fc9b0",
		"properties": {
			"id": "37c1b253-375c-49e7-907e-7a65503fc9b0",
			"resname": "一大队1#1储物间",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b592"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70036909729201, 36.65982851947223],
					[117.7003688248806, 36.65992952103316],
					[117.7003904082815, 36.65992951052705],
					[117.70038938149817, 36.659828506864926],
					[117.70036909729201, 36.65982851947223]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "b536421b-c105-4ccf-9713-813a2beb70e7",
		"properties": {
			"id": "b536421b-c105-4ccf-9713-813a2beb70e7",
			"resname": "一大队1#1约束间",
			"resbigtype": "房间",
			"restype": "禁闭室",
			"restypeid": "c60aa321-5bc6-4f7a-b508-986cd4b71cd5",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5b8"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.7003493160014, 36.6598287884289],
					[117.70034856162944, 36.659929546247795],
					[117.7003688248806, 36.65992952103316],
					[117.70036909729201, 36.65982851947223],
					[117.7003493160014, 36.6598287884289]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "017d16b5-670e-4bf5-bb98-53e1c5ee79ea",
		"properties": {
			"id": "017d16b5-670e-4bf5-bb98-53e1c5ee79ea",
			"resname": "一大队1#1寝室2",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5ba"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70017611968811, 36.65980950969792],
					[117.7001762314466, 36.65975891710177],
					[117.70019499643274, 36.65975887507726],
					[117.7001950418345, 36.65980952230524],
					[117.70017611968811, 36.65980950969792]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "229f0e89-9d1c-4094-b7f1-59813e4373fd",
		"properties": {
			"id": "229f0e89-9d1c-4094-b7f1-59813e4373fd",
			"resname": "一大队1#1办公区走廊",
			"resbigtype": "房间",
			"restype": "走道",
			"restypeid": "0106c863-f54c-41ec-821f-30f5c903165f",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b5bc"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70010571868606, 36.659930284476815],
					[117.70010654639916, 36.659795806211875],
					[117.70011668675545, 36.659795811815144],
					[117.70011559885434, 36.65993025926214],
					[117.70010571868606, 36.659930284476815]
				]
			]
		}
	}, {
		"type": "Feature",
		"id": "88f85724-17cb-40f5-aa40-ae4cd46a9f5a",
		"properties": {
			"id": "88f85724-17cb-40f5-aa40-ae4cd46a9f5a",
			"resname": "一大队1#1晾衣场",
			"resbigtype": "房间",
			"restype": "房间",
			"restypeid": "45ccaf8e-fe6d-11e2-bdf8-b7f26f85d876",
			"resparentid": "00000000-0000-1388-0000-000010030a14",
			"resid": "00000000-0000-1388-0000-00001004b596"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[
					[117.70038856600844, 36.65975842961744],
					[117.70039041351961, 36.65992951052705],
					[117.70041168347225, 36.65992949091566],
					[117.70041130017461, 36.659758439423115],
					[117.70038856600844, 36.65975842961744]
				]
			]
		}
	}]
}
export const Map: React.FC = () => {
	const mapInput = useRef(null)
	const sceneRef = useRef<any>()
	const drawRef = useRef<any>()
	const updateArea = (event: any) => {
		const map = sceneRef.current
		map.moveLayer('gl-draw-polygon-fill-static', 'maine')
		if (!drawRef.current) return
		const { current: draw } = drawRef
		const data = draw.getAll();
		const answer = document.getElementById('calculated-area') as HTMLElement;

		if (data.features.length > 0) {
			const area = turf.area(data);
			const rounded_area = Math.round(area * 100) / 100;
			answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
		} else {
			answer.innerHTML = '';
			if (event.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
		}
	}

	let fea: any, propertiesList: any = [];
	useEffect(() => {
		const mapDom: any = mapInput.current
		if (!mapDom) return
		const mapIns = new GetMap(mapDom)
		const mapbox = mapIns.map
		const mapDraw = mapIns.draw
		sceneRef.current = mapbox
		drawRef.current = mapDraw
		mapbox.on('zoom', (e) => {
			console.log("🚀 ~ file: index.tsx ~ line 16 ~ mapbox.on ~ e", e)
		})
		mapbox.on('dragend', (e) => {
			console.log("🚀 ~ file: index.tsx ~ line 21 ~ mapbox.on ~ e", e)
		})

		mapbox.on('click', (evt: any) => {
			console.log("🚀 ~ file: index.tsx ~ line 26 ~ mapbox.on ~ e", evt)
		})
		const getFilterPoint = (data: Record<string, any>) => {
			const floorData = JSON.parse(JSON.stringify(data))
			floorData.features.forEach((item: any, index: number) => {
				const pol = item.geometry.coordinates
				const polygon = turf.polygon(pol)
				const centers: any = turf.centerOfMass(polygon)
				floorData.features[index].geometry.coordinates = centers.geometry.coordinates
				floorData.features[index].geometry.type = 'Point'
			})
			return floorData
		}
		mapbox.on('load', (e) => {
			const filterData = getFilterPoint(data)

			mapbox.addLayer({
				'id': 'maine',
				'type': 'fill',
				'source': {
					'type': 'geojson',
					'data': data as any
				},
				'layout': {},
				'paint': {
					'fill-color': '#29323B',
				},
			}, 'floorBuildId');
			mapbox.addLayer({
				id: 'floorBuildId',
				type: 'line',
				source: {
					type: 'geojson',
					'data': data as any
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
			}, 'maine')
			mapbox.addLayer({
				id: 'floorBuildLineId',
				type: 'symbol',
				source: {
					type: 'geojson',
					data: filterData,
				},
				layout: {
					'icon-image': ['get', 'icon'],
					'text-field': ['get', 'resname'],
					'text-font': ['Open Sans Italic'],
					'text-offset': [0, 0.7],
					'text-anchor': 'top',
					'text-size': 12,
					'icon-allow-overlap': true,
					'icon-ignore-placement': true,
					'text-optional': true,
				},
				paint: { 'text-color': 'white' },
			}, 'floorBuildLineId')
		})
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
				document.getElementById("propertiesTableBox")?.appendChild(tabl)
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
	return (<Box width={1} height={1} position='relative'>
		<Box className='calculation-box' width={150} height={75} position='absolute'
			bottom={40} left={10} p={15} textAlign='center' color='red' zIndex={1}>
			<Typography>Draw a polygon using the draw tools</Typography>

			<Box id='calculated-area'></Box>
		</Box>
		<Box id='propertiesTableBox' position='absolute' top={0} right={0} bgcolor='white' zIndex={1}></Box>
		<div style={{
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			position: 'relative',
		}} id='map' ref={mapInput}></div>
	</Box>)
}