load('config.js');
function execute(url, page) {
    if (!page) page = "0";

    let response = fetch(BASE_URL + url + `page/${page}`, {
        method : "GET"
    });

    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select("#post-list .col.post-item").forEach(e => {
          data.push({
            name: e.select(".box-text-inner .post-title a").text().trim(),
            link: e.select(".box-text-inner .post-title a").attr("href"),
            cover: e.select(".box-image img").attr("src"),
            host: BASE_URL
             })
       });


        var nextInt = parseInt(page);
        nextInt++;
        var next = nextInt.toString();
        if(next === "350"){
              return null;
        }
        return Response.success(data, next);
    }
    return null;
}

