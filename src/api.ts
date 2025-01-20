import net from 'net'
import struct from 'python-struct'
import { InstanceStatus } from '@companion-module/base'
import type { FiveMInstance } from './main.js'

export class API {
	instance: FiveMInstance
	connection: net.Socket | null = null
	reconnectTimout: NodeJS.Timeout | null = null
	reconnectCount = 0
	lastStatus: InstanceStatus = InstanceStatus.Disconnected

	constructor(instance: FiveMInstance) {
		this.instance = instance
	}

	public init = (): void => {
		if (!this.instance.config.host) {
			this.instance.log('warn', 'Please set the host in the module config')
			return
		}

		this.connection = net.createConnection({ host: this.instance.config.host, port: this.instance.config.port })

		this.connection.on('connect', () => {
			if (this.lastStatus !== InstanceStatus.Ok) {
				this.instance.updateStatus(InstanceStatus.Ok)
			}

			if (this.reconnectCount > 5) {
				this.instance.log('info', 'Connected')
			}

			this.reconnectCount = 0
		})

		this.connection.on('error', (err) => {
			if (this.reconnectCount > 5) {
				this.instance.updateStatus(InstanceStatus.ConnectionFailure, err.message)
				this.instance.log('error', err.message)
			}
		})

		this.connection.on('close', () => {
			if (this.reconnectCount > 5) {
				this.instance.updateStatus(InstanceStatus.ConnectionFailure, 'Connection closed')
				this.reconnectTimout = setTimeout(this.init, 2000)
			} else {
				this.reconnectCount++
				this.init()
			}
		})
	}

	public destroy = (): void => {
		if (this.reconnectTimout) clearTimeout(this.reconnectTimout)
		this.connection?.destroy()
	}

	public sendCommand = (command: string): void => {
		this.instance.log('debug', `Sending command: ${command}`)
		const initialData = Buffer.from([0x43, 0x4d, 0x4e, 0x44, 0x00, 0xd2, 0x00, 0x00])
		const endian = Buffer.from(struct.pack('!h', command.length + 13))
		const padding = Buffer.from([0x0, 0x0])
		const cmd = Buffer.from(command + '\n', 'utf8')
		const terminator = Buffer.from([0x00])
		const fin = Buffer.concat([initialData, endian, padding, cmd, terminator])

		this.connection?.write(fin)
	}
}
