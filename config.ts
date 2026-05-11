import fs from 'fs';
import path from 'path';

export interface TestConfig {
  URL: string;
  Email: string;
  password: string;
}

const configPath = path.resolve(__dirname, 'config.json');
const rawConfig = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(rawConfig) as TestConfig;

export default config;
