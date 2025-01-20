import { combineRgb } from '@companion-module/base'
import { type FiveMPresetArray } from './presets.js'

export const getGeneralPresets = (): FiveMPresetArray => {
	const generalPresets: FiveMPresetArray = [
		{
			category: 'General',
			name: 'Send Command',
			type: 'button',
			style: {
				text: 'Send\\nCommand',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'sendCommand', options: { command: '' } }],
					up: [],
				},
			],
			feedbacks: [],
		},
	]

	return generalPresets
}
