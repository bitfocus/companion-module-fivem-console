import {
	type CompanionButtonPresetDefinition,
	type CompanionTextPresetDefinition,
	type CompanionPresetDefinitions,
} from '@companion-module/base'
import type { FiveMInstance } from '../main.js'
import { type ActionCallbacks } from '../actions.js'
import { getGeneralPresets } from './generalPresets.js'
import { getNewDayRPPresets } from './newdayrpPresets.js'

export type PresetCategory = 'General' | 'NewDayRP'

interface FiveMButtonPresetAdditions {
	category: PresetCategory
	steps: {
		down: ActionCallbacks[]
		up: ActionCallbacks[]
	}[]
	feedbacks: []
}

interface FiveMTextPresetAdditions {
	category: PresetCategory
}

export type FiveMButtonPreset = CompanionButtonPresetDefinition & FiveMButtonPresetAdditions
export type FiveMTextPreset = CompanionTextPresetDefinition & FiveMTextPresetAdditions
export type FiveMPreset = FiveMButtonPreset | FiveMTextPreset
export type FiveMPresetArray = FiveMPreset[]

export function getPresets(_instance: FiveMInstance): CompanionPresetDefinitions {
	const presets: FiveMPresetArray = [...getGeneralPresets(), ...getNewDayRPPresets()]

	return presets as unknown as CompanionPresetDefinitions
}
