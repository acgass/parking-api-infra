#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ParkingApiInfraStack } from '../lib/parking-api-infra-stack';
import { StorageStack } from '../lib/storage-stack';

const app = new cdk.App();
new ParkingApiInfraStack(app, 'dev');
new StorageStack(app, 'storage');
