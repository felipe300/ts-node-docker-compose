import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { AppDataSource } from './data.source'

export abstract class ConfigServer {
  constructor () {
    const nodeNameEnvironment = this.createPathEnvironment(this.nodeEnvironment)
    dotenv.config({
      path: nodeNameEnvironment
    })
  }

  public getEnvironment (key: string): string | undefined {
    return process.env[key]
  }

  public getNumberEnvironment (key: string) : number {
    return Number(this.getEnvironment(key))
  }

  public get nodeEnvironment (): string {
    return this.getEnvironment('NODE_ENV')?.trim() || ''
  }

  public createPathEnvironment (path: string): string {
    const arrEnvironment: Array<string> = ['env']

    if (path.length > 0) {
      const strToArr = path.split('.')
      arrEnvironment.unshift(...strToArr)
    }

    return `.${arrEnvironment.join('.')}`
  }

  get initConnect (): Promise<DataSource> {
    return AppDataSource.initialize()
  }
}
