RegisterCommand('coords',()=>{
    const ped = PlayerPedId()    
    const playerCoords = GetEntityCoords(ped)
        console.log(playerCoords)
}, false)   