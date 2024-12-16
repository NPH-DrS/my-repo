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

        return Response.success({
            name: doc.select("title").first().text(),
            cover: doc.select('.gallery-item img').first().attr("src"),
            author: "cosplaytele",
            genres,
            detail: doc.select("blockquote").text(),
            host: BASE_URL,
        });
    }
    return null;
}