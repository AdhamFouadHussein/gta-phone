RegisterNUICallback('getUser', function(data,cb)
    print('getUser callback triggerd')
    TriggerServerEvent('fivem-react-boilerplate-lua:getUser', data)
    cb({})
end)


RegisterNUICallback('addPost', function(data, cb)
    debugPrint('Data sent by React', json.encode(data))
  
    local post = data.post
    local user = data.user
    local QBCore = exports['qb-core']:GetCoreObject()
    ---local citizenid = QBCore.Functions.GetPlayerData().citizenid
    ---data.user.UserID = citizenid
    print('Citizen ID Data', data.user.UserID)
    TriggerServerEvent('fivem-react-boilerplate-lua:addPost', post, user)
    cb({})
end)


RegisterNUICallback('getPosts', function(data, cb)
    print('getPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendPosts')
AddEventHandler('fivem-react-boilerplate-lua:sendPosts', function(posts)
    if not posts or #posts == 0 then
        print('No posts data received')
    else
        print('Received posts data from server event fivem-react-boilerplate-lua:sendPosts')
        print('Posts data:', json.encode(posts))
        SendNUIMessage({
            type = 'POSTS',
            payload = posts
        })
        print('Sent NUI message with posts data')
    end
end)

RegisterNUICallback('followUser', function(data, cb)
    print('followUser callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:followUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:followUser')
AddEventHandler('fivem-react-boilerplate-lua:followUser', function(follow)
    print('Received follow data from server event fivem-react-boilerplate-lua:followUser')
    print('Follow data:', json.encode(follow))
    SendNUIMessage({
        type = 'FOLLOW',
        payload = follow
    })
    print('Sent NUI message with follow data')
end)

RegisterNUICallback('unfollowUser', function(data, cb)
    print('unfollowUser callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:unfollowUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:unfollowUser')
AddEventHandler('fivem-react-boilerplate-lua:unfollowUser', function(unfollow)
    print('Received unfollow data from server event fivem-react-boilerplate-lua:unfollowUser')
    print('Unfollow data:', json.encode(unfollow))
    SendNUIMessage({
        type = 'UNFOLLOW',
        payload = unfollow
    })
    print('Sent NUI message with unfollow data')
end)

RegisterNUICallback('getFollows', function(data, cb)
    print('getFollows callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getFollows', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendFollows')
AddEventHandler('fivem-react-boilerplate-lua:sendFollows', function(follows)
    if not follows or #follows == 0 then
        print('No follows data received')
    else
        print('Received follows data from server event fivem-react-boilerplate-lua:sendFollows')
        print('Follows data:', json.encode(follows))
        SendNUIMessage({
            type = 'FOLLOWS',
            payload = follows
        })
        print('Sent NUI message with follows data')
    end
end)

RegisterNUICallback('getFollowers', function(data, cb)
    print('getFollowers callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getFollowers', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendFollowers') 
AddEventHandler('fivem-react-boilerplate-lua:sendFollowers', function(followers)
    if not followers or #followers == 0 then
        print('No followers data received')
    else
        print('Received followers data from server event fivem-react-boilerplate-lua:sendFollowers')
        print('Followers data:', json.encode(followers))
        SendNUIMessage({
            type = 'FOLLOWERS',
            payload = followers
        })
        print('Sent NUI message with followers data')
    end
end)

RegisterNUICallback('likePost', function(data, cb)
    print('likePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:likePost', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:likePost')
AddEventHandler('fivem-react-boilerplate-lua:likePost', function(like)
    print('Received like data from server event fivem-react-boilerplate-lua:likePost')
    print('Like data:', json.encode(like))
    SendNUIMessage({
        type = 'LIKE',
        payload = like
    })
    print('Sent NUI message with like data')
end)

RegisterNUICallback('unlikePost', function(data, cb)
    print('unlikePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:unlikePost', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:unlikePost')
AddEventHandler('fivem-react-boilerplate-lua:unlikePost', function(unlike)
    print('Received unlike data from server event fivem-react-boilerplate-lua:unlikePost')
    print('Unlike data:', json.encode(unlike))
    SendNUIMessage({
        type = 'UNLIKE',
        payload = unlike
    })
    print('Sent NUI message with unlike data')
end)



RegisterNUICallback('addComment', function(data, cb)
    print('addComment callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:addComment', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendComment')
AddEventHandler('fivem-react-boilerplate-lua:sendComment', function(comment)
    print('Received comment data from server event fivem-react-boilerplate-lua:sendComment')
    print('Comment data:', json.encode(comment))
    SendNUIMessage({
        type = 'COMMENT',
        payload = comment
    })
    print('Sent NUI message with comment data')
end)

RegisterNUICallback('getComments', function(data, cb)
    print('getComments callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getComments', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendComments')
AddEventHandler('fivem-react-boilerplate-lua:sendComments', function(comments)
    if not comments or #comments == 0 then
        print('No comments data received')
    else
        print('Received comments data from server event fivem-react-boilerplate-lua:sendComments')
        print('Comments data:', json.encode(comments))
        SendNUIMessage({
            type = 'COMMENTS',
            payload = comments
        })
        print('Sent NUI message with comments data')
    end
end)

RegisterNUICallback('getLikes', function(data, cb)
    print('getLikes callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getLikes', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendLikes')
AddEventHandler('fivem-react-boilerplate-lua:sendLikes', function(likes)
    if not likes or #likes == 0 then
        print('No likes data received')
    else
        print('Received likes data from server event fivem-react-boilerplate-lua:sendLikes')
        print('Likes data:', json.encode(likes))
        SendNUIMessage({
            type = 'LIKES',
            payload = likes
        })
        print('Sent NUI message with likes data')
    end
end)

RegisterNUICallback('addStory', function(data, cb)
    print('addStory callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:addStory', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendStory')
AddEventHandler('fivem-react-boilerplate-lua:sendStory', function(story)
    print('Received story data from server event fivem-react-boilerplate-lua:sendStory')
    print('Story data:', json.encode(story))
    SendNUIMessage({
        type = 'STORY',
        payload = story
    })
    print('Sent NUI message with story data')
end)
RegisterNUICallback('getStories', function(data, cb)
    print('getStories callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getStories', data)
end)
RegisterNetEvent('fivem-react-boilerplate-lua:sendStories')
AddEventHandler('fivem-react-boilerplate-lua:sendStories', function(stories)
    if not stories or #stories == 0 then
        print('No stories data received')
    else
        print('Received stories data from server event fivem-react-boilerplate-lua:sendStories')
        print('Stories data:', json.encode(stories))
        SendNUIMessage({
            type = 'STORIES',
            payload = stories
        })
        print('Sent NUI message with stories data')
    end
end)

RegisterNUICallback('getStory', function(data, cb) --send the user id of the user story.
    print('getStory callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getStory', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendStory')   
AddEventHandler('fivem-react-boilerplate-lua:sendStory', function(story)
    if not story or #story == 0 then
        print('No story data received')
    else
        print('Received story data from server event fivem-react-boilerplate-lua:sendStory')
        print('Story data:', json.encode(story))
        SendNUIMessage({
            type = 'STORY',
            payload = story
        })
        print('Sent NUI message with story data')
    end
end)

RegisterNUICallback('loginUser', function(data, cb)
    print('loginUser callback triggered')
    -- If the Bio field is a string, parse it to a JSON object
    if type(data.Bio) == 'string' then
        data.Bio = json.decode(data.Bio)
    end
    TriggerServerEvent('fivem-react-boilerplate-lua:loginUser', data)
    cb({})
end)

RegisterNUICallback('registerUser', function(data, cb)
    print('registerUser callback triggered')
    -- If the Bio field is a string, parse it to a JSON object
    if type(data.Bio) == 'string' then
        data.Bio = json.decode(data.Bio)
    end
    TriggerServerEvent('fivem-react-boilerplate-lua:registerUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendUser')
AddEventHandler('fivem-react-boilerplate-lua:sendUser', function(user)
    print('Received user data from server event fivem-react-boilerplate-lua:sendUser')
    print('User data:', json.encode(user))
    -- If the Bio field is a string, parse it to a JSON object
    if type(user.Bio) == 'string' then
        user.Bio = json.decode(user.Bio)
    end
    SendNUIMessage({
        type = 'USER',
        payload = user
    })
    print('Sent NUI message with user data')
end)
RegisterNetEvent('fivem-react-boilerplate-lua:FETCH_USER')
AddEventHandler('fivem-react-boilerplate-lua:FETCH_USER', function(user)
    print('Received user data from server event fivem-react-boilerplate-lua:sendUser')
    print('User data:', json.encode(user))
    -- If the Bio field is a string, parse it to a JSON object
    if type(user.Bio) == 'string' then
        user.Bio = json.decode(user.Bio)
    end
    SendNUIMessage({
        type = 'FETCH_USER',
        payload = user
    })
    print('Sent NUI message with user data')
end)
RegisterNUICallback('savePost', function(data, cb)
    print('savePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:savePost', data)
    cb({})
end)

RegisterNUICallback('getSavedPosts', function(data, cb)
    print('getSavedPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getSavedPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendSavedPosts')
AddEventHandler('fivem-react-boilerplate-lua:sendSavedPosts', function(savedPosts)
    if not savedPosts or #savedPosts == 0 then
        print('No saved posts data received')
    else
        print('Received saved posts data from server event fivem-react-boilerplate-lua:sendSavedPosts')
        print('Saved posts data:', json.encode(savedPosts))
        SendNUIMessage({
            type = 'SAVED_POSTS',
            payload = savedPosts
        })
        print('Sent NUI message with saved posts data')
    end
end)

RegisterNUICallback('unsavePost', function(data, cb)
    print('unsavePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:unsavePost', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendUnsavedPost')
AddEventHandler('fivem-react-boilerplate-lua:sendUnsavedPost', function(unsave)
    print('Received unsave data from server event fivem-react-boilerplate-lua:sendUnsavedPost')
    print('Unsave data:', json.encode(unsave))
    SendNUIMessage({
        type = 'UNSAVE',
        payload = unsave
    })
    print('Sent NUI message with unsave data')
end)

RegisterNUICallback('getOwnPosts', function(data, cb)
    print('getOwnPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getOwnPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendOwnPosts')
AddEventHandler('fivem-react-boilerplate-lua:sendOwnPosts', function(ownPosts)
    if not ownPosts or #ownPosts == 0 then
        print('No own posts data received')
    else
        print('Received own posts data from server event fivem-react-boilerplate-lua:sendOwnPosts')
        print('Own posts data:', json.encode(ownPosts))
        SendNUIMessage({
            type = 'OWN_POSTS',
            payload = ownPosts
        })
        print('Sent NUI message with own posts data')
    end
end)

RegisterNUICallback('updateUser', function(data, cb)
    print('updateUser callback triggered')
    -- If the Bio field is a string, parse it to a JSON object
    if type(data.Bio) == 'string' then
        data.Bio = json.decode(data.Bio)
    end
    TriggerServerEvent('fivem-react-boilerplate-lua:updateUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendUpdatedUser')
AddEventHandler('fivem-react-boilerplate-lua:sendUpdatedUser', function(updatedUser)
    print('Received updated user data from server event fivem-react-boilerplate-lua:sendUpdatedUser')
    print('Updated user data:', json.encode(updatedUser))
    -- If the Bio field is a string, parse it to a JSON object
    if type(updatedUser.Bio) == 'string' then
        updatedUser.Bio = json.decode(updatedUser.Bio)
    end
    SendNUIMessage({
        type = 'UPDATED_USER',
        payload = updatedUser
    })
    print('Sent NUI message with updated user data')
end)


RegisterNUICallback('getAllPosts', function(data, cb)
    print('getAllPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getAllPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendAllPosts')
AddEventHandler('fivem-react-boilerplate-lua:sendAllPosts', function(allPosts)
    if not allPosts or #allPosts == 0 then
        print('No all posts data received')
    else
        print('Received all posts data from server event fivem-react-boilerplate-lua:sendAllPosts')
        print('All posts data:', json.encode(allPosts))
        SendNUIMessage({
            type = 'ALL_POSTS',
            payload = allPosts
        })
        print('Sent NUI message with all posts data')
    end
end)


RegisterNUICallback('getAllUsers', function(data, cb)
    print('getAllUsers callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getAllUsers', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendAllUsers')
AddEventHandler('fivem-react-boilerplate-lua:sendAllUsers', function(allUsers)
    if not allUsers or #allUsers == 0 then
        print('No all users data received')
    else
        print('Received all users data from server event fivem-react-boilerplate-lua:sendAllUsers')
        print('All users data:', json.encode(allUsers))
        SendNUIMessage({
            type = 'ALL_USERS',
            payload = allUsers
        })
        print('Sent NUI message with all users data')
    end
end)

RegisterNUICallback('highlightStory', function(data, cb)
    print('highlightStory callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:highlightStory', data)
    cb({})
end)
RegisterNetEvent('fivem-react-boilerplate-lua:sendHighlightedStory')
AddEventHandler('fivem-react-boilerplate-lua:sendHighlightedStory', function(highlight)
    print('Received highlight data from server event fivem-react-boilerplate-lua:sendHighlightedStory')
    print('Highlight data:', json.encode(highlight))
    SendNUIMessage({
        type = 'HIGHLIGHT',
        payload = highlight
    })
    print('Sent NUI message with highlight data')
end)

RegisterNUICallback('unhighlightStory', function(data, cb)
    print('unhighlightStory callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:unhighlightStory', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendUnhighlightedStory')
AddEventHandler('fivem-react-boilerplate-lua:sendUnhighlightedStory', function(unhighlight)
    print('Received unhighlight data from server event fivem-react-boilerplate-lua:sendUnhighlightedStory')
    print('Unhighlight data:', json.encode(unhighlight))
    SendNUIMessage({
        type = 'UNHIGHLIGHT',
        payload = unhighlight
    })
    print('Sent NUI message with unhighlight data')
end)

RegisterNUICallback('sendMessage', function(data, cb)
    print('sendMessage callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:sendMessage', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:receiveMessage')
AddEventHandler('fivem-react-boilerplate-lua:receiveMessage', function(message)
    print('Received message data from server event fivem-react-boilerplate-lua:receiveMessage')
    print('Message data:', json.encode(message))
    SendNUIMessage({
        type = 'MESSAGE',
        payload = message
    })
    print('Sent NUI message with message data')
end)

RegisterNUICallback('getAllMessages', function(data, cb)
    print('getAllMessages callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:getAllMessages', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:sendAllMessages')
AddEventHandler('fivem-react-boilerplate-lua:sendAllMessages', function(allMessages)
    if not allMessages or #allMessages == 0 then
        print('No all messages data received')
    else
        print('Received all messages data from server event fivem-react-boilerplate-lua:sendAllMessages')
        print('All messages data:', json.encode(allMessages))
        SendNUIMessage({
            type = 'ALL_MESSAGES',
            payload = allMessages
        })
        print('Sent NUI message with all messages data')
    end
end)