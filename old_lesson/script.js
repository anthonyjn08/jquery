$(document).ready(function () {
    $("#stream1_btn").on(function () {
        $(".stream1").hide();
        $(".stream1").hide('slow');
        $(".stream1").hide('medium');
        $(".stream1").hide('fast');
        $(".stream1").hide(1000);
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
        $("h2").on("hover")
    });
});