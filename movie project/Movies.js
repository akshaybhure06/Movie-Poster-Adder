const movieUrl = document.getElementById('url');
const movieName = document.getElementById('name')
const mainDiv = document.getElementById('main');
function addMovie ()
{
    const mDiv = document.createElement('div');
    mDiv.classList.add('movie')
    const mImg = document.createElement('img');
    mImg.src = movieUrl.value
    mImg.alt = movieName.value;
    const mName = document.createElement('h2');
    mName.textContent = movieName.value
    mDiv.append(mImg, mName)
    mainDiv.appendChild(mDiv);
    movieUrl.value = '';
    movieName.value='';
    mImg.height="200";
    mImg.width="150";
    mImg.alt="image"
}
