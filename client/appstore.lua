RegisterNUICallback('appstore', function(data, cb)
    if data.action == 'getApps' then
        local apps = {}
        for k, v in pairs(Config.Apps) do
            table.insert(apps, {
                id = v.id,
                name = v.name,
                description = v.description,
                downloads = v.downloads,
                icon = v.icon,
                path = v.path,
                installed = v.installed,
                rate = v.rate,
                image = v.image,
            })
        end
        --print(json.encode(apps))
        cb(json.encode(apps))
    end
end)

----  elseif data.action == 'buyApp' then
--local src = source
--local xPlayer = ESX.GetPlayerFromId(src)
--local app = Config.Apps[data.app]
--if app then
 --   if xPlayer.getMoney() >= app.price then
 --       xPlayer.removeMoney(app.price)
--        xPlayer.addInventoryItem(app.app, 1)
--        cb(true)
 --   else
 --       cb(false)
  --  end
--else
 --   cb(false)
--end
--end)    