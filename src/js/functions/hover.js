{
    function hover() {

        $(".hover").hover(
            function () {
                $(this).addClass("hovered");
            }
        )

    }

    const init = () => {

        hover();

    }

    init();

}
