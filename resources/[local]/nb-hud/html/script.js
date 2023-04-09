$(function () {
    function doLongHudText(message, type, duration = 1000){
        const alertContainer = document.querySelector("[data-alert-container]")
        const alert = document.createElement('div')
        if (type === 'normal') {
            alert.style.backgroundColor = 'hsl(204, 53%, 58%)'
        } else if (type === 'urgent') {
            alert.style.backgroundColor = 'red'
        }
        alert.textContent = message
        alert.classList.add('alert')
        alertContainer.prepend(alert)
        if(duration === null) return
        
        setTimeout(()=>{
            alert.classList.add('hide')
            alert.addEventListener('transitionend', ()=>{
                alert.remove()
            })
        }, duration)
        
    }
    
    window.addEventListener('message', function(event) {
        var item = event.data;
        
        $.post(' https://random-data-api.com/api/stripe/random_stripe', JSON.stringify({}))
    })
    
})



function doLongHudText(message, duration = 1000){
    const alertContainer = document.querySelector("[data-alert-container]")
    const alert = document.createElement('div')
    alert.textContent = message
    alert.classList.add('alert')
    alertContainer.prepend(alert)
    if(duration === null) return
    
    setTimeout(()=>{
        alert.classList.add('hide')
        alert.addEventListener('transitionend', ()=>{
            alert.remove()
        })
    }, duration)
    
}



