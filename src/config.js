const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-buckets",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://e4jfq8hdyk.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_DucffXDn0",
      APP_CLIENT_ID: "rrj1bqfraarm4fees03fapg6a",
      IDENTITY_POOL_ID: "us-east-1:eb89e28f-ff60-42cb-a990-d72a993058a3",
    },
  };
  
  export default config;