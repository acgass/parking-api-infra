import * as cdk from '@aws-cdk/core';
import dynamodb = require('@aws-cdk/aws-dynamodb');

export class ParkingApiInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const tableName = 'parkingMeters'
    const dynamoTable = new dynamodb.Table(this, 'parkingMeters', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.NUMBER
      },
      tableName: tableName,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
    });
  }
}
