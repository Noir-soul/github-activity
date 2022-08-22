$(document).ready(function() {
    // Request data
    $.ajax({
        url: 'portfolio.json',
        type: 'GET',
        success: function(response) {
            const name = response.data.name
            const description = response.data.description
            $(".person1-content").text(name)
            $(".description1").text(description)
        }
    })

    // ANIMATIONS HERE
    $("#person2").hide()
    $("#person3").hide()
    $("#person4").hide()
    $("#goto-person2").on('click', function () {
        $("#person1").hide(500)
        $("#person2").show(500)
        $("#person3").hide(500)
        $("#person4").hide(500)
    })

    $("#goto-person3").on('click', function () {
        $("#person1").hide(500)
        $("#person2").hide(500)
        $("#person3").show(500)
        $("#person4").hide(500)
    })

    $("#goto-person4").on('click', function () {
        $("#person1").hide(500)
        $("#person2").hide(500)
        $("#person3").hide(500)
        $("#person4").show(500)
    })

    $("#goto-person1").on('click', function () {
        $("#person1").show(500)
        $("#person2").hide(500)
        $("#person3").hide(500)
        $("#person4").hide(500)
    })

    
})
