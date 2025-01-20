import type { CompanionActionEvent, SomeCompanionActionInputField } from '@companion-module/base'
import type { FiveMInstance } from './main.js'

export interface FiveMConsoleActions {
	sendCommand: FiveMConsoleAction<SendCommandCallback>

	[key: string]: FiveMConsoleAction<any>
}

interface SendCommandCallback {
	actionId: 'sendCommand'
	options: Readonly<{
		command: string
	}>
}

export type ActionCallbacks = SendCommandCallback

// Force options to have a default to prevent sending undefined values
type InputFieldWithDefault = Exclude<SomeCompanionActionInputField, 'default'> & {
	default: string | number | boolean | null
}

// Actions specific to FiveMConsole
export interface FiveMConsoleAction<T> {
	name: string
	description?: string
	options: InputFieldWithDefault[]
	callback: (action: Readonly<Omit<CompanionActionEvent, 'options' | 'id'> & T>) => void | Promise<void>
	subscribe?: (action: Readonly<Omit<CompanionActionEvent, 'options' | 'id'> & T>) => void
	unsubscribe?: (action: Readonly<Omit<CompanionActionEvent, 'options' | 'id'> & T>) => void
}

export function getActions(instance: FiveMInstance): FiveMConsoleActions {
	return {
		sendCommand: {
			name: 'Send Command',
			options: [
				{
					type: 'textinput',
					label: 'Command',
					tooltip: 'Command to be sent to console',
					id: 'command',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action) => {
				const command = await instance.parseVariablesInString(action.options.command)

				instance.API.sendCommand(command)
			},
		},
	}
}
