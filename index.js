function showGetAllTweets() {
    document.getElementById("allTweets").style.display = 'flex'
}

function showGetAllUsers() {
    document.getElementById("allAccounts").style.display = 'flex'
}

function showGetUserById() {
    document.getElementById("allTweets").style.display = 'flex'
}

function showGetUserByScreenName() {
    document.getElementById("userByName").style.display = 'flex'
}

function showGetTweetById() {
    document.getElementById("tweetsById").style.display = 'flex'
}
function showGetAllLinks() {
    document.getElementById("link").style.display = 'flex'
}





let tweetID, screen_name

let getID = e => {
    tweetID = e.target.value
}
let getScreenName = e => {
    screen_name = e.target.value
}
let formAllTweets = document.getElementById("form-all-tweets")
let formAllUsers = document.getElementById("form-all-users")
let formId = document.getElementById("form-tweet-id")
let formScreenName = document.getElementById("form-user-screenName")
//prevent the default activities of the form on submit and load
//for geting all tweets on the platform
formAllTweets.addEventListener('load', e => {
    e.preventDefault()
})
formAllTweets.addEventListener('submit', e => {
    e.preventDefault()
    fetch('https://twitter-get-apis-demo.herokuapp.com/allTweets', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(data => document.getElementById("resultAllTweets").innerHTML = arrangeAllTweetsOutput(data))
})
let arrangeAllTweetsOutput = data => {
    let holder = []
    let text1
    let text2
    for (i = 0; i < data.length; i++) {
        text1 = "Tweet Id No " + (i + 1) + " : " + "\n" + data[i]["Tweet Id"] + `<br>`
        text2 = "Tweet " + (i + 1) + " posted by: " + data[i]["User who tweeted"].Name + ".\n"
        let text = text1 + text2 + `<hr>`
        holder.push(text)

    }
    return holder.join("\n")
}
//prevent default action 
//get tweet info given the tweet id
formId.addEventListener('load', e => {
    e.preventDefault()
})
formId.addEventListener('submit', e => {
    // let route = 'https://twitter-get-apis-demo.herokuapp.com/tweetInfo/'+ tweetID
    e.preventDefault()
    fetch('https://twitter-get-apis-demo.herokuapp.com/tweetInfo/' + tweetID, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(data => document.getElementById("result2").innerHTML = arrangeByTweetId(data))
})
//function to arrange the output
const arrangeByTweetId = data => {
    let holder = []
    let tweetId, user, time
    for (i = 0; i < data.length; i++) {
    tweetId = "Tweet ID: " + data[i]["Tweet Id"] + `<br>`
    user = "Courtesy of: " + data[i]["User who posted the tweet"] + `<br>`
    time = "Created on: " + data[i]["Created at"] + `<hr>`
       holder.push(tweetId + user + time) 
    }
    return holder
}
//laslty call the function in second then

//first prevent the default actions of a form 
//get all users on the platform
formAllUsers.addEventListener('load', e => {
    e.preventDefault()
})
formAllUsers.addEventListener('submit', e => {
    e.preventDefault()
    fetch('https://twitter-get-apis-demo.herokuapp.com/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => document.getElementById("resultUsers").innerHTML = arrangeAllUsersOutput(data))
    // console.log(data)
})
//arrange the users
let arrangeAllUsersOutput = data => {
    let holder = []
    let name, screenName
    for (i = 0; i < data.length; i++) {
        name = "Name: " + data[i].Name + "." + `<br>`
        screenName = "Username: " + data[i].Username + "." + `<hr>`
        holder.push(name + screenName)
    }
    return holder.join(' ')
}
//
//prevent default form action
//get user by screen name
formScreenName.addEventListener('load', e => {
    e.preventDefault()
})
formScreenName.addEventListener('submit', e => {
    e.preventDefault()
    fetch('https://twitter-get-apis-demo.herokuapp.com/user/' + screen_name, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => document.getElementById("byName").innerHTML = arrangeScreenNameOutput(data))
})
const arrangeScreenNameOutput = data => {
    let holder = []
    let name, screenName, followers, following
    for (i = 0; i < data.length; i++) {
        name = "Full Name: " + data[i]["Full names"] + "." + `<br>`
        screenName = "Screen Name: " + data[i]["Screen name"] + "." + `<br>`
        followers = "Followers: " + data[i]["Followers"] + "." + `<br>`
        following = "Following: " + data[i]["Following"] + "." + `<hr>`
        holder.push(name + screenName + followers + following)
    }
    return holder
}


//Stupid comment