exports.handler = async (event) => {
    const params = new URLSearchParams(event.queryStringParameters);
    const name = params.get("name") || "Bạn";
    const type = params.get("type") || "1";

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: `
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="theme-color" content="#000000">
            <meta property="og:site_name" content="thiepcuoihalanh">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Kính mời - ${name}">
            <meta property="og:image" content="https://res.cloudinary.com/dwbo7yhs1/image/upload/v1741097916/zqrndycqeriayvzl7rkt.jpg">
            <meta property="og:description" content="Chúng tôi rất vui mừng khi sắp bước sang một chương mới của cuộc đời. Sự hiện diện của quý khách trong ngày trọng đại này sẽ là niềm vinh hạnh lớn đối với vợ chồng tôi. Rất mong quý khách sắp xếp thời gian đến chung vui và chúc phúc cùng gia đình tôi. Xin cảm ơn mọi người rất nhiều!">
            <meta property="og:url" content="https://thiepcuoilanhha.netlify.app/.netlify/functions/meta?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}">
            <title>❤️❤️❤️ Thiệp cưới Lành & Hà ❤️❤️❤️</title>
    <style>
        body {
            position: relative;
            background-color: #595265;

        }

        .cardthiep {
            height: 100%;
            display: flex;

        }

        .anhthiep {
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
        }

        .colthiep {
            padding-top: 10px;
        }

        .btn-container {
            position: absolute;
            bottom: 0;
            display: flex;
            width: 100%;
            justify-content: center;
            padding: 10px;
            background-color: #474050;
        }

        @media (max-width: 768px) {
            .cardthiep {
                display: block;
            }

            .colthiep {
                padding: 10px !important;
            }

        }

        @media (min-width: 1200px) {
            body {
                height: 100vh;
            }s
        }
    </style>
        </head>
        <body>
            <div class="container cardthiep">
                <div class="col-md-6 col-12 colthiep">
                    <img class="anhthiep" id="bia" style="width:100% ; height:90%" src="https://hoangduy2502.github.io/hanhphuclanhha/img/1.png" />
                </div>
                <div class="col-md-6 col-12 colthiep">
                    <canvas class="anhthiep" id="weddingCanvas" style="width:100% ; height:90%"></canvas>
                </div>

            </div>
            <div class="btn-container">
                <button class="btn btn-secondary" style="background-color: #212529;    font-size: 15px;
            width: 170px;
            font-weight: 600;
            border-radius: 50px !important;" onclick="changeHome()">Thông tin cưới</button>
            </div>
        </body>

        </html>
         <script>
                const urlParams = new URLSearchParams(window.location.search);
                const type = urlParams.get('type') || "1";
                const nameUrl = urlParams.get('name') || "Bạn";

                const canvas = document.getElementById("weddingCanvas");
                const bia = document.getElementById("bia");
                const ctx = canvas.getContext("2d");
                const img = new Image();
                img.src = "https://hoangduy2502.github.io/hanhphuclanhha/img/4.png";

                if (type === "2") {
                    img.src = "https://hoangduy2502.github.io/hanhphuclanhha/img/3.png";
                    bia.src = "https://hoangduy2502.github.io/hanhphuclanhha/img/2.png";
                }

                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    // Thêm text lên ảnh
                    ctx.font = "80px Serif";
                    ctx.fillStyle = "brown";
                    ctx.fillText(nameUrl, 450, 940);
                };

                function changeHome(){
                    window.location.assign(\`https://hoangduy2502.github.io/hanhphuclanhha/home.html?name=\${encodeURIComponent(nameUrl)}&type=\${encodeURIComponent(type)}\`);
                }
            </script>
        `,
    };
};
