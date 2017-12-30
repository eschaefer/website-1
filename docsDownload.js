const fs = require("fs")
const path = require("path")
const shell = require("shelljs")

const MAIN_FOLDER = path.join(__dirname)
const TEMP_FOLDER = path.join(MAIN_FOLDER, "temp")

const UNZIPPED_HYPERAPP = path.join(TEMP_FOLDER, "hyperapp-master")
const TEMP_DOCS = path.join(UNZIPPED_HYPERAPP, "docs")
const PROJECT_README = path.join(UNZIPPED_HYPERAPP, "README.md")
const NEW_DOCS = path.join(MAIN_FOLDER, "docs")

const NEW_README = path.join(NEW_DOCS, "README.md");
const NEW_SUMMARY = path.join(NEW_DOCS, "SUMMARY.md");

const HYPERAPP_ZIP =
  "https://github.com/hyperapp/hyperapp/archive/master.zip"

const SUMMARY_HEAD = '# Summary';
const README_HEAD = '* [Read Me](README.md)'

shell.echo("Grabbing Hyperapp docs...")
shell.mkdir(TEMP_FOLDER)
shell.cd(TEMP_FOLDER)
shell.exec(`curl -L ${HYPERAPP_ZIP} -o hyperapp-master.zip`)
shell.exec(`unzip -o hyperapp-master.zip`)
shell.mv("-f", TEMP_DOCS, MAIN_FOLDER)

shell.cp(NEW_README, NEW_SUMMARY);
shell.exec(`sed -i -e 1,2d ${NEW_SUMMARY}`);
shell.exec(`sed -i '1i ${README_HEAD}' ${NEW_SUMMARY}`);
shell.exec(`sed -i '1i ${SUMMARY_HEAD}' ${NEW_SUMMARY}`);

shell.mv("-f", PROJECT_README, NEW_DOCS)
shell.rm("-rf", TEMP_FOLDER)
