import { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: Config = {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  // "rootDir": "src",
  "testRegex": ".*\\.spec\\.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
  "coverageDirectory": "../coverage",
  "testEnvironment": "node",
  //esse moduleMapper converte os paths para o formato que o jest entende.
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/' //local raiz da aplicação.
  })
}
export default config;