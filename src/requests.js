//수많은 API 주소들을 여기에 모아놓음
const API_KEY = `05fd93d479e2957992e63239fd142a82`;

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
}

export default requests;