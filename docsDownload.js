const fs = require("fs")
const path = require("path")
const shell = require("shelljs")

const MAIN_FOLDER = path.join(__dirname)
const SCRAPED_DOCS_FOLDER = path.join(MAIN_FOLDER, "docs")
const TEMP_FOLDER = path.join(MAIN_FOLDER, "temp")

// TODO: Change this name when merged.
const UNZIPPED_HYPERAPP = path.join(TEMP_FOLDER, "hyperapp-feature-docs-update")
const TEMP_DOCS = path.join(UNZIPPED_HYPERAPP, "docs")
const PROJECT_README = path.join(UNZIPPED_HYPERAPP, "README.md")
const NEW_DOCS = path.join(MAIN_FOLDER, "docs")

// TODO: Change this to the normal master zip when merged.
const HYPERAPP_ZIP =
  "https://github.com/eschaefer/hyperapp/archive/feature/docs-update.zip"

shell.echo("Grabbing Hyperapp docs...")
shell.mkdir(TEMP_FOLDER)
shell.cd(TEMP_FOLDER)
shell.exec(`curl -L ${HYPERAPP_ZIP} -o docs-update.zip`)
shell.exec(`unzip -o docs-update.zip`)
shell.mv("-f", TEMP_DOCS, MAIN_FOLDER)
shell.mv("-f", PROJECT_README, NEW_DOCS)
shell.rm("-rf", TEMP_FOLDER)
