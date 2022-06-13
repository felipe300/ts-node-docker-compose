import * as dotenv from 'dotenv'
import { DataSourceOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import * as path from 'path'

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
    return Number(process.env[key])
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

  public get typeORMConfig (): DataSourceOptions {
    return {
      type: 'mysql',
      host: this.getEnvironment('DB_HOST'),
      port: this.getNumberEnvironment('DB_PORT'),
      username: this.getEnvironment('DB_USER'),
      password: this.getEnvironment('DB_PASSWORD'),
      database: this.getEnvironment('DB_DATABASE'),
      entities: [path.resolve(__dirname, '../**/*.entity{.ts,.js}')],
      migrations: [path.resolve(__dirname, '../../migrations/*{.ts,.js}')],
      synchronize: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy()
    }
  }
}
