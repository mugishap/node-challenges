function showGetAllTweets(){
    document.getElementById("allTweets").style.display = 'flex'
}

function showGetAllUsers(){
    document.getElementById("allAccounts").style.display = 'flex'
}

function showGetUserById(){
    document.getElementById("allTweets").style.display = 'flex'
}

function showGetUserByScreenName(){
    document.getElementById("userByName").style.display = 'flex'
}

function showGetTweetById(){
    document.getElementById("tweetsById").style.display = 'flex'
}
function showGetAllLinks(){
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
    fetch('http://localhost:2000/allTweets', {
        method: "GET",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(res => res.text())
        .then(data => document.getElementById("result").innerHTML = data)

})
//prevent default action 
//get tweet info given the tweet id
formId.addEventListener('load', e => {
    e.preventDefault()
})
formId.addEventListener('submit', e => {
    // let route = 'http://localhost:2000/tweetInfo/'+ tweetID
    e.preventDefault()
    fetch('http://localhost:2000/tweetInfo/' + tweetID, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.text())
        .then(data => document.getElementById("result2").innerHTML = data)
})
//first prevent the default actions of a form 
//get all users on the platform
formAllUsers.addEventListener('load', e => {
    e.preventDefault()
})
formAllUsers.addEventListener('submit', e => {
    e.preventDefault()
    fetch('http://localhost:2000/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.text())
        .then(data => document.getElementById("result3").innerHTML = data)//.normalize('NFKD')
    //console.log(data)
})
//prevent default form action
//get user by screen name
formScreenName.addEventListener('load', e => {
    e.preventDefault()
})
formScreenName.addEventListener('submit', e => {
    e.preventDefault()
    fetch('http://localhost:2000/user/' + screen_name, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.text())
        .then(data => document.getElementById("byName").innerHTML = data)
})