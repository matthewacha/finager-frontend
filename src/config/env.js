/**
 This file sets the environment variables for development, production and testing
*/ 

export const env = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    discoveryDocs: process.env.REACT_APP_GOOGLE_API_DISCOVERY_DOCS,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: "profile email",
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET
}