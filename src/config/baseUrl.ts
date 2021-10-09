const baseUrl: string = process.env.NODE_ENV ===
  "production" ? process.env.URL : process.env.URL;

export default baseUrl;