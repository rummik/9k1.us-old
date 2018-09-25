import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string = `${process.env.NODE_ENV}.env`) {
    const configFile: string = resolve(process.cwd(), filePath);
    const result: dotenv.DotenvResult = dotenv.config({ path: configFile });
    this.envConfig = result.parsed;
  }

  public get(key: string): string {
    return this.envConfig[key];
  }
}
