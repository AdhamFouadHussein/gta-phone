local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
  cb({})
end)
RegisterNUICallback('showFrame', function(_, cb)
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
  cb({})
end)
RegisterNUICallback('spawnCar', function(data, cb)
  debugPrint('Data sent by React', json.encode(data))

  local model = data.model
  local coords = GetEntityCoords(PlayerPedId())
  local heading = GetEntityHeading(PlayerPedId())

  RequestModel(model)
  while not HasModelLoaded(model) do
    Wait(500)
  end

  local vehicle = CreateVehicle(model, coords.x, coords.y, coords.z, heading, true, false)
  SetVehicleOnGroundProperly(vehicle)
  SetEntityAsMissionEntity(vehicle, true, true)
  SetVehicleNumberPlateText(vehicle, 'ABO DOMA CARS')

  cb({})
end)


RegisterNUICallback('getGallery', function(data, cb)
  print('getGallery callback triggered')
  debugPrint('Data sent by React', json.encode(data))
  local QBCore = exports['qb-core']:GetCoreObject()
  local citizenid = QBCore.Functions.GetPlayerData().citizenid
  data.UserID = citizenid
  print('Citizen ID Data', data.UserID)
  TriggerServerEvent('fivem-react-boilerplate-lua:getGallery', data)

end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendGallery')
AddEventHandler('fivem-react-boilerplate-lua:sendGallery', function(gallery)
  if not gallery or #gallery == 0 then
    print('No gallery data received')
  else
    print('Received gallery data from server event fivem-react-boilerplate-lua:sendGallery')
    print('Gallery data:', json.encode(gallery))
    SendNUIMessage({
      type = 'GALLERY',
      payload = gallery
    })
    print('Sent NUI message with gallery data')
  end
end)

RegisterNUICallback('delGalleryImg', function(data, cb)
  print('delGalleryImg callback triggered')
  debugPrint('Data sent by React', json.encode(data))
  local QBCore = exports['qb-core']:GetCoreObject()
  data.UserID = QBCore.Functions.GetPlayerData().citizenid
  TriggerServerEvent('fivem-react-boilerplate-lua:delGalleryImg', data)
  cb({ status = 'ok' })
end)



