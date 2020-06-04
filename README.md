## Amazon Lambda Golang Construct

This library provides constructs for Golang Lambda functions.

### Golang Function
Define a `GolangFunction`:

```ts
new lambda.GolangFunction(this, 'my-handler');
```

By default, the construct will use the name of the defining file and the construct's id to look
up the entry file:
```
.
├── stack.ts # defines a 'GolangFunction' with 'my-handler' as id
├── stack/my-handler/main.go 
```
