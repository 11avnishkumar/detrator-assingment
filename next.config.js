/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI:
      "mongodb+srv://mainUser:Jh7zB9xeF8xrQPQR@cluster0.7srat.mongodb.net/detrator?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "AERSVGEDT",
  },
};

module.exports = nextConfig;
