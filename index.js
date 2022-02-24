let tweetID, screen_name

let getID = e => {
    tweetID = e.target.value
}
let getScreenName = e => {
    tweetID = e.target.value
}
let formAllTweets = document.getElementById("form-all-tweets")
let formAllUsers = document.getElementById("form-all-users")
let formId = document.getElementById("form-tweet-id")
let formScreenName = document.getElementById("form-user-screenName")
//prevent the default activities of the form on submit and load
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
formId.addEventListener('load', e => {
    e.preventDefault()
})
formId.addEventListener('submit',e =>{
    // let route = 'http://localhost:2000/tweetInfo/'+ tweetID
    e.preventDefault(),
    fetch('http://localhost:2000/tweetInfo/'+ toString(tweetID),{
        method:"GET",
        headers:{'Content-Type':'application/json'}
    }).then(res => res.text())
    .then(data => console.log(data))
})
formAllUsers.addEventListener('load',e=>{
    e.preventDefault()
})
formAllUsers.addEventListener('submit',e=>{
    e.preventDefault(),
    fetch('http://localhost:2000/users',{
        method:'GET',
        headers:{'Content-Type':'application/json'}
    })
    .then(res => res.text())
    .then(data => document.getElementById("result3").innerHTML = data)//.normalize('NFKD')
    //console.log(data)
})