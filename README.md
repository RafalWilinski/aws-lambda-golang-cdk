[![GitHub version](https://badge.fury.io/gh/RafalWilinski%2Faws-lambda-golang-cdk.svg)](https://badge.fury.io/gh/RafalWilinski%2Faws-lambda-golang-cdk)
[![npm version](https://badge.fury.io/js/aws-lambda-golang.svg)](https://badge.fury.io/js/aws-lambda-golang)
[![NuGet version](https://badge.fury.io/nu/rwilinski.GolangFunction.svg)](https://badge.fury.io/nu/rwilinski.GolangFunction)
[![PyPI version](https://badge.fury.io/py/rwilinski.aws-lambda-golang.svg)](https://badge.fury.io/py/rwilinski.aws-lambda-golang)

## Amazon Lambda Golang Construct

This library provides constructs for Golang (Go 1.11 and 1.12 because of go modules) Lambda functions.

### Installing
In Typescript:

```sh
npm i aws-lambda-golang --save
# or using yarn
yarn add aws-lambda-golang
```

In .NET:
```sh
dotnet add package rwilinski.GolangFunction --version 0.1.0
```

In Python using Pip:
```sh
pip install rwilinski.aws-lambda-golang
```

In Java using Maven:
```sh
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
