const baseUrl: string = process.env.NODE_ENV ===
"production" ? process.env.URL : process.env.URL;
// 'http://localhost:5000';

export default baseUrl;