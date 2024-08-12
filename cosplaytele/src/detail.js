load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        const contentElement = doc.select("blockquote");

        let stt = "";

        const cosplayerLink = contentElement.select("p.gt-block strong a").attr("href");
        const cosplayerName = contentElement.select("p.gt-block strong a").text().trim();
        stt += `Cosplayer: ${cosplayerName} <br>(Link: ${cosplayerLink})`;

        const appearInLink = contentElement.select("p.gt-block strong:nth-child(3) a").attr("href");  // Optional for "Appear In" field
        const appearIn = contentElement.select("p.gt-block strong:nth-child(3)").text().trim();
        if (appearIn) {
            stt += `<br>Appear In: ${appearIn} <br>(Link: ${appearInLink})\n`;  // Include link if available
        }

        const photosLine = contentElement.select("p:nth-child(2) strong:nth-child(1)").text().trim();
        stt += `<br>${photosLine}.`;

        const fileSize = contentElement.select("p:nth-child(2) strong:nth-child(2)").text().trim();
        stt += `File Size: ${fileSize}\n`;

        return Response.success({
            name: doc.select("title").first().text(),
            cover: doc.select('meta[property="og:image"]').first().attr("content"),
            author: 'CosplayTele',
            detail: stt,
            host: BASE_URL,
        });
    }
    return null;
}