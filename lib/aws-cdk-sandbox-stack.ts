import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigw from '@aws-cdk/aws-apigateway';

export class AwsCdkSandboxStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });
  }
}