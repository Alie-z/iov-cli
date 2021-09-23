/*
 * @file:
 * @Author: meijuntao@baidu.com
 * @Date: 2021-09-17 18:02:21
 * @Description:
 * @FilePath: /iov-cli/lib/util/loadRemotePreset.js
 */
const fs = require('fs-extra');

module.exports = async function fetchRemotePreset(name, clone = false) {
  const os = require('os');
  const path = require('path');
  const download = require('download-git-repo');
  // 生成临时目录, 方便后续中间件对其抓取下来的模板进行处理
  const tmpdir = path.resolve(os.tmpdir(), name.split('/')[1] || 'iov-cli');
  if (clone) {
    await fs.remove(tmpdir);
  }
  return new Promise((resolve, reject) => {
    download(name, tmpdir, { clone }, err => {
      if (err) {
        return reject(err);
      }
      return resolve(tmpdir);
    });
  });
};
