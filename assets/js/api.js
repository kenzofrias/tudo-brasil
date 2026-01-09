
async function fetchNewsData(){
    const url = 'https://newsapi.org/v2/everything?domains=uol.com.br,globo.com,sbt.com.br,noticias.r7.com,rbatv.dol.com.br,cultura.uol.com.br,bbc.com,metropoles.com,ge.globo.com&language=pt&sortBy=publishedAt&apiKey=13a0cd4bd57344fb89bd3a6597576aac'
    const fetching = await fetch(url)
    return await fetching.json()
}