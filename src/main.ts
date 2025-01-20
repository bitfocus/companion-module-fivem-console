import {
	InstanceBase,
	runEntrypoint,
	type SomeCompanionConfigField,
	type CompanionFeedbackDefinitions,
} from '@companion-module/base'
import { GetConfigFields, type ModuleConfig } from './config.js'
import { UpdateVariableDefinitions } from './variables.js'
import { UpgradeScripts } from './upgrades.js'
import { getActions } from './actions.js'
import { getFeedbacks } from './feedbacks.js'
import { API } from './api.js'
import { getPresets } from './presets/presets.js'

export class FiveMInstance extends InstanceBase<ModuleConfig> {
	config!: ModuleConfig
	API: API

	constructor(internal: unknown) {
		super(internal)

		this.API = new API(this)
		this.log('debug', `PID: ${process.pid}`)
	}

	async init(config: ModuleConfig): Promise<void> {
		this.config = config

		this.updateActions()
		this.updateFeedbacks()
		this.updateVariableDefinitions()
		this.setPresetDefinitions(getPresets(this))
		this.API.init()
	}

	async destroy(): Promise<void> {
		this.log('debug', 'destroy')
	}

	async configUpdated(config: ModuleConfig): Promise<void> {
		this.config = config
	}

	getConfigFields(): SomeCompanionConfigField[] {
		return GetConfigFields()
	}

	updateActions(): void {
		const actions = getActions(this)
		this.setActionDefinitions(actions)
	}

	updateFeedbacks(): void {
		const feedbacks = getFeedbacks(this) as CompanionFeedbackDefinitions
		this.setFeedbackDefinitions(feedbacks)
	}

	updateVariableDefinitions(): void {
		UpdateVariableDefinitions(this)
	}
}

runEntrypoint(FiveMInstance, UpgradeScripts)
