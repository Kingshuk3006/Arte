/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    MONGO_URI : 'mongodb+srv://Arte:Arte12345@cluster0.9cj4k.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig 
