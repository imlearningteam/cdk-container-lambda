#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { LambdaContainerStack } from '../lib/lambda-container-stack';

const app = new cdk.App()

new LambdaContainerStack(app, 'LambdaContainerStack', {
  env: { region: 'eu-west-1' },
});
