function execute() {
    return Response.success([
        {
            title: "Trang chủ", 
            input: "https://vi-hentai.com/danh-sach?", 
            script: "gen.js"
        },
        {
            title: "Truyện mới", 
            input: "https://vi-hentai.com/danh-sach?sort=-created_at&", 
            script: "gen.js"
        },
        {
            title: "Xem nhiều", 
            input: "https://vi-hentai.com/danh-sach?sort=-views&", 
            script: "gen.js"
        },
        {
            title: "Truyện cũ", 
            input: "https://vi-hentai.com/danh-sach?sort=created_at&", 
            script: "gen.js"
        },
        {
            title: "A-Z", 
            input: "https://vi-hentai.com/danh-sach?sort=name&", 
            script: "gen.js"
        },
        {
            title: "Z-A", 
            input: "https://vi-hentai.com/danh-sach?sort=-name&", 
            script: "gen.js"
        }
    ]);
}