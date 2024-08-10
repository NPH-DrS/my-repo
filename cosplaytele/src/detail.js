load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        
         const contentElement = doc.select("blockquote"); // Assuming the content is within a blockquote element

         let stt = "";
         const cosplayerName = cosplayerLink.text().trim();
         const photosLine = contentElement.select("p:nth-child(2) strong:nth-child(1)").text().trim();
         stt += `Cosplayer: ${cosplayerName}. ${photosLine}.`;
        
        return Response.success({
            name: doc.select("title").first().text(),
            cover: doc.select('meta[property="og:image"]').first().attr("content"),
            author: 'CosplayTele',
            description: stt,
            host: BASE_URL,
        });
    }
    return null;
}