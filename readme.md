# Xpresser Esm Examples

A collection of examples to help you get started with XpresserJs Esm Framework.

## Installation

- clone this repo
- run `npm install` to install dependencies
- check `exaamples` folder for samples



## Examples
All examples are written in typescript.

The **watch** keyword is applied to all examples to enable auto-reload on file changes. 

- [Basic Example](#basic-example)
- [Cli Example](#cli-example)
- [Express Http Server Example](#express-http-server-example)
- [Node Http Server Example](#node-http-server-example)
- [Module Example](#module-example)
- [Plugin](#plugin-examples)
  - [File Based Plugin](#file-based-plugin)
  - [Inline Plugin](#inline-plugin)


### Basic Example
The basic usage of XpresserJs with only the Cli Module registered.
To run the cli module you can add the `cli` keyword after the file path.

```bash
npx tsx watch examples/basic.ts
```

### Cli Example
The Cli Module is set as default and used to create a simple cli command.

```bash
npx tsx watch examples/cli.ts
```

### Express Http Server Example
- Express Server Module is registered.
- Support with xpresser router handler.
- Support with express router handler.

```bash
npx tsx watch examples/express-http-server.ts
```

### Node Http Server Example
- Node Server Module is registered.
- Support with xpresser router handler.
- Support with express router handler.

```bash
npx tsx watch examples/node-http-server.ts
```

### Module Example
This example shows how to create a module using a sample `ScrabbleGame` module.

```bash
npx tsx examples/module.ts
```

## Plugin Examples
This example shows how to create the two types of plugin supported by XpresserJs.

- **File Based Plugin**
- **Inline Plugin**

The file-based plugin folder is located in `examples/demo-plugin` folder.

### File Based Plugin
```bash
npx tsx watch examples/plugin.ts
```

### Inline Plugin
```bash
npx tsx watch examples/plugin-inline.ts
```





