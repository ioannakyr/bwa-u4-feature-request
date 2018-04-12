const clientId='83874682aee647caad07983711bfe3c3';
const redirectUri = 'http://localhost:3000/';
let accessToken;
let expiresIn;
const userId = '';


const Spotify = {

  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }
    const accessTokenUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiresInUrl = window.location.href.match(/expires_in=([^&]*)/);
    if(accessTokenUrl && expiresInUrl) {
      accessToken = accessTokenUrl[1];
      expiresIn = expiresInUrl[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  }

  search(term) {

  }

}

export default Spotify;
