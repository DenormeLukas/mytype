export function switchImages() {

    let images = ["conservative.png", "progressive.png"];
    $(function () {
        let i = 0;
        $("#fullscreen").css("background-image", "url(assets/img/" + images[i] + ")");
        setInterval(function () {

            $("#fullscreen").fadeOut("fast", function () {
                if (i == 0) {
                    $(this).css("background-image", "url(assets/img/" + images[i] + ")");
                    $(this).css("background-color", "#2700FF");
                    $(this).fadeIn("fast");
                    i = 1;

                } else {
                    $(this).css("background-image", "url(assets/img/" + images[i] + ")");
                    $(this).css("background-color", "white");
                    $(this).fadeIn("fast");
                    i = 0;
                }

            });
        }, 4000);
    });

    let images2 = ["modernart1.jpg", "modernart2.jpg"];
    $(function () {
        let i = 0;
        $("#modern-art").css("background-image", "url(assets/img/" + images2[i] + ")");
        setInterval(function () {

            $("#modern-art").fadeOut("fast", function () {
                if (i == 0) {
                    $(this).css("background-image", "url(assets/img/" + images2[i] + ")");
                    $(this).css("background-color", "#2700FF");
                    $(this).fadeIn("fast");
                    i = 1;

                } else {
                    $(this).css("background-image", "url(assets/img/" + images2[i] + ")");
                    $(this).css("background-color", "white");
                    $(this).fadeIn("fast");
                    i = 0;
                }

            });
        }, 4000);
    });


}
