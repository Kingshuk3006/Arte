/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    MONGO_URI : 'mongodb+srv://Arte:Arte12345@cluster0.9cj4k.mongodb.net/?retryWrites=true&w=majority',
    MAPBOX_ACCESS_TOKEN : 'pk.eyJ1Ijoia2luZ3NhcmthcjMwMDYiLCJhIjoiY2w1cWRyZHg5MGQzdTNqcDhram5raGJwOSJ9.N8BlAygcBRf26AqUpHGxKA',
    MAPBOX_STYLE_URL : 'mapbox://styles/kingsarkar3006/cl5qe916a000w14kfmldtvbt9',
  }
}

module.exports = nextConfig 
