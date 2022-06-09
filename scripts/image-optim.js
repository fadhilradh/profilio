#!/usr/bin/env node
const { spawnSync } = require('child_process')
const glob = require('glob')

const pngFiles = glob.sync('public/**/*.png')

pngFiles.forEach(squooshImage)

function squooshImage(fileLocation) {
  const folderLocation = fileLocation.split('/').slice(0, -1).join('/')
  spawnSync(
    'npx',
    [
      'squoosh-cli',
      '--oxipng',
      `'{"level": 2, "interlace": false}'`,
      '-d',
      folderLocation,
      fileLocation,
    ],
    {
      stdio: 'inherit',
    }
  )
}
