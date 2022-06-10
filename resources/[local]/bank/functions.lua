RegisterNetEvent("bank:deposit")
AddEventHandler("bank:deposit", function (amount)
    print("attempting deposit", table.unpack(amount))
    
    MySQL.Async.execute("INSERT INTO bank (amount) VALUES (@amount)", {
        ["@amount"] = amount
    }, function(result)
        if (result) then
            print("worked")
        else
            print("error")
        end
    end)

end)

RegisterCommand("test123", function()
    print("adsd")
    
end, false)