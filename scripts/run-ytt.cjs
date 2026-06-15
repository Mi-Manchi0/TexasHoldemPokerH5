const path = require('node:path')

process.env.TS_NODE_IGNORE_DIAGNOSTICS = [
  process.env.TS_NODE_IGNORE_DIAGNOSTICS,
  '5107',
].filter(Boolean).join(',')

const { run } = require('@f_anaan/ytt/lib/cjs/cli')

const args = process.argv.slice(2)
const configIndex = args.findIndex((arg) => arg === '-c' || arg === '--config')
const command = args.find((arg, index) => {
  if (arg.startsWith('-')) return false
  return index !== configIndex + 1
})
const configFile =
  configIndex >= 0 && args[configIndex + 1]
    ? path.resolve(process.cwd(), args[configIndex + 1])
    : path.resolve(process.cwd(), 'ytt.config.ts')

run(command, { configFile }).catch((error) => {
  console.error(error)
  process.exitCode = 1
})
