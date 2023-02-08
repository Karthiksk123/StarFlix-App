const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8c1ad76d32ce63ea9a569e3e1fbf0f1c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;