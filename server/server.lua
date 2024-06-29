RegisterServerEvent('fivem-react-boilerplate-lua:addPost')
AddEventHandler('fivem-react-boilerplate-lua:addPost', function(post, user)
    print('Server event fivem-react-boilerplate-lua:addPost invoked')
    print('Received post data:', post.ImageURL)
    print('Received user data:', user.UserID)
    exports.ghmattimysql:execute('INSERT INTO phone_ig_posts (UserID, ImageURL, Caption, Location) VALUES (@user, @imageURL, @caption, @location)', {
        ['@user'] = user.UserID,
        ['@imageURL'] = post.ImageURL,
        ['@caption'] = post.Caption,
        ['@location'] = post.Location
    }, function(result)
        if result then
            print('Post added successfully')
        else
            print('Failed to add post')
        end
    end)
end)


RegisterServerEvent('fivem-react-boilerplate-lua:getGallery')
AddEventHandler('fivem-react-boilerplate-lua:getGallery', function(data)
  print('Server event fivem-react-boilerplate-lua:getGallery invoked')
  print('Data received:', json.encode(data))

  local source = source -- Get the server ID of the client that triggered the event

  exports.ghmattimysql:execute('SELECT * FROM phone_gallery WHERE citizenid = @citizenid', { ['@citizenid'] = data.UserID, }, function(result)
    if result then
      print('Query executed successfully')
      print('Query result:', json.encode(result))
      TriggerClientEvent('fivem-react-boilerplate-lua:sendGallery', source, result) -- Send the event to the correct client
      print('Sent gallery data to client')
    else
      print('Failed to execute query')
    end
  end)
end)


RegisterServerEvent('fivem-react-boilerplate-lua:delGalleryImg')
AddEventHandler('fivem-react-boilerplate-lua:delGalleryImg', function(data)
  print('Server event fivem-react-boilerplate-lua:delGalleryImg invoked')
  print('Data received:', json.encode(data))

  local source = source -- Get the server ID of the client that triggered the event

  exports.ghmattimysql:execute('DELETE FROM phone_gallery WHERE citizenid = @citizenid AND id = @id', { ['@citizenid'] = data.UserID, ['@id'] = data.id, }, function(result)
    if result then
      print('Query executed successfully')
      print('Query result:', json.encode(result))
      TriggerClientEvent('fivem-react-boilerplate-lua:galleryImgDeleted', source) -- Send the event to the correct client
      print('Sent galleryImgDeleted event to client')
    else
      print('Failed to execute query')
    end
  end)
end)