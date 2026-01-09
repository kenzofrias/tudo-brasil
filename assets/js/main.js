// const loadMoreButton = document.getElementById('loadMoreButton')
const newsContainer = document.getElementById('site-container')
const tamanhoPagina = 100;
let pagina = 1;


async function updateNews(NewsData, tamanhoPagina, pagina){

    const listNews = NewsData.articles.map((article) => {
        return `
                <li>
                    <a href="${article.url ? article.url : '#'}" class="news-link" target="_blank" alt="${article.title}">
                        <div class="data-news">
                            <img src="${article.urlToImage ? article.urlToImage : 'assets/imgs/foto-noticia.png'}" alt="Foto Notícia" class="image">
                            <div class="infos">
                                <span class="author">${article.source.name ? article.source.name : 'Fonte não disponível'}</span>
                            <h3 class="title">${article.title ? article.title : 'Título não disponível'}</h3>
                        </div>
                    </div>
                    <p class="description">
                        <i class="fa-solid fa-circle-info"></i>
                        ${article.description ? article.description : 'Descrição não disponível'}
                    </p>
                </a>
            </li> 
        `
    }).join('')

    newsContainer.innerHTML = `
        <ul class="news">
            ${listNews}
        </ul>`
}

(async () => {
    const newsData = await fetchNewsData(tamanhoPagina, pagina);
    updateNews(newsData, tamanhoPagina, pagina)
})();