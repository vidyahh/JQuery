$(document).ready(function(){
    let offset = {offset:"80%"}
    $(".table_of_content_title").waypoint(function(){
        // console.log("Reach to top");
        $(".table_of_content_title").addClass("animate__animated animate__fadeInLeft");
    },offset);

    $("#intro").waypoint(function(){
        console.log("Reach to top");
        $("#intro").addClass("animate__animated animate__fadeInLeft");
    },offset);

    $("#history").waypoint(function(){
        // console.log("Reach to top");
        $("#history").addClass("animate__animated animate__fadeInLeft");
    },offset);

    $("#features").waypoint(function(){
        // console.log("Reach to top");
        $("#features").addClass("animate__animated animate__fadeInLeft");
    },offset);
    $(".para").waypoint(function(){
        // console.log("Reach to top");
        $(".para").addClass("animate__animated animate__fadeInRight");
    },offset);

    $(".article_image").waypoint(function(){
        // console.log("Reach to top");
        $(".article_image").addClass("animate__animated animate__zoomIn");
    },offset);

    $(".article").waypoint(function(){
        // console.log("Reach to top");
        $(".article_image").addClass("animate__animated animate__fadeInLeft");
    },offset);

    
    $(".ol").waypoint(function(){
        // console.log("Reach to top");
        $(".ol").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".ul").waypoint(function(){
        // console.log("Reach to top");
        $(".ul").addClass("animate__animated animate__fadeInRight");
    },offset);

    $(".list_link_1").waypoint(function(){
        // console.log("Reach to top");
        $(".list_link_1").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".list_link_2").waypoint(function(){
        // console.log("Reach to top");
        $(".list_link_2").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".list_link_3").waypoint(function(){
        // console.log("Reach to top");
        $(".list_link_3").addClass("animate__animated animate__fadeInRight");
    },offset);




});