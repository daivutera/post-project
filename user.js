const queryParams=window.location.search;
console.log(queryParams)
const urlParams= new URLSearchParams(queryParams);
const userId=urlParams.get("user_id")
const postId=urlParams.get("post_id")

if(userId){
fetch("https://jsonplaceholder.typicode.com/users/"+ userId)
.then(res=>res.json())
.then(user=>{
    console.log(user);
    const userInfo=document.createElement("div");
    userInfo.classList.add("user-info");
    const userName=document.createElement("h2");
    userName.classList.add("user-name");
    userName.textContent=`${user.name}(${user.username})`

    const userPersonalInfo=document.createElement("ul")
userPersonalInfo.classList.add("user-personal-info")
userPersonalInfo.innerHTML=
`<li>Email:<a href="mailto:${user.email}">${user.email}</a></li>
<li>Address: <a href="#">${user.address.street} st.,${user.address.suite}, ${user.address.city} (zipcode ${user.address.zipcode})</a></li>
<li>Phone: <a href="tel:${user.phone}">${user.phone}</a></li>
<li>Website: <a href="http://${user.website}" targer="_blank">${user.website}</a></li>
<li>Work: ${user.company.name}</li>

<iframe src="https://www.google.com/maps/embed/v1/place?key=MANOKEY&q=${user.address.geo.lat},${user.address.geo.lng}" frameborder="0" width="800px" height="400px"></iframe>

<h2>All posts list of this author:</h2>`

    userInfo.append(userName, userPersonalInfo);
    document.body.prepend(userInfo);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
.then(res=>res.json())
.then(post=>{
    let allPosts=document.createElement("ul")
    post.map(onepost=>{
       
        let onePost=document.createElement("li")
        let oneLinkedPost=document.createElement("a")
        oneLinkedPost.setAttribute("href","/user.html")
        allPosts.setAttribute("class", "posts")
        onePost.prepend(oneLinkedPost)
        allPosts.prepend(onePost)
        oneLinkedPost.innerHTML=onepost.title
        userInfo.append(allPosts)
    })
    let allAlbums=document.createElement("h2")
    allAlbums.innerHTML="All albums list of author:"
    userInfo.append(allAlbums)


})


async function firstAsync() {
    const text = await setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(res=>res.json())
        .then(album=>{
            let allAlbumsList=document.createElement("ul")
            album.map(onealbum=>{
                
                let oneAlbum=document.createElement("li")
                let oneLinkedAlbum=document.createElement("a")
                oneLinkedAlbum.setAttribute("href","/album.html?album_id?")
                allAlbumsList.setAttribute("class", "albums")
                oneAlbum.prepend(oneLinkedAlbum)
                allAlbumsList.prepend(oneAlbum)
                oneLinkedAlbum.innerHTML=onealbum.title
                userInfo.append(allAlbumsList)
                console.log("albumu logas")
            })
        });
    }, 50);
    return text;
  }
  firstAsync();
})}else{
    document.body.innerHTML= `<h1>Tokio vartotojo nėra</h1>`
}