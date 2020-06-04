import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as golang from 'aws-lambda-golang';
export class TestStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const backend = new golang.GolangFunction(this, 'test-function');
    const api = new apigateway.LambdaRestApi(this, 'myapi', {
      handler: backend,
      proxy: false,
    });

    const items = api.root.addResource('items');
    items.addMethod('GET');
  }
}
