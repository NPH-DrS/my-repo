function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        var data = [];
        doc.select("ul.overflow-x-hidden a").forEach(e => {
            data.push({
                name: e.select("span").first().text(),
                url: "https://vi-hentai.com" + e.attr("href")
            });
        })
        return Response.success(data);
    }
    return null;
}