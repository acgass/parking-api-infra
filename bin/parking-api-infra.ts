#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ParkingApiInfraStack } from '../lib/parking-api-infra-stack';

const app = new cdk.App();
new ParkingApiInfraStack(app, 'dev');
