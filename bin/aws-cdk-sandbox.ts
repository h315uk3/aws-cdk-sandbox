#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsCdkSandboxStack } from '../lib/aws-cdk-sandbox-stack';

const app = new cdk.App();
new AwsCdkSandboxStack(app, 'AwsCdkSandboxStack');
