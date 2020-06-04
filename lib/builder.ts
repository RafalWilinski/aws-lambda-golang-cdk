import { spawnSync } from 'child_process';
import * as path from 'path';

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
  readonly buildCmd: string;

  /**
   * The handler name, also name of compiled file, defaults to `main`
   */
  readonly handler: string;

  /**
   * Additional env variables
   */
  readonly extraEnv: string;
}

/**
 * Builder
 */
export class Builder {
  private readonly entry: string;
  private readonly outDir: string;
  private readonly buildCmd: string;
  private readonly handler: string;
  private readonly extraEnv: any;

  constructor(options: BuilderOptions) {
    this.entry = options.entry;
    this.outDir = options.outDir;
    this.buildCmd = options.buildCmd;
    this.handler = options.handler;
    this.extraEnv = options.extraEnv;
  }

  public build(): void {
    try {
      const cmd = `${this.buildCmd} -o ${this.outDir}/${this.handler} ${this.entry}`;
      const cwd = path.dirname(this.entry);

      spawnSync(cmd, {
        env: { ...process.env, GOOS: 'linux', ...this.extraEnv },
        shell: true,
        cwd,
      });
    } catch (err) {
    } finally {
    }
  }
}
