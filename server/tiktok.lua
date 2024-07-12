RegisterServerEvent('fivem-react-boilerplate-lua:TaddPost')
AddEventHandler('fivem-react-boilerplate-lua:TaddPost', function(post, user)
    print('Server event fivem-react-boilerplate-lua:TaddPost invoked')
    print('Received post data:', post.Caption , post.Location)
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
RegisterServerEvent('fivem-react-boilerplate-lua:TgetPosts')
AddEventHandler('fivem-react-boilerplate-lua:TgetPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT P.* FROM Phone_TIKTOK_Posts P JOIN Phone_TIKTOK_Follows F ON P.UserID = F.FollowingID WHERE F.FollowerID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))

            local postsWithUsers = {} -- Table to hold posts with their respective user data

            for i, post in ipairs(result) do
                exports.ghmattimysql:execute('SELECT UserID, Username, Email, FullName, Bio, ProfilePicURL FROM Phone_TIKTOK_Users WHERE UserID = @UserID', { ['@UserID'] = post.UserID }, function(userResult)
                    if userResult and #userResult > 0 then
                        post.user = userResult[1] -- Append the user data to the post
                        table.insert(postsWithUsers, post) -- Add the post to the table

                        -- If this is the last post, trigger the client event
                        if i == #result then
                            TriggerClientEvent('fivem-react-boilerplate-lua:TsendPosts', source, postsWithUsers) -- Send the event to the correct client
                            print('Sent posts data to client')
                        end
                    else
                        print('Failed to fetch user for post')
                    end
                end)
            end
        else
            print('Failed to execute query')
        end
    end)
end)
RegisterServerEvent('fivem-react-boilerplate-lua:TgetUser')
AddEventHandler('fivem-react-boilerplate-lua:TgetUser', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Users WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TFETCH_USER', source, result[1]) -- Send the event to the correct client
            print('Sent user data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TfollowUser')
AddEventHandler('fivem-react-boilerplate-lua:TfollowUser', function(data)
    print('Server event fivem-react-boilerplate-lua:TfollowUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_Follows (FollowerID, FollowingID) VALUES (@FollowerID, @FollowingID)', {
        ['@FollowerID'] = data.FollowerID,
        ['@FollowingID'] = data.FollowingID
    }, function(result)
        if result then
            print('Followed user successfully')
        else
            print('Failed to follow user')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TunfollowUser')
AddEventHandler('fivem-react-boilerplate-lua:TunfollowUser', function(data)
    print('Server event fivem-react-boilerplate-lua:TunfollowUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('DELETE FROM Phone_TIKTOK_Follows WHERE FollowerID = @FollowerID AND FollowingID = @FollowingID', {
        ['@FollowerID'] = data.FollowerID,
        ['@FollowingID'] = data.FollowingID
    }, function(result)
        if result then
            print('Unfollowed user successfully')
        else
            print('Failed to unfollow user')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetFollows')
AddEventHandler('fivem-react-boilerplate-lua:TgetFollows', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetFollows invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Follows WHERE FollowerID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendFollows', source, result) -- Send the event to the correct client
            print('Sent follows data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetFollowers')
AddEventHandler('fivem-react-boilerplate-lua:TgetFollowers', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetFollowers invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Follows WHERE FollowingID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendFollowers', source, result) -- Send the event to the correct client
            print('Sent followers data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TlikePost')
AddEventHandler('fivem-react-boilerplate-lua:TlikePost', function(data)
    print('Server event fivem-react-boilerplate-lua:TlikePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_Likes (UserID, PostID) VALUES (@UserID, @PostID)', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID
    }, function(result)
        if result then
            print('Liked post successfully')
        else
            print('Failed to like post')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TunlikePost')
AddEventHandler('fivem-react-boilerplate-lua:TunlikePost', function(data)
    print('Server event fivem-react-boilerplate-lua:TunlikePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('DELETE FROM Phone_TIKTOK_Likes WHERE UserID = @UserID AND PostID = @PostID', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID
    }, function(result)
        if result then
            print('Unliked post successfully')
        else
            print('Failed to unlike post')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TaddComment')
AddEventHandler('fivem-react-boilerplate-lua:TaddComment', function(data)
    print('Server event fivem-react-boilerplate-lua:TaddComment invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_Comments (UserID, PostID, Comment) VALUES (@UserID, @PostID, @Comment)', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID,
        ['@Comment'] = data.Comment
    }, function(result)
        if result then
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendComment', source, data) -- Send the event to the correct client
            print('Added comment successfully')
        else
            print('Failed to add comment')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetComments')
AddEventHandler('fivem-react-boilerplate-lua:TgetComments', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetComments invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Comments WHERE PostID = @PostID', { ['@PostID'] = data.PostID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendComments', source, result) -- Send the event to the correct client
            print('Sent comments data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetLikes')
AddEventHandler('fivem-react-boilerplate-lua:TgetLikes', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetLikes invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute([[
        SELECT Phone_TIKTOK_Likes.UserID, Phone_TIKTOK_Users.Username 
        FROM Phone_TIKTOK_Likes 
        INNER JOIN Phone_TIKTOK_Users ON Phone_TIKTOK_Likes.UserID = Phone_TIKTOK_Users.UserID 
        WHERE Phone_TIKTOK_Likes.PostID = @PostID
    ]], { ['@PostID'] = data.PostID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendLikes', source, result) -- Send the event to the correct client
            print('Sent likes data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TaddStory')
AddEventHandler('fivem-react-boilerplate-lua:TaddStory', function(data)
    print('Server event fivem-react-boilerplate-lua:TaddStory invoked')
    print('Received story data:', data.ImageURL)
    print('Received user data:', data.UserID)
    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_Stories (UserID, ImageURL, ExpiryTime) VALUES (@user, @imageURL, DATE_ADD(NOW(), INTERVAL 24 HOUR))', {
        ['@user'] = data.UserID,
        ['@imageURL'] = data.ImageURL
    }, function(result)
        if result then
            print('Story added successfully')
        else
            print('Failed to add story')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetStories')
AddEventHandler('fivem-react-boilerplate-lua:TgetStories', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetStories invoked')
    print('Data received:', json.encode(data))

    local source = source

    exports.ghmattimysql:execute('SELECT P.* FROM Phone_TIKTOK_Stories P JOIN Phone_TIKTOK_Follows F ON P.UserID = F.FollowingID WHERE F.FollowerID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))

            local storiesWithUsers = {} -- Table to hold stories with their respective user data
            local completedFetches = 0 -- Counter for completed user data fetches

            for i, story in ipairs(result) do
                exports.ghmattimysql:execute('SELECT UserID, Username, ProfilePicURL FROM Phone_TIKTOK_Users WHERE UserID = @UserID', { ['@UserID'] = story.UserID }, function(userResult)
                    completedFetches = completedFetches + 1 -- Increment the counter

                    if userResult and #userResult > 0 then
                        story.user = userResult[1] -- Append the user data to the story
                        table.insert(storiesWithUsers, story) -- Add the story to the table
                    else
                        print('Failed to fetch user for story')
                    end

                    -- If all fetches have completed, trigger the client event
                    if completedFetches == #result then
                        TriggerClientEvent('fivem-react-boilerplate-lua:TsendStories', source, storiesWithUsers) 
                        print('Sent stories data to client')
                    end
                end)
            end
        else
            print('Failed to execute query')
        end
    end)
end)
RegisterServerEvent('fivem-react-boilerplate-lua:TgetStory')
AddEventHandler('fivem-react-boilerplate-lua:TgetStory', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetStory invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Stories WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendStory', source, result) -- Send the event to the correct client
            print('Sent story data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TloginUser')
AddEventHandler('fivem-react-boilerplate-lua:TloginUser', function(data)
    print('Server event fivem-react-boilerplate-lua:TloginUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Users WHERE (Username = @Username OR Email = @Email) AND PasswordHash = @Password', {
        ['@Username'] = data.Username,
        ['@Email'] = data.Email,
        ['@Password'] = data.Password
    }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendUser', source, result[1]) -- Send the event to the correct client
            print('Sent user data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TregisterUser')
AddEventHandler('fivem-react-boilerplate-lua:TregisterUser', function(data)
    print('Server event fivem-react-boilerplate-lua:TregisterUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_Users (Username, Email, PasswordHash, FullName, Bio, ProfilePicURL) VALUES (@Username, @Email, @Password, @FullName, @Bio, @ProfilePicURL)', {
        ['@Username'] = data.Username,
        ['@Email'] = data.Email,
        ['@Password'] = data.Password,
        ['@FullName'] = data.FullName,
        ['@Bio'] = data.Bio,
        ['@ProfilePicURL'] = data.ProfilePicURL
    }, function(result)
        if result then
            print('Registered user successfully')
            -- Automatically login the user after registration
            TriggerEvent('fivem-react-boilerplate-lua:loginUser', data)
        else
            print('Failed to register user')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TsavePost')
AddEventHandler('fivem-react-boilerplate-lua:TsavePost', function(data)
    print('Server event fivem-react-boilerplate-lua:TsavePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_SavedPosts (UserID, PostID) VALUES (@UserID, @PostID)', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID
    }, function(result)
        if result then
            print('Saved post successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendSavedPost', source, data)
        else
            print('Failed to save post')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TunsavePost')
AddEventHandler('fivem-react-boilerplate-lua:TunsavePost', function(data)
    print('Server event fivem-react-boilerplate-lua:TunsavePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('DELETE FROM Phone_TIKTOK_SavedPosts WHERE UserID = @UserID AND PostID = @PostID', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID
    }, function(result)
        if result then
            print('Unsaved post successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendUnsavedPost', source, data)
        else
            print('Failed to unsave post')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetSavedPosts')
AddEventHandler('fivem-react-boilerplate-lua:TgetSavedPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetSavedPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_SavedPosts WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendSavedPosts', source, result) 
            print('Sent saved posts data to client')
        else
            print('Failed to execute query')
        end
    end)
end)
RegisterServerEvent('fivem-react-boilerplate-lua:TgetOwnPosts')
AddEventHandler('fivem-react-boilerplate-lua:TgetOwnPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetOwnPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Posts WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendOwnPosts', source, result) 
            print('Sent own posts data to client')
        else
            print('Failed to execute query')
        end
    end)
end)


RegisterServerEvent('fivem-react-boilerplate-lua:TupdateUser')
AddEventHandler('fivem-react-boilerplate-lua:TupdateUser', function(data)
    print('Server event fivem-react-boilerplate-lua:TupdateUser invoked')
    print('Data received:', json.encode(data))
    local source = source 
    -- Serialize the Bio field to a JSON string
    local bioJson = json.encode(data.Bio)

    exports.ghmattimysql:execute('UPDATE Phone_TIKTOK_Users SET Username = @Username, Email = @Email, FullName = @FullName, Bio = @Bio, ProfilePicURL = @ProfilePicURL WHERE UserID = @UserID', {
        ['@UserID'] = data.UserID,
        ['@Username'] = data.Username,
        ['@Email'] = data.Email,
        ['@FullName'] = data.FullName,
        ['@Bio'] = bioJson, 
        ['@ProfilePicURL'] = data.ProfilePicURL
    }, function(result)
        if result then
            print('Updated user successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendUser', source, data)
        else
            print('Failed to update user')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetAllPosts')
AddEventHandler('fivem-react-boilerplate-lua:TgetAllPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetAllPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Posts', {}, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendAllPosts', source, result) 
            print('Sent all posts data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetAllUsers')
AddEventHandler('fivem-react-boilerplate-lua:TgetAllUsers', function(data)
    print('Server event fivem-react-boilerplate-lua:TgetAllUsers invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_Users', {}, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendAllUsers', source, result) 
            print('Sent all users data to client')
        else
            print('Failed to execute query')
        end
    end)
end)


RegisterServerEvent('fivem-react-boilerplate-lua:TsendMessage')
AddEventHandler('fivem-react-boilerplate-lua:TsendMessage', function(data)
    print('Server event fivem-react-boilerplate-lua:TsendMessage invoked')
    print('Data received:', json.encode(data))

    local source = source
    local sender = data.sender
    local receiver = data.receiver
    local message = data.message

    -- Insert the new message into the database
    exports.ghmattimysql:execute('INSERT INTO Phone_TIKTOK_DirectMessages (SenderID, ReceiverID, Message) VALUES (?, ?, ?)', {sender, receiver, message}, function(insertResult)
        if insertResult then
            print('Inserted message successfully')
            -- Fetch the inserted message from the database
            exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_DirectMessages WHERE SenderID = ? AND ReceiverID = ? AND Message = ?', {sender, receiver, message}, function(result)
                if result and #result > 0 then
                    local fullMessageData = result[1]
                    print('Fetched full message data:', json.encode(fullMessageData))
                    -- Notify the receiver about the new message
                    TriggerClientEvent('fivem-react-boilerplate-lua:TreceiveMessage', receiver, fullMessageData) 
                    print('Sent message data to receiver')
                    -- Notify the sender about the new message (optional)
                    TriggerClientEvent('fivem-react-boilerplate-lua:TreceiveMessage', sender, fullMessageData) 
                    print('Sent message data to sender')
                else
                    print('Failed to fetch full message data')
                end
            end)
        else
            print('Failed to insert message')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:TgetAllMessages')
AddEventHandler('fivem-react-boilerplate-lua:TgetAllMessages', function(data)
    local src = source 
    print('Server event fivem-react-boilerplate-lua:TgetAllMessages invoked')
    print('Sender ID:', data.sender)
    print('Receiver ID:', data.receiver)

    -- Fetch all messages from the database between the sender and the receiver
    exports.ghmattimysql:execute('SELECT * FROM Phone_TIKTOK_DirectMessages WHERE (SenderID = ? AND ReceiverID = ?) OR (SenderID = ? AND ReceiverID = ?)', {data.sender, data.receiver, data.receiver, data.sender}, function(result)
        if result then
            print('Query executed successfully')
            print('Fetched messages:', json.encode(result))

            -- Send the fetched messages to the client
            TriggerClientEvent('fivem-react-boilerplate-lua:TsendAllMessages', src, result)
            print('Sent messages to client')
        else
            print('Failed to execute query')
        end
    end)
end)