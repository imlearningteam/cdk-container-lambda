import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { LambdaContainerStack } from '../lib/lambda-container-stack';

test('Container Lambda Created', () => {
  const app = new cdk.App()
  // WHEN
  const stack = new LambdaContainerStack(app, 'MyTestStack', {
    env: {
      region: 'eu-west-1',
    },
  })
  // THEN

  const template = Template.fromStack(stack)

  template.resourceCountIs('AWS::Lambda::Function', 1)
  template.hasResource('AWS::IAM::Role', {
    Properties: {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com'
            }
          }
        ],
        Version: '2012-10-17'
      }
    }
  })
})
