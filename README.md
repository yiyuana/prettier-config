# prettier-config

## 前言

记得先在 Visual Studio Code 编辑器安装并启用 Prettier 插件。

VSCode 内置的代码格式化工具可以指定为由 Prettier 接管，开启成功右下角会显示为 Prettier。

也可以在 settings.json 自行配置格式化触发机制：换行时格式化、保存文件时格式化、还是自行快捷键触发。

## 安装

```
yarn add @yiyuana/prettier-config -D
```

## 使用

### 方法一、修改 package.json

编辑 package.json 加上下面这一行

```
{
...
"prettier": "@saqqdy/prettier-config",
...
}
```

### 方法二、创建/修改本地.prettierrc.js 文件

编辑.prettierrc.js

```
module.exports = {
  ...require("@saqqdy/prettier-config"),
  singleQuote: true, // 开启单引号替换双引号
}
```
