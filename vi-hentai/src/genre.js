function execute() {
    let response = fetch("https://vi-hentai.com/#", {
        method : "GET"
    });

    const data = [];

    if (response.ok) {
        let doc = response.html(); 
        doc.select("ul.absolute a").forEach(e =>{
            data.push({
                title: e.select("li span").text().trim(),
                input: "https://vi-hentai.com/" + e.attr("href"),
                script: "gen.js"
            });
        });
    }

    return Response.success(data);
}