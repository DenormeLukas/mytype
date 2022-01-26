{

    let i = 0;

    function hover() {

        $(".hover").hover(
            function () {
                $(this).addClass("hovered");

            }
        )

    }

    function deleteClass() {
        let timer = setInterval(function () {
            $(".hovered").removeClass("hovered");
        }, 4000);
    }

    const init = () => {

        hover();
        deleteClass();

    }

    init();

}
