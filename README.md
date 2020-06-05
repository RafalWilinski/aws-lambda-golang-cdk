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

In Java using Maven, add this to `pom.xml`:
```xml
<dependency>
  <groupId>com.rwilinski</groupId>
  <artifactId>aws-lambda-golang</artifactId>
  <version>0.1.1</version>
</dependency>
```

### Usage
In Typescript:

```ts
import * as golang from 'aws-lambda-golang'; // Import aws-lambda-golang module
import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class TestStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define function. Source code should be located in ./test-function/main.go
    const backend = new golang.GolangFunction(this, 'test-function');
    const api = new apigateway.LambdaRestApi(this, 'myapi', {
      handler: backend,
      proxy: false,
    });

    const items = api.root.addResource('items');
    items.addMethod('GET');
  }
}
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

The simplest Golang function (`stack/my-handler/main.go`): 

```go
package main

import (
	"fmt"
	"net/http"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println("Received body: ", req.Body)

	return events.APIGatewayProxyResponse{
        StatusCode: http.StatusOK,
        Body:       "Hello from CDK GolangFunction!",
    }, nil
}

func main() {
	lambda.Start(handler)
}
```

### Configuring build

The `GolangFunction` construct exposes some options via properties: `buildCmd`, `buildDir`, `entry` and `handler`, `extraEnv`.

By default, your Golang code is compiled using `go build -ldflags="-s -w"` command with `GOOS=linux` env variable.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/RafalWilinski/aws-lambda-golang-cdk/issues).

Project sponsored by [Dynobase](https://dynobase.dev)
