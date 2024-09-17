<div align="center">

# node-steam-library

Obtain the installation directory and application list of Steam through the Windows registry.

---

English | [简体中文](README.zh-CN.md)

[![Alt](https://repobeats.axiom.co/api/embed/560bbf7278f0bec27acffbc3a64fc11cfff02782.svg "Repobeats analytics image")](#)

</div>

## 📖 Introduction

> [!IMPORTANT]
> Only Windows.

Node module that interacts with the Steam installation on a user's system. This library provides utilities to get Steam
root path, retrieve Steam library information, and list installed apps.

## ⚙️ Installation

```bash
npm install @kabeep/node-steam-library --save
```

```bash
yarn add @kabeep/node-steam-library
```

```bash
pnpm add @kabeep/node-steam-library
```

## 🚀 Usage

CommonJS

```javascript
const steamLib = require('@kabeep/node-steam-library');
```

or ESModule

```javascript
import steamLib from '@kabeep/node-steam-library';
```

---

#### Methods: `getRootPath()`

Retrieve the installation path of Steam from the Windows registry.

```javascript
steamLib.getRootPath
    .then(console.log)
    .catch(console.error);
```

#### Returns: `Promise<string>`

---

#### Methods: `getLibrary()`

Retrieve the Steam library information.

```javascript
steamLib.getLibrary
    .then(console.log)
    .catch(console.error);
```

#### Returns: `Promise<SteamLibraryOption[]>`

**SteamLibraryOption:**

| Property | Type     | Description                | Example                        |
|----------|----------|----------------------------|--------------------------------|
| library  | `string` | Path to the library folder | `"G:\\path\\to\\SteamLibrary"` |
| id       | `string` | Apps ID                    | `"321"`                        |

---

#### Methods: `getApps()`

Retrieve all the application information of the Steam library.

```javascript
steamLib.getApps
    .then(console.log)
    .catch(console.error);
```

#### Returns: `Promise<SteamAppOption[]>`

**SteamAppOption:**

| Property    | Type     | Description       | Example                                                                                             |
|-------------|----------|-------------------|-----------------------------------------------------------------------------------------------------|
| id          | `number` | Apps ID           | `321`                                                                                               |
| name        | `string` | Apps name         | `"Counter-Strike: Global Offensive"`                                                                |
| installPath | `string` | Apps install path | `"G:\\path\\to\\SteamLibrary\\Counter-Strike: Global Offensive"`                                    |
| modPath     | `string` | Apps mod path     | `"G:\\path\\to\\SteamLibrary\\Counter-Strike: Global Offensive\\steamapps\\workshop\\content\\321"` |
| language    | `string` | Apps locale       | `"english"`                                                                                         |

## 🔗 Related

- [vdf](https://github.com/node-steam/vdf) - Module to convert Valve's KeyValue format to JSON and back.
- [node-winreg](https://github.com/fresc81/node-winreg) - node module that provides access to the Windows Registry
  through the REG commandline tool.

## 🤝 Contribution

Contributions via Pull Requests or [Issues](https://github.com/kabeep/node-steam-library/issues) are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
