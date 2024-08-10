function execute() {
    let response = fetch("https://cosplaytele.com/best-cosplayer", {
        method : "GET"
    });

    const data = [
        {title: "Nude", input: "category/nude/", script: "gen.js"},
        {title: "Ero", input: "category/no-nude/", script: "gen.js"},
    ];

    if (response.ok) {
        let doc = response.html(); 
        doc.select(".row#row-436914883 .col").forEach(col => {
               const titleElement = col.select(".text a").first();
               const title = titleElement.text().trim();
               const link = titleElement.attr("href");

               data.push({
                    title,
                    input: "category/" + link.split("/")[4] + "/",
                    script: "gen.js"
                   });
         });
         
        doc.select(".row#row-354351331 .col").forEach(col => {
               const titleElement = col.select(".text a").first();
               const title = titleElement.text().trim();
               const link = titleElement.attr("href");

               if(title != ""){
               data.push({
                    title,
                    input: "category/" + link.split("/")[4] + "/",
                    script: "gen.js"
                   });
              }
         });
    }

    return Response.success(data);
}