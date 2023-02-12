const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const {
  S3Client,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand
} = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")

const region = process.env.AWS_BUCKET_REGION
const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  }
})

exports.deleteAwsS3Object = async key => {
  const bucketParams = { Bucket: bucketName, Key: key }
  try {
    const command = new DeleteObjectCommand(bucketParams)
    const data = await s3Client.send(command)
    return data
  } catch (err) {
    console.log(errorLog("Error in deleting AWS object:"), mainErrorLog(err))
  }
}
exports.deleteManyAwsS3Object = async arrayOfkey => {
  let ArrayOfKeyObject = arrayOfkey.map(key => {
    return {
      Key: key
    }
  })
  const bucketParams = {
    Bucket: "BUCKET_NAME",
    Delete: {
      Objects: ArrayOfKeyObject
    }
  }
  try {
    const command = new DeleteObjectCommand(bucketParams)
    const data = await s3Client.send(command)
    return data
  } catch (err) {
    console.log(
      errorLog("Error in deleting Many AWS objects:"),
      mainErrorLog(err)
    )
  }
}

exports.signedUrlForGetAwsS3Object = async key => {
  const bucketParams = { Bucket: bucketName, Key: key }
  try {
    const command = new GetObjectCommand(bucketParams)
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 60 // in seconds(1 hour)
    })
    return signedUrl
  } catch (err) {
    console.log(
      errorLog("Error in creating Signed Url for getting AWS object:"),
      mainErrorLog(err)
    )
  }
}
exports.signedUrlForPutAwsS3Object = async key => {
  const bucketParams = { Bucket: bucketName, Key: key }
  try {
    const command = new PutObjectCommand(bucketParams)
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 60 // in seconds (1 hour)
    })
    return signedUrl
  } catch (err) {
    console.log(
      errorLog("Error in creating Signed Url for putting AWS object:"),
      mainErrorLog(err)
    )
  }
}
