RegisterServerEvent('fivem-react-boilerplate-lua:addPost')
AddEventHandler('fivem-react-boilerplate-lua:addPost', function(post, user)
    print('Server event fivem-react-boilerplate-lua:addPost invoked')
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
RegisterServerEvent('fivem-react-boilerplate-lua:getPosts')
AddEventHandler('fivem-react-boilerplate-lua:getPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:getPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT P.* FROM Phone_IG_Posts P JOIN Phone_IG_Follows F ON P.UserID = F.FollowingID WHERE F.FollowerID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))

            local postsWithUsers = {} -- Table to hold posts with their respective user data

            for i, post in ipairs(result) do
                exports.ghmattimysql:execute('SELECT UserID, Username, Email, FullName, Bio, ProfilePicURL FROM Phone_IG_Users WHERE UserID = @UserID', { ['@UserID'] = post.UserID }, function(userResult)
                    if userResult and #userResult > 0 then
                        post.user = userResult[1] -- Append the user data to the post
                        table.insert(postsWithUsers, post) -- Add the post to the table

                        -- If this is the last post, trigger the client event
                        if i == #result then
                            TriggerClientEvent('fivem-react-boilerplate-lua:sendPosts', source, postsWithUsers) -- Send the event to the correct client
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
RegisterServerEvent('fivem-react-boilerplate-lua:getUser')
AddEventHandler('fivem-react-boilerplate-lua:getUser', function(data)
    print('Server event fivem-react-boilerplate-lua:getUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Users WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:FETCH_USER', source, result[1]) -- Send the event to the correct client
            print('Sent user data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:followUser')
AddEventHandler('fivem-react-boilerplate-lua:followUser', function(data)
    print('Server event fivem-react-boilerplate-lua:followUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_IG_Follows (FollowerID, FollowingID) VALUES (@FollowerID, @FollowingID)', {
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

RegisterServerEvent('fivem-react-boilerplate-lua:unfollowUser')
AddEventHandler('fivem-react-boilerplate-lua:unfollowUser', function(data)
    print('Server event fivem-react-boilerplate-lua:unfollowUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('DELETE FROM Phone_IG_Follows WHERE FollowerID = @FollowerID AND FollowingID = @FollowingID', {
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

RegisterServerEvent('fivem-react-boilerplate-lua:getFollows')
AddEventHandler('fivem-react-boilerplate-lua:getFollows', function(data)
    print('Server event fivem-react-boilerplate-lua:getFollows invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Follows WHERE FollowerID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendFollows', source, result) -- Send the event to the correct client
            print('Sent follows data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:getFollowers')
AddEventHandler('fivem-react-boilerplate-lua:getFollowers', function(data)
    print('Server event fivem-react-boilerplate-lua:getFollowers invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Follows WHERE FollowingID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendFollowers', source, result) -- Send the event to the correct client
            print('Sent followers data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:likePost')
AddEventHandler('fivem-react-boilerplate-lua:likePost', function(data)
    print('Server event fivem-react-boilerplate-lua:likePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_IG_Likes (UserID, PostID) VALUES (@UserID, @PostID)', {
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

RegisterServerEvent('fivem-react-boilerplate-lua:unlikePost')
AddEventHandler('fivem-react-boilerplate-lua:unlikePost', function(data)
    print('Server event fivem-react-boilerplate-lua:unlikePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('DELETE FROM Phone_IG_Likes WHERE UserID = @UserID AND PostID = @PostID', {
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

RegisterServerEvent('fivem-react-boilerplate-lua:addComment')
AddEventHandler('fivem-react-boilerplate-lua:addComment', function(data)
    print('Server event fivem-react-boilerplate-lua:addComment invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_IG_Comments (UserID, PostID, Comment) VALUES (@UserID, @PostID, @Comment)', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID,
        ['@Comment'] = data.Comment
    }, function(result)
        if result then
            TriggerClientEvent('fivem-react-boilerplate-lua:sendComment', source, data) -- Send the event to the correct client
            print('Added comment successfully')
        else
            print('Failed to add comment')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:getComments')
AddEventHandler('fivem-react-boilerplate-lua:getComments', function(data)
    print('Server event fivem-react-boilerplate-lua:getComments invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Comments WHERE PostID = @PostID', { ['@PostID'] = data.PostID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendComments', source, result) -- Send the event to the correct client
            print('Sent comments data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:getLikes')
AddEventHandler('fivem-react-boilerplate-lua:getLikes', function(data)
    print('Server event fivem-react-boilerplate-lua:getLikes invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute([[
        SELECT Phone_IG_Likes.UserID, Phone_IG_Users.Username 
        FROM Phone_IG_Likes 
        INNER JOIN Phone_IG_Users ON Phone_IG_Likes.UserID = Phone_IG_Users.UserID 
        WHERE Phone_IG_Likes.PostID = @PostID
    ]], { ['@PostID'] = data.PostID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendLikes', source, result) -- Send the event to the correct client
            print('Sent likes data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:addStory')
AddEventHandler('fivem-react-boilerplate-lua:addStory', function(data)
    print('Server event fivem-react-boilerplate-lua:addStory invoked')
    print('Received story data:', data.ImageURL)
    print('Received user data:', data.UserID)
    exports.ghmattimysql:execute('INSERT INTO Phone_IG_Stories (UserID, ImageURL, ExpiryTime) VALUES (@user, @imageURL, DATE_ADD(NOW(), INTERVAL 24 HOUR))', {
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

RegisterServerEvent('fivem-react-boilerplate-lua:getStories')
AddEventHandler('fivem-react-boilerplate-lua:getStories', function(data)
    print('Server event fivem-react-boilerplate-lua:getStories invoked')
    print('Data received:', json.encode(data))

    local source = source

    exports.ghmattimysql:execute('SELECT P.* FROM Phone_IG_Stories P JOIN Phone_IG_Follows F ON P.UserID = F.FollowingID WHERE F.FollowerID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))

            local storiesWithUsers = {} -- Table to hold stories with their respective user data
            local completedFetches = 0 -- Counter for completed user data fetches

            for i, story in ipairs(result) do
                exports.ghmattimysql:execute('SELECT UserID, Username, ProfilePicURL FROM Phone_IG_Users WHERE UserID = @UserID', { ['@UserID'] = story.UserID }, function(userResult)
                    completedFetches = completedFetches + 1 -- Increment the counter

                    if userResult and #userResult > 0 then
                        story.user = userResult[1] -- Append the user data to the story
                        table.insert(storiesWithUsers, story) -- Add the story to the table
                    else
                        print('Failed to fetch user for story')
                    end

                    -- If all fetches have completed, trigger the client event
                    if completedFetches == #result then
                        TriggerClientEvent('fivem-react-boilerplate-lua:sendStories', source, storiesWithUsers) 
                        print('Sent stories data to client')
                    end
                end)
            end
        else
            print('Failed to execute query')
        end
    end)
end)
RegisterServerEvent('fivem-react-boilerplate-lua:getStory')
AddEventHandler('fivem-react-boilerplate-lua:getStory', function(data)
    print('Server event fivem-react-boilerplate-lua:getStory invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Stories WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendStory', source, result) -- Send the event to the correct client
            print('Sent story data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:loginUser')
AddEventHandler('fivem-react-boilerplate-lua:loginUser', function(data)
    print('Server event fivem-react-boilerplate-lua:loginUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Users WHERE (Username = @Username OR Email = @Email) AND PasswordHash = @Password', {
        ['@Username'] = data.Username,
        ['@Email'] = data.Email,
        ['@Password'] = data.Password
    }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendUser', source, result[1]) -- Send the event to the correct client
            print('Sent user data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:registerUser')
AddEventHandler('fivem-react-boilerplate-lua:registerUser', function(data)
    print('Server event fivem-react-boilerplate-lua:registerUser invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_IG_Users (Username, Email, PasswordHash, FullName, Bio, ProfilePicURL) VALUES (@Username, @Email, @Password, @FullName, @Bio, @ProfilePicURL)', {
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

RegisterServerEvent('fivem-react-boilerplate-lua:savePost')
AddEventHandler('fivem-react-boilerplate-lua:savePost', function(data)
    print('Server event fivem-react-boilerplate-lua:savePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('INSERT INTO Phone_IG_SavedPosts (UserID, PostID) VALUES (@UserID, @PostID)', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID
    }, function(result)
        if result then
            print('Saved post successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:sendSavedPost', source, data)
        else
            print('Failed to save post')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:unsavePost')
AddEventHandler('fivem-react-boilerplate-lua:unsavePost', function(data)
    print('Server event fivem-react-boilerplate-lua:unsavePost invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('DELETE FROM Phone_IG_SavedPosts WHERE UserID = @UserID AND PostID = @PostID', {
        ['@UserID'] = data.UserID,
        ['@PostID'] = data.PostID
    }, function(result)
        if result then
            print('Unsaved post successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:sendUnsavedPost', source, data)
        else
            print('Failed to unsave post')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:getSavedPosts')
AddEventHandler('fivem-react-boilerplate-lua:getSavedPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:getSavedPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_SavedPosts WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendSavedPosts', source, result) 
            print('Sent saved posts data to client')
        else
            print('Failed to execute query')
        end
    end)
end)
RegisterServerEvent('fivem-react-boilerplate-lua:getOwnPosts')
AddEventHandler('fivem-react-boilerplate-lua:getOwnPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:getOwnPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Posts WHERE UserID = @UserID', { ['@UserID'] = data.UserID, }, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendOwnPosts', source, result) 
            print('Sent own posts data to client')
        else
            print('Failed to execute query')
        end
    end)
end)


RegisterServerEvent('fivem-react-boilerplate-lua:updateUser')
AddEventHandler('fivem-react-boilerplate-lua:updateUser', function(data)
    print('Server event fivem-react-boilerplate-lua:updateUser invoked')
    print('Data received:', json.encode(data))
    local source = source 
    -- Serialize the Bio field to a JSON string
    local bioJson = json.encode(data.Bio)

    exports.ghmattimysql:execute('UPDATE Phone_IG_Users SET Username = @Username, Email = @Email, FullName = @FullName, Bio = @Bio, ProfilePicURL = @ProfilePicURL WHERE UserID = @UserID', {
        ['@UserID'] = data.UserID,
        ['@Username'] = data.Username,
        ['@Email'] = data.Email,
        ['@FullName'] = data.FullName,
        ['@Bio'] = bioJson, 
        ['@ProfilePicURL'] = data.ProfilePicURL
    }, function(result)
        if result then
            print('Updated user successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:sendUser', source, data)
        else
            print('Failed to update user')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:getAllPosts')
AddEventHandler('fivem-react-boilerplate-lua:getAllPosts', function(data)
    print('Server event fivem-react-boilerplate-lua:getAllPosts invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Posts', {}, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendAllPosts', source, result) 
            print('Sent all posts data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:getAllUsers')
AddEventHandler('fivem-react-boilerplate-lua:getAllUsers', function(data)
    print('Server event fivem-react-boilerplate-lua:getAllUsers invoked')
    print('Data received:', json.encode(data))

    local source = source -- Get the server ID of the client that triggered the event

    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_Users', {}, function(result)
        if result then
            print('Query executed successfully')
            print('Query result:', json.encode(result))
            TriggerClientEvent('fivem-react-boilerplate-lua:sendAllUsers', source, result) 
            print('Sent all users data to client')
        else
            print('Failed to execute query')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:highlightStory')
AddEventHandler('fivem-react-boilerplate-lua:highlightStory', function(data)
    print('Server event fivem-react-boilerplate-lua:highlightStory invoked')
    print('Data received:', json.encode(data))
    local source = source 
    exports.ghmattimysql:execute('UPDATE Phone_IG_Stories SET ExpiryTime = @ExpiryTime WHERE StoryID = @StoryID', {
        ['@StoryID'] = data.StoryID,
        ['@ExpiryTime'] = data.ExpiryTime
    }, function(result)
        if result then
            print('Highlighted story successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:sendHighlightedStory', source, data)
        else
            print('Failed to highlight story')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:unhighlightStory')
AddEventHandler('fivem-react-boilerplate-lua:unhighlightStory', function(data)
    print('Server event fivem-react-boilerplate-lua:unhighlightStory invoked')
    print('Data received:', json.encode(data))
    local source = source 
    exports.ghmattimysql:execute('UPDATE Phone_IG_Stories SET ExpiryTime = DATE_ADD(Timestamp, INTERVAL 24 HOUR) WHERE StoryID = @StoryID', {
        ['@StoryID'] = data.StoryID
    }, function(result)
        if result then
            print('Updated ExpiryTime successfully')
            TriggerClientEvent('fivem-react-boilerplate-lua:sendUpdatedStory', source, data)
        else
            print('Failed to update ExpiryTime')
        end
    end)
end)

RegisterServerEvent('fivem-react-boilerplate-lua:sendMessage')
AddEventHandler('fivem-react-boilerplate-lua:sendMessage', function(data)
    print('Server event fivem-react-boilerplate-lua:sendMessage invoked')
    print('Data received:', json.encode(data))

    local source = source
    local sender = data.sender
    local receiver = data.receiver
    local message = data.message

    -- Insert the new message into the database
    exports.ghmattimysql:execute('INSERT INTO Phone_IG_DirectMessages (SenderID, ReceiverID, Message) VALUES (?, ?, ?)', {sender, receiver, message}, function(insertResult)
        if insertResult then
            print('Inserted message successfully')
            -- Fetch the inserted message from the database
            exports.ghmattimysql:execute('SELECT * FROM Phone_IG_DirectMessages WHERE SenderID = ? AND ReceiverID = ? AND Message = ?', {sender, receiver, message}, function(result)
                if result and #result > 0 then
                    local fullMessageData = result[1]
                    print('Fetched full message data:', json.encode(fullMessageData))
                    -- Notify the receiver about the new message
                    TriggerClientEvent('fivem-react-boilerplate-lua:receiveMessage', receiver, fullMessageData) 
                    print('Sent message data to receiver')
                    -- Notify the sender about the new message (optional)
                    TriggerClientEvent('fivem-react-boilerplate-lua:receiveMessage', sender, fullMessageData) 
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

RegisterServerEvent('fivem-react-boilerplate-lua:getAllMessages')
AddEventHandler('fivem-react-boilerplate-lua:getAllMessages', function(data)
    local src = source 
    print('Server event fivem-react-boilerplate-lua:getAllMessages invoked')
    print('Sender ID:', data.sender)
    print('Receiver ID:', data.receiver)

    -- Fetch all messages from the database between the sender and the receiver
    exports.ghmattimysql:execute('SELECT * FROM Phone_IG_DirectMessages WHERE (SenderID = ? AND ReceiverID = ?) OR (SenderID = ? AND ReceiverID = ?)', {data.sender, data.receiver, data.receiver, data.sender}, function(result)
        if result then
            print('Query executed successfully')
            print('Fetched messages:', json.encode(result))

            -- Send the fetched messages to the client
            TriggerClientEvent('fivem-react-boilerplate-lua:sendAllMessages', src, result)
            print('Sent messages to client')
        else
            print('Failed to execute query')
        end
    end)
end)