# AWS Infrastruce for parking meter api

## To be implemented: 

* Elastic Beanstalk for Spring Api

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
 * `aws dynamodb batch-write-item --request-items file://data.json` to upload the data into the DynamoDB instance 
 * `aws s3 cp path/to/bucket s3://bucket name` to upload file to s3 bucket (reverse to grab file from s3)