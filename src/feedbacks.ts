import type { FiveMInstance } from './main.js'
import {
	type CompanionAdvancedFeedbackResult,
	type CompanionFeedbackButtonStyleResult,
	type CompanionFeedbackAdvancedEvent,
	type CompanionFeedbackBooleanEvent,
	type SomeCompanionFeedbackInputField,
	type CompanionFeedbackContext,
} from '@companion-module/base'

export interface FiveMConsoleFeedbacks {
	// Index signature
	[key: string]: FiveMConsoleFeedback<any>
}

// Callback type for Presets
export type FeedbackCallbacks = ''

// Force options to have a default to prevent sending undefined values
type InputFieldWithDefault = Exclude<SomeCompanionFeedbackInputField, 'default'> & {
	default: string | number | boolean | null
}

// FiveMConsole Boolean and Advanced feedback types
interface FiveMConsoleFeedbackBoolean<T> {
	type: 'boolean'
	name: string
	description: string
	style: Partial<CompanionFeedbackButtonStyleResult>
	options: InputFieldWithDefault[]
	callback: (
		feedback: Readonly<Omit<CompanionFeedbackBooleanEvent, 'options' | 'type'> & T>,
		context: CompanionFeedbackContext,
	) => boolean | Promise<boolean>
	subscribe?: (feedback: Readonly<Omit<CompanionFeedbackBooleanEvent, 'options' | 'type'> & T>) => boolean
	unsubscribe?: (feedback: Readonly<Omit<CompanionFeedbackBooleanEvent, 'options' | 'type'> & T>) => boolean
}

interface FiveMConsoleFeedbackAdvanced<T> {
	type: 'advanced'
	name: string
	description: string
	options: InputFieldWithDefault[]
	callback: (
		feedback: Readonly<Omit<CompanionFeedbackAdvancedEvent, 'options' | 'type'> & T>,
		context: CompanionFeedbackContext,
	) => CompanionAdvancedFeedbackResult
	subscribe?: (
		feedback: Readonly<Omit<CompanionFeedbackAdvancedEvent, 'options' | 'type'> & T>,
	) => CompanionAdvancedFeedbackResult
	unsubscribe?: (
		feedback: Readonly<Omit<CompanionFeedbackAdvancedEvent, 'options' | 'type'> & T>,
	) => CompanionAdvancedFeedbackResult
}

export type FiveMConsoleFeedback<T> = FiveMConsoleFeedbackBoolean<T> | FiveMConsoleFeedbackAdvanced<T>

export function getFeedbacks(_instance: FiveMInstance): FiveMConsoleFeedbacks {
	return {}
}
