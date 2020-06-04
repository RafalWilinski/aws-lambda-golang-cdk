#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestStackStack } from '../lib/test-stack-stack';

const app = new cdk.App();
new TestStackStack(app, 'TestStackStack');
