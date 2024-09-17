<div align="center">

# node-steam-library

通过 Windows 注册表获取 Steam 的安装目录和应用列表。

---

[English](README.md) | 简体中文

[![Alt](https://repobeats.axiom.co/api/embed/560bbf7278f0bec27acffbc3a64fc11cfff02782.svg "Repobeats analytics image")](#)

</div>

## 📖 简介

> [!IMPORTANT]
> 仅支持 Windows 系统。

提供实用程序从注册表中获取用户安装 Steam 的根路径，检索 Steam 库信息和已安装的应用程序。

## ⚙️ 安装

```bash
npm install @kabeep/node-steam-library --save
```

```bash
yarn add @kabeep/node-steam-library
```

```bash
pnpm add @kabeep/node-steam-library
```

## 🚀 使用

通过 CommonJS

```javascript
const steamLib = require('@kabeep/node-steam-library');
```

或者 ESModule

```javascript
import steamLib from '@kabeep/node-steam-library';
```

---

#### 函数: `getRootPath()`

从 Windows 注册表中检索 Steam 的安装路径。

```javascript
steamLib.getRootPath
    .then(console.log)
    .catch(console.error);
```

#### 返回: `Promise<string>`

---

#### 函数: `getLibrary()`

检索 Steam 库信息。

```javascript
steamLib.getLibrary
    .then(console.log)
    .catch(console.error);
```

#### 返回: `Promise<SteamLibraryOption[]>`

**SteamLibraryOption:**

| Property | Type     | Description | Example                        |
|----------|----------|-------------|--------------------------------|
| library  | `string` | 应用所在磁盘路径    | `"G:\\path\\to\\SteamLibrary"` |
| id       | `string` | 应用 ID       | `"321"`                        |

---

#### 函数: `getApps()`

检索 Steam 库的所有应用程序信息。

```javascript
steamLib.getApps
    .then(console.log)
    .catch(console.error);
```

#### 返回: `Promise<SteamAppOption[]>`

**SteamAppOption:**

| Property    | Type     | Description | Example                                                                                             |
|-------------|----------|-------------|-----------------------------------------------------------------------------------------------------|
| id          | `number` | 应用 ID       | `321`                                                                                               |
| name        | `string` | 应用名称        | `"Counter-Strike: Global Offensive"`                                                                |
| installPath | `string` | 应用安装路径      | `"G:\\path\\to\\SteamLibrary\\Counter-Strike: Global Offensive"`                                    |
| modPath     | `string` | 应用模组路径      | `"G:\\path\\to\\SteamLibrary\\Counter-Strike: Global Offensive\\steamapps\\workshop\\content\\321"` |
| language    | `string` | 应用环境语言      | `"english"`                                                                                         |

## ❌ Error Codes

```javascript
steamLib.getApps()
    .then(console.log)
    .catch((err) => {
        // string
        console.log(err.code);
    });
```

#### EUNKNOWN

> 不属于任何特定类别的未知错误

#### EREGISTRY

> 与注册表操作有关的错误，例如无法从Windows注册表中读取。

#### ELIBRARY

> 与Steam库操作相关的错误，例如查找或解析Steam库文件夹的问题。

#### EMANIFEST

> 与清单文件相关的错误，例如丢失或格式错误的Steam清单文件。

## 🔗 关联库

- [vdf](https://github.com/node-steam/vdf) - 用于 Valve 的键值对与 JSON 相互转换的模块。
- [node-winreg](https://github.com/fresc81/node-winreg) - 通过 REG 命令行工具提供对 Windows 注册表访问的 NodeJS 模块。

## 🤝 贡献

欢迎通过 Pull Requests 或 [Issues](https://github.com/kabeep/node-steam-library/issues) 来贡献你的想法和代码。

## 📄 许可

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
