<hr>
<p>
  <a><img src="https://img.shields.io/github/issues/Alie-z/iov-cli.svg" /></a>
  <a><img src="https://img.shields.io/github/forks/Alie-z/iov-cli.svg"  /></a>
  <a><img src="https://img.shields.io/github/stars/Alie-z/iov-cli.svg"  /></a>
  <a><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" /></a>
  <a><img src="https://img.shields.io/badge/build-passing-green.svg" /></a>
  <a><img src="https://img.shields.io/npm/v/iov-cli.svg" /></a>
</p>
<hr>

# iov-cli

一个快速上手的百度车联网小程序脚手架, 轻松创建项目模板, 实现 0 配置, 快速开发。

## Features

## Installation & Quick start

### 安装

Windows 系统安装

```
$ npm i iov-cli -g
```

Mac 下安装

```
$ sudo npm i iov-cli -g
```

### 查看帮助信息

```
$ iov
```

### 创建项目

```
# 指定项目名字创建项目
$ iov create 模板名<template-name> 项目名字<project-name>

# 在当前目录创建项目
$ iov create 模板名<template-name> .
```

### 查看所有支持的项目模板

```
$ iov list
```

### 添加项目模板

```
$ iov add 模板名<template-name> 模板github仓库地址,支持ssh/https格式<git-repo-address>
```

### 删除项目模板

```
$ iov delete 模板名<template-name>
```

### 发布到 npm

执行 pkg 下的脚本, 自动发版并且生成 changelog, travis 就会执行检测后续自动发到 npm.

```
npm run release
```

### 查看全局 npm

```
npm ls --global
```

### 卸载全局 npm

````
npm rm --global xxx
```

## Changelog

[Changelog](https://github.com/Alie-z/iov-cli/blob/master/CHANGELOG.md)

## TODOLIST

- 优化 iov-swan 模板
- 提供可选项配置
````
