import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as path from 'path';

export class LambdaContainerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'helloWorldFunction', {
      functionName: 'helloWorldFunction',
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../lambda'), {
        cmd: ["helloWorld.handler"],
        entrypoint: ["/lambda-entrypoint.sh"],
      }),
    });
  }
}
