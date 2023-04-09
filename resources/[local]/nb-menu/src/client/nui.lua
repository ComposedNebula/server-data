local display = false
local ped = PlayerPedId()


function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

AddEventHandler("menu:open", function()
    SetDisplay(true)
end)

RegisterNUICallback("menu:close", function()
    SetDisplay(false)
end)