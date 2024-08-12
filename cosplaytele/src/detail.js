load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let genres = [];
        doc.select(".entry-category a").forEach(e => {
            genres.push({
                title: e.text(),
                input: "category/" + e.attr("href").split("/")[4] + "/",
                script: "gen.js"
            });
        });

        const contentElement = doc.select("blockquote");
        const cosplayerName = contentElement.select("p strong a").text().trim();
        const characterName = contentElement.select("p strong:nth-child(3)").text().trim();
        const photosLine = contentElement.select("p:nth-child(2) strong:nth-child(1)").text().trim();
        const fileSize = contentElement.select("p:nth-child(2) strong:nth-child(3)").text().trim();

        return Response.success({
            name: doc.select("title").first().text(),
            cover: doc.select('meta[property="og:image"]').first().attr("content"),
            author: contentElement.select("p strong:nth-child(5) a").text().trim(),
            genres,
            detail: `Cosplayer: ${cosplayerName})<br>${characterName}<br>${photosLine}<br>${fileSize}`,
            description: doc.select('meta[property="og:image"]').first().attr("content"),
            host: BASE_URL,
        });
    }
    return null;
}