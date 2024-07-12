RegisterNUICallback('TgetUser', function(data,cb)
    print('getUser callback triggerd')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetUser', data)
    cb({})
end)


RegisterNUICallback('TaddPost', function(data, cb)
    debugPrint('Data sent by React', json.encode(data))
    local post = data.post
    local user = data.user
    TriggerServerEvent('fivem-react-boilerplate-lua:TaddPost', post, user)
    cb({})
end)


RegisterNUICallback('TgetPosts', function(data, cb)
    print('getPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendPosts')
AddEventHandler('fivem-react-boilerplate-lua:TsendPosts', function(posts)
    if not posts or #posts == 0 then
        print('No posts data received')
    else
        print('Received posts data from server event fivem-react-boilerplate-lua:TsendPosts')
        print('Posts data:', json.encode(posts))
        SendNUIMessage({
            type = 'T_POSTS',
            payload = posts
        })
        print('Sent NUI message with posts data')
    end
end)

RegisterNUICallback('TfollowUser', function(data, cb)
    print('followUser callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TfollowUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TfollowUser')
AddEventHandler('fivem-react-boilerplate-lua:TfollowUser', function(follow)
    print('Received follow data from server event fivem-react-boilerplate-lua:TfollowUser')
    print('Follow data:', json.encode(follow))
    SendNUIMessage({
        type = 'T_FOLLOW',
        payload = follow
    })
    print('Sent NUI message with follow data')
end)

RegisterNUICallback('TunfollowUser', function(data, cb)
    print('unfollowUser callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TunfollowUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TunfollowUser')
AddEventHandler('fivem-react-boilerplate-lua:TunfollowUser', function(unfollow)
    print('Received unfollow data from server event fivem-react-boilerplate-lua:TunfollowUser')
    print('Unfollow data:', json.encode(unfollow))
    SendNUIMessage({
        type = 'T_UNFOLLOW',
        payload = unfollow
    })
    print('Sent NUI message with unfollow data')
end)

RegisterNUICallback('TgetFollows', function(data, cb)
    print('getFollows callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetFollows', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendFollows')
AddEventHandler('fivem-react-boilerplate-lua:TsendFollows', function(follows)
    if not follows or #follows == 0 then
        print('No follows data received')
    else
        print('Received follows data from server event fivem-react-boilerplate-lua:TsendFollows')
        print('Follows data:', json.encode(follows))
        SendNUIMessage({
            type = 'T_FOLLOWS',
            payload = follows
        })
        print('Sent NUI message with follows data')
    end
end)

RegisterNUICallback('TgetFollowers', function(data, cb)
    print('getFollowers callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetFollowers', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendFollowers') 
AddEventHandler('fivem-react-boilerplate-lua:TsendFollowers', function(followers)
    if not followers or #followers == 0 then
        print('No followers data received')
    else
        print('Received followers data from server event fivem-react-boilerplate-lua:TsendFollowers')
        print('Followers data:', json.encode(followers))
        SendNUIMessage({
            type = 'T_FOLLOWERS',
            payload = followers
        })
        print('Sent NUI message with followers data')
    end
end)

RegisterNUICallback('TlikePost', function(data, cb)
    print('likePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TlikePost', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TlikePost')
AddEventHandler('fivem-react-boilerplate-lua:TlikePost', function(like)
    print('Received like data from server event fivem-react-boilerplate-lua:TlikePost')
    print('Like data:', json.encode(like))
    SendNUIMessage({
        type = 'T_LIKE',
        payload = like
    })
    print('Sent NUI message with like data')
end)

RegisterNUICallback('TunlikePost', function(data, cb)
    print('unlikePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TunlikePost', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TunlikePost')
AddEventHandler('fivem-react-boilerplate-lua:TunlikePost', function(unlike)
    print('Received unlike data from server event fivem-react-boilerplate-lua:TunlikePost')
    print('Unlike data:', json.encode(unlike))
    SendNUIMessage({
        type = 'T_UNLIKE',
        payload = unlike
    })
    print('Sent NUI message with unlike data')
end)



RegisterNUICallback('TaddComment', function(data, cb)
    print('addComment callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TaddComment', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendComment')
AddEventHandler('fivem-react-boilerplate-lua:TsendComment', function(comment)
    print('Received comment data from server event fivem-react-boilerplate-lua:TsendComment')
    print('Comment data:', json.encode(comment))
    SendNUIMessage({
        type = 'T_COMMENT',
        payload = comment
    })
    print('Sent NUI message with comment data')
end)

RegisterNUICallback('TgetComments', function(data, cb)
    print('getComments callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetComments', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendComments')
AddEventHandler('fivem-react-boilerplate-lua:TsendComments', function(comments)
    if not comments or #comments == 0 then
        print('No comments data received')
    else
        print('Received comments data from server event fivem-react-boilerplate-lua:TsendComments')
        print('Comments data:', json.encode(comments))
        SendNUIMessage({
            type = 'T_COMMENTS',
            payload = comments
        })
        print('Sent NUI message with comments data')
    end
end)

RegisterNUICallback('TgetLikes', function(data, cb)
    print('getLikes callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetLikes', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendLikes')
AddEventHandler('fivem-react-boilerplate-lua:TsendLikes', function(likes)
    if not likes or #likes == 0 then
        print('No likes data received')
    else
        print('Received likes data from server event fivem-react-boilerplate-lua:TsendLikes')
        print('Likes data:', json.encode(likes))
        SendNUIMessage({
            type = 'T_LIKES',
            payload = likes
        })
        print('Sent NUI message with likes data')
    end
end)

RegisterNUICallback('TaddStory', function(data, cb)
    print('addStory callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TaddStory', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendStory')
AddEventHandler('fivem-react-boilerplate-lua:TsendStory', function(story)
    print('Received story data from server event fivem-react-boilerplate-lua:TsendStory')
    print('Story data:', json.encode(story))
    SendNUIMessage({
        type = 'T_STORY',
        payload = story
    })
    print('Sent NUI message with story data')
end)
RegisterNUICallback('TgetStories', function(data, cb)
    print('getStories callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetStories', data)
end)
RegisterNetEvent('fivem-react-boilerplate-lua:TsendStories')
AddEventHandler('fivem-react-boilerplate-lua:TsendStories', function(stories)
    if not stories or #stories == 0 then
        print('No stories data received')
    else
        print('Received stories data from server event fivem-react-boilerplate-lua:TsendStories')
        print('Stories data:', json.encode(stories))
        SendNUIMessage({
            type = 'T_STORIES',
            payload = stories
        })
        print('Sent NUI message with stories data')
    end
end)

RegisterNUICallback('TgetStory', function(data, cb) --send the user id of the user story.
    print('getStory callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetStory', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendStory')   
AddEventHandler('fivem-react-boilerplate-lua:TsendStory', function(story)
    if not story or #story == 0 then
        print('No story data received')
    else
        print('Received story data from server event fivem-react-boilerplate-lua:TsendStory')
        print('Story data:', json.encode(story))
        SendNUIMessage({
            type = 'T_STORY',
            payload = story
        })
        print('Sent NUI message with story data')
    end
end)

RegisterNUICallback('TloginUser', function(data, cb)
    print('loginUser callback triggered')
    -- If the Bio field is a string, parse it to a JSON object
    if type(data.Bio) == 'string' then
        data.Bio = json.decode(data.Bio)
    end
    TriggerServerEvent('fivem-react-boilerplate-lua:TloginUser', data)
    cb({})
end)

RegisterNUICallback('TregisterUser', function(data, cb)
    print('registerUser callback triggered')
    -- If the Bio field is a string, parse it to a JSON object
    if type(data.Bio) == 'string' then
        data.Bio = json.decode(data.Bio)
    end
    TriggerServerEvent('fivem-react-boilerplate-lua:TregisterUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendUser')
AddEventHandler('fivem-react-boilerplate-lua:TsendUser', function(user)
    print('Received user data from server event fivem-react-boilerplate-lua:TsendUser')
    print('User data:', json.encode(user))
    -- If the Bio field is a string, parse it to a JSON object
    if type(user.Bio) == 'string' then
        user.Bio = json.decode(user.Bio)
    end
    SendNUIMessage({
        type = 'T_USER',
        payload = user
    })
    print('Sent NUI message with user data')
end)
RegisterNetEvent('fivem-react-boilerplate-lua:TFETCH_USER')
AddEventHandler('fivem-react-boilerplate-lua:TFETCH_USER', function(user)
    print('Received user data from server event fivem-react-boilerplate-lua:TsendUser')
    print('User data:', json.encode(user))
    -- If the Bio field is a string, parse it to a JSON object
    if type(user.Bio) == 'string' then
        user.Bio = json.decode(user.Bio)
    end
    SendNUIMessage({
        type = 'T_FETCH_USER',
        payload = user
    })
    print('Sent NUI message with user data')
end)
RegisterNUICallback('TsavePost', function(data, cb)
    print('savePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TsavePost', data)
    cb({})
end)

RegisterNUICallback('TgetSavedPosts', function(data, cb)
    print('getSavedPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetSavedPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendSavedPosts')
AddEventHandler('fivem-react-boilerplate-lua:TsendSavedPosts', function(savedPosts)
    if not savedPosts or #savedPosts == 0 then
        print('No saved posts data received')
    else
        print('Received saved posts data from server event fivem-react-boilerplate-lua:TsendSavedPosts')
        print('Saved posts data:', json.encode(savedPosts))
        SendNUIMessage({
            type = 'T_SAVED_POSTS',
            payload = savedPosts
        })
        print('Sent NUI message with saved posts data')
    end
end)

RegisterNUICallback('TunsavePost', function(data, cb)
    print('unsavePost callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TunsavePost', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendUnsavedPost')
AddEventHandler('fivem-react-boilerplate-lua:TsendUnsavedPost', function(unsave)
    print('Received unsave data from server event fivem-react-boilerplate-lua:TsendUnsavedPost')
    print('Unsave data:', json.encode(unsave))
    SendNUIMessage({
        type = 'T_UNSAVE',
        payload = unsave
    })
    print('Sent NUI message with unsave data')
end)

RegisterNUICallback('TgetOwnPosts', function(data, cb)
    print('getOwnPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetOwnPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendOwnPosts')
AddEventHandler('fivem-react-boilerplate-lua:TsendOwnPosts', function(ownPosts)
    if not ownPosts or #ownPosts == 0 then
        print('No own posts data received')
    else
        print('Received own posts data from server event fivem-react-boilerplate-lua:TsendOwnPosts')
        print('Own posts data:', json.encode(ownPosts))
        SendNUIMessage({
            type = 'T_OWN_POSTS',
            payload = ownPosts
        })
        print('Sent NUI message with own posts data')
    end
end)

RegisterNUICallback('TupdateUser', function(data, cb)
    print('updateUser callback triggered')
    -- If the Bio field is a string, parse it to a JSON object
    if type(data.Bio) == 'string' then
        data.Bio = json.decode(data.Bio)
    end
    TriggerServerEvent('fivem-react-boilerplate-lua:TupdateUser', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendUpdatedUser')
AddEventHandler('fivem-react-boilerplate-lua:TsendUpdatedUser', function(updatedUser)
    print('Received updated user data from server event fivem-react-boilerplate-lua:TsendUpdatedUser')
    print('Updated user data:', json.encode(updatedUser))
    -- If the Bio field is a string, parse it to a JSON object
    if type(updatedUser.Bio) == 'string' then
        updatedUser.Bio = json.decode(updatedUser.Bio)
    end
    SendNUIMessage({
        type = 'T_UPDATED_USER',
        payload = updatedUser
    })
    print('Sent NUI message with updated user data')
end)


RegisterNUICallback('TgetAllPosts', function(data, cb)
    print('getAllPosts callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetAllPosts', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendAllPosts')
AddEventHandler('fivem-react-boilerplate-lua:TsendAllPosts', function(allPosts)
    if not allPosts or #allPosts == 0 then
        print('No all posts data received')
    else
        print('Received all posts data from server event fivem-react-boilerplate-lua:TsendAllPosts')
        print('All posts data:', json.encode(allPosts))
        SendNUIMessage({
            type = 'T_ALL_POSTS',
            payload = allPosts
        })
        print('Sent NUI message with all posts data')
    end
end)


RegisterNUICallback('TgetAllUsers', function(data, cb)
    print('getAllUsers callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetAllUsers', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendAllUsers')
AddEventHandler('fivem-react-boilerplate-lua:TsendAllUsers', function(allUsers)
    if not allUsers or #allUsers == 0 then
        print('No all users data received')
    else
        print('Received all users data from server event fivem-react-boilerplate-lua:TsendAllUsers')
        print('All users data:', json.encode(allUsers))
        SendNUIMessage({
            type = 'T_ALL_USERS',
            payload = allUsers
        })
        print('Sent NUI message with all users data')
    end
end)


RegisterNUICallback('TsendMessage', function(data, cb)
    print('sendMessage callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TsendMessage', data)
    cb({})
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TreceiveMessage')
AddEventHandler('fivem-react-boilerplate-lua:TreceiveMessage', function(message)
    print('Received message data from server event fivem-react-boilerplate-lua:TreceiveMessage')
    print('Message data:', json.encode(message))
    SendNUIMessage({
        type = 'T_MESSAGE',
        payload = message
    })
    print('Sent NUI message with message data')
end)

RegisterNUICallback('TgetAllMessages', function(data, cb)
    print('getAllMessages callback triggered')
    TriggerServerEvent('fivem-react-boilerplate-lua:TgetAllMessages', data)
end)

RegisterNetEvent('fivem-react-boilerplate-lua:TsendAllMessages')
AddEventHandler('fivem-react-boilerplate-lua:TsendAllMessages', function(allMessages)
    if not allMessages or #allMessages == 0 then
        print('No all messages data received')
    else
        print('Received all messages data from server event fivem-react-boilerplate-lua:TsendAllMessages')
        print('All messages data:', json.encode(allMessages))
        SendNUIMessage({
            type = 'T_ALL_MESSAGES',
            payload = allMessages
        })
        print('Sent NUI message with all messages data')
    end
end)