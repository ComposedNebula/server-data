local display = false
local ped = PlayerPedId()

print('started1')

AddEventHandler('spawn:spawned', function()
    SetDisplay(not display)
end)

RegisterCommand("nui", function(source, args)
    SetDisplay(not display)
end)


RegisterNUICallback("spawn:at_casino", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 918.709, 49.290, 80.898, true, true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_vwBowl", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 686.245, 577.95, 130.461, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_sandyPD", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 1855.885, 3682.255, 34.267, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_mrpd", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 427.719, -976.660, 30.709, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_altaApartments", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, -265.115, -964.426, 31.223, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_pier", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, -1647.103, -993.498, 13.017, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        -- https://runtime.fivem.net/doc/natives/#_0xFE99B66D079CF6BC
        --[[ 
            inputGroup -- integer , 
	        control --integer , 
            disable -- boolean 
        ]]
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)

cam = 0
    function doCamera(x,y,z)
    
        DoScreenFadeOut(1)
        if(not DoesCamExist(cam)) then
            cam = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
        end
    
        i = 3200
        SetFocusPosAndVel(x, y, z, 0.0, 0.0, 0.0)
        SetCamActive(cam,  true)
        RenderScriptCams(true,  false,  0,  true,  true)
        DoScreenFadeIn(1500)
        local camAngle = -90.0
        while i > 1 do
            local factor = i / 50
            if i < 1 then i = 1 end
            i = i - factor
            SetCamCoord(cam, x,y,z+i)
            if i < 1200 then
                DoScreenFadeIn(600)
            end
            if i < 90.0 then
                camAngle = i - i - i
            end
            SetCamRot(cam, camAngle, 0.0, 0.0)
            Citizen.Wait(2/i)
        end
    
    end

RegisterCommand("testspawn", function()
    doCamera(600,20,50)
    ClearFocus()
    DestroyAllCams(true)
    RenderScriptCams(false, true, 1, true, true)

end)