import { spawnSync } from 'child_process';
import * as path from 'path';

const ConfigDefaults = {
  buildCmd: 'go build -ldflags="-s -w"',
  handler: 'main',
};

/**
 * Builder options
 */
export interface BuilderOptions {
  /**
   * Entry file
   */
  readonly entry: string;

  /**
   * The output directory
   */
  readonly outDir: string;

  /**
   * The output directory
   */
  readonly buildCmd?: string;

  /**
   * The handler name, also name of compiled file, defaults to `main`
   */
  readonly handler?: string;
}

/**
 * Builder
 */
export class Builder {
  private readonly entry: string;
  private readonly outDir: string;
  private readonly buildCmd: string;
  private readonly handler: string;

  constructor(private readonly options: BuilderOptions) {
    this.entry = options.entry;
    this.outDir = options.outDir;
    this.buildCmd = options.buildCmd || ConfigDefaults.buildCmd;
    this.handler = options.handler || ConfigDefaults.handler;
  }

  public build(): void {
    try {
      const cmd = `${this.buildCmd} -o ${this.outDir}/${this.handler} ${this.entry}`;
      const cwd = path.dirname(this.entry);

      spawnSync(cmd, {
        env: { ...process.env, GOOS: 'linux' },
        shell: true,
        cwd,
      });
    } catch (err) {
    } finally {
    }
  }
}
