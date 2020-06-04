[![npm version](https://badge.fury.io/js/aws-lambda-golang.svg)](https://badge.fury.io/js/aws-lambda-golang)

## Amazon Lambda Golang Construct

This library provides constructs for Golang (Go 1.11 and 1.12 because of go modules) Lambda functions.

### Installing
In Typescript:

```sh
npm i aws-lambda-golang --save
# or using yarn
yarn add aws-lambda-golang
```

### Usage
In Typescript:

```ts
import * as golang from 'aws-lambda-golang';

...

new golang.GolangFunction(this, 'my-handler');
```

By default, the construct will use the name of the defining file and the construct's id to look
up the entry file:
```
.
├── stack.ts # defines a 'GolangFunction' with 'my-handler' as id
├── stack/my-handler/main.go 
├── stack/my-handler/go.mod 
├── stack/my-handler/go.sum 
```

### Configuring build

The `GolangFunction` construct exposes some options via properties: `buildCmd`, `buildDir`, `entry` and `handler`, `extraEnv`.

By default, your Golang code is compiled using `go build -ldflags="-s -w"` command with `GOOS=linux` env variable.

Project sponsored by [Dynobase](https://dynobase.dev)
