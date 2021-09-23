const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const validateProjectName = require('validate-npm-package-name');

const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;

const { pauseSpinner } = require('../lib/util/spinner');
const Creator = require('./Creator');
const { clearConsole } = require('./util/clearConsole');
const { readTemplateJson } = require('./util/readTemplateData');

async function create(templateName, projectName, options) {
  console.log(
    '🚀 > create > templateName, projectName, options',
    templateName,
    projectName,
    options
  );
  // TODO options方便后续扩展
  // 项目模板白名单
  const templateGitRepoJson = readTemplateJson();
  // 校验模板是否存在
  if (!templateGitRepoJson[templateName]) {
    console.log(`  ` + chalk.red(`Unknown template name ${templateName}.`));
    program.outputHelp();
    return;
  }
  // 获取node进程的工作目录
  const cwd = process.cwd();
  // 判断是否是当前目录
  const inCurrentDir = projectName === '.';
  // 获取项目名(当前目录 or 指定的项目名)
  const name = inCurrentDir ? path.relative('../', cwd) : projectName;
  // 真正的目录地址
  const targetDir = path.resolve(cwd, projectName);
  // 校验项目名(包名)是否合法
  const validateResult = validateProjectName(name);
  if (!validateResult.validForNewPackages) {
    // 打印出错误以及警告
    console.error(chalk.red(`Invalid project name: "${name}"`));
    validateResult.errors &&
      validateResult.errors.forEach(error => {
        console.error(chalk.red.dim(`Error: ${error}`));
      });
    validateResult.warnings &&
      validateResult.warnings.forEach(warn => {
        console.error(chalk.red.dim(`Warning: ${warn}`));
      });
    process.exit(1);
  }
  if (fs.existsSync(targetDir)) {
    // TODO 可通过配置强制删除
    // 目录存在有两种情况: 1. 当前目录创建 2. 确实存在同名目录
    await clearConsole();
    if (inCurrentDir) {
      // 当前目录下创建给用户提示
      const { ok } = await inquirer.prompt([
        {
          name: 'ok',
          type: 'confirm',
          message: `Generate project in current directory?`
        }
      ]);
      if (!ok) {
        return;
      }
    } else {
      // 待创建目录已经存在
      const { action } = await inquirer.prompt([
        {
          name: 'action',
          type: 'list',
          message: `Target directory ${chalk.cyan(targetDir)}
            already exists. Pick an action:`,
          choices: [
            { name: 'Overwrite', value: 'overwrite' },
            {
              name: 'Merge',
              value: 'merge'
            },
            {
              name: 'Cancel',
              value: false
            }
          ]
        }
      ]);
      if (!action) {
        return;
      } else if (action === 'overwrite') {
        console.log(`\nRemoving ${chalk.cyan(targetDir)}...`);
        await exec(`rm -rf ${targetDir}`);
      }
    }
  }

  // 目录不存在
  process.env.EASY_CLI_TEMPLATE_NAME = templateName;
  const creator = new Creator(name, targetDir);
  await creator.create(options);
}

module.exports = (templateName, projectName, ...args) => {
  return create(templateName, projectName, ...args).catch(err => {
    pauseSpinner();
    console.error(err);
    process.exit(1);
  });
};
