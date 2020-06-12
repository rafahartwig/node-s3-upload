# s3-upload
Teste de criaçao de pacote para fazer upload de arquivos no drive s3 da amazon utilizando nodeJS. (Apenas com intuito educanional)

https://www.npmjs.com/package/@rafa.hartwig/s3-upload

npm i @rafa.hartwig/s3-upload

```
require('@rafa.hartwig/s3-upload')
config = {
            accessKeyId: 'xxxxxxxxxxxxxx', //KEY ID from AWS
            secretAccessKey: 'xxxxxxxxxxxxxx', // Secret Acess key from AWS
            bucket: 'xxxxxx', // Bucket name
            region: 'xxxxxx', // Region from bucket
            key: xxxxx, // File name you want to save as in S3
            body: data // File data
        }

uploadFile(config)
```
