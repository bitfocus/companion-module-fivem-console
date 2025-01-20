import { combineRgb } from '@companion-module/base'
import { type FiveMPresetArray } from './presets.js'

export const getNewDayRPPresets = (): FiveMPresetArray => {
	const generalPresets: FiveMPresetArray = [
		{
			category: 'NewDayRP',
			name: 'Connect',
			type: 'button',
			style: {
				text: 'Connect',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'connect ndrp.gg' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'Radio',
			type: 'text',
			text: 'Secondary Radio Channels',
		},
		{
			category: 'NewDayRP',
			name: 'Tracker',
			type: 'button',
			style: {
				text: 'Tracker',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tactracker' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'Clear',
			type: 'button',
			style: {
				text: 'Clear',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac1',
			type: 'button',
			style: {
				text: 'Tac 1',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 1' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac2',
			type: 'button',
			style: {
				text: 'Tac 2',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 2' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac3',
			type: 'button',
			style: {
				text: 'Tac 3',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 3' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac4',
			type: 'button',
			style: {
				text: 'Tac 4',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 4' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac5',
			type: 'button',
			style: {
				text: 'Tac 5',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 5' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac6',
			type: 'button',
			style: {
				text: 'Tac 6',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 6' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac7',
			type: 'button',
			style: {
				text: 'Tac 7',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 7' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac8',
			type: 'button',
			style: {
				text: 'Tac 8',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 8' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac9',
			type: 'button',
			style: {
				text: 'Tac 9',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 9' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
		{
			category: 'NewDayRP',
			name: 'tac10',
			type: 'button',
			style: {
				text: 'Shared',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: 'tac 10' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
	]

	return generalPresets
}
