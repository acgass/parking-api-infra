import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3')


export class StorageStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const dataBucket = new s3.Bucket(this, 'dataStore', {
      versioned: true,
      bucketName: "parking-data-file-storage"
    });
  }
}
