/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    MONGO_URI : 'mongodb+srv://Arte:Arte12345@cluster0.9cj4k.mongodb.net/?retryWrites=true&w=majority',
    MAPBOX_ACCESS_TOKEN : 'pk.eyJ1Ijoia2luZ3NhcmthcjMwMDYiLCJhIjoiY2w1cWRyZHg5MGQzdTNqcDhram5raGJwOSJ9.N8BlAygcBRf26AqUpHGxKA',
    MAPBOX_STYLE_URL : 'mapbox://styles/kingsarkar3006/cl5qe916a000w14kfmldtvbt9',
    GOOGLE_CLIENT_SECRET : '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',
    GOOGLE_CLIENT_ID: '672097393936-a5lncmtr5as71kf05o3pc80v9raqm1op.apps.googleusercontent.com'
  }
}

module.exports = nextConfig 
