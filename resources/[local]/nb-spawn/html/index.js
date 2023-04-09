$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('https://nui2/exit', JSON.stringify({}));
            return
        }
    };
    $("#spawnAt_vwBowl").click(function () {
        $.post('https://nb-spawn/spawn:at_vwBowl', JSON.stringify({}));
        return
    })

    $("#spawnAt_casino").click(function () {
        $.post('https://nb-spawn/spawn:at_casino', JSON.stringify({}));
        return;
    })

    $("#spawnAt_sandyPD").click(function () {
        $.post('https://nb-spawn/spawn:at_sandyPD', JSON.stringify({}));
        return;
    })

    $("#spawnAt_mrpd").click(function () {
        $.post('https://nb-spawn/spawn:at_mrpd', JSON.stringify({}));
        return;
    })

    $("#spawnAt_altaApartments").click(function () {
        $.post('https://nb-spawn/spawn:at_altaApartments', JSON.stringify({}));
        return;
    })

    $("#spawnAt_pier").click(function () {
        $.post('https://nb-spawn/spawn:at_pier', JSON.stringify({}));
        return;
    })
})

function focus() {
    document.getElementById('container').focus()
}
