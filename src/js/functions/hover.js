export function hover() {

    $(".hover").hover(
        function () {
            $(this).addClass("hovered");

        }
    )

}

export function deleteClass() {
    let timer = setInterval(function () {
        $(".hovered").removeClass("hovered");
    }, 4000);
}


