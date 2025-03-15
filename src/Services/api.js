//const BASE_URL = "";
//const limit = 12;

export const getMovies = async () => {
    
    const response = await fetch(`https://api.sampleapis.com/movies/animation`);
    // if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const data = await response.json()
  
    return data
};



export const searchMovies = async (query) => {
    const response = await fetch(`https://api.sampleapis.com/movies/animation/?title=${query}`);
    const data = await response.json()
    return data
};