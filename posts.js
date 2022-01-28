// 1. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
// 1.1. Pavadinimą.
// 1.2. Pastraipą su įrašo (post) turiniu.
// 1.3. Autorių. Tai turi būti nuoroda. Kol kas ji gali niekur nevesti.
// 2. Po kiekvienu įrašu (post) gali būti komentarų (sukurti variantus įrašui, kuris neturi komentarų, kuris turi vieną komentarą ir kuris turi daugiau nei vieną komentarą). Kiekvienas komentaras turi:
// 2.1. Komentaro pavadinimą.
// 2.2. Komentaro turinį - pastraipą.
// 2.3. Komentarą parašiusio asmens el. pašto adresą.
//https://jsonplaceholder.typicode.com/

// 3. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
// 3.1. Pilnas vardas.
// 3.2. Vartotojo vardas / nick'as.
// 3.3. El. paštas.
// 3.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps. Kol kas naudoti bet kokią Google Map vietovę.
// 3.5. Telefono numeris.
// 3.6. Internetinio puslapio adresas.
// 3.7. Įmonės, kurioje dirba, pavadinimas.
// 4. Šiame puslapyje turės būti atvaizduojama:
// 4.1. Visi vartotojo parašyti įrašai (posts). Post'ų įrašuose nereikia atvaizduoti komentarų. Kiekvienas post'as turi turėti nuorodą.
// 4.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės:
// 4.2.1. Albumo pavadinimą, kuris turi būti nuoroda. Kol kas nuoroda gali niekur nevesti.

// 5. Pagrindiniame puslapyje pridėti skiltį, kurioje atvaizduojamas albumų sąrašas. Kiekvienas albumas turės:
// 5.1. Pavadinimą, o paspaudus ant jo - nukreipiama į albumą.
// 5.2. Albumo autoriaus vardą.
// 5.3. Nuotrauką.

// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
// 7.1. Įrašo (post) pavadinimą.
// 7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
// 7.3. Įrašo turinį.
// 7.4. Įrašo komentarus. Komentarai turi būti atvaizduojami tokiu pačiu principu kaip ir pagrindiniame puslapyje.
// 7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į naują puslapį. Jame bus atvaizduojami visi šio vartotojo įrašai.
// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
// 8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
// 8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.



fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")//budas kaip parasyt, kad ne visus postus istrauktu ?
//_limit=10
.then(res=>res.json())
.then(data=>{
    data.map(object=>{console.log(object.title)
        let postId=object.id
        let wrappers =document.createElement("div")
        wrappers.setAttribute("class", "wrappers")
        let user=`user-${object.userId}`
        let user1 = object.userId
        let forTitle = document.createElement("h1")
        forTitle.setAttribute("class", "title")
        forTitle.textContent=object.title
        let forBody = document.createElement("h2")
        let forEmail= document.createElement("h4")
        let forUser=document.createElement("h4")
        let forComments=document.createElement("div")
        let commentsName=document.createElement("h2")
        commentsName.setAttribute("class", "commentsName")
        let commentsWrapper=document.createElement("div")
        commentsName.innerHTML="Comments:"
        forComments.append(commentsName)
        forComments.append(commentsWrapper)
        
        forEmail.setAttribute("id", user)
        forBody.textContent=object.body
        wrappers.append(forTitle, forBody, forUser, forEmail, forComments)
        document.querySelector(".forWrappers").append(wrappers)

        fetch("https://jsonplaceholder.typicode.com/users")//+object.userId
        .then(res=>res.json())
        .then(data=>{
            data.map(object=>{
            console.log(object.email);
            console.log(object.id);
            console.log(object.name)
     if(user1==object.id){
         forEmail.textContent=object.email
         forUser.innerHTML=`<a href="user.html?user_id=${object.id}"target="_blank">Author: ${object.name}</a>`
     }
       })
    
       fetch(`https://jsonplaceholder.typicode.com/posts/${object.id}/comments`)  
       .then(res=>res.json())
       .then(data=>{
           if(data.length>0){
           data.map((object, i)=>{
               if(i==0){console.log("labas")}
            if(postId==object.postId){
                if (i==0){
           console.log(object.postId);
        let singleComment=document.createElement("div")
        singleComment.setAttribute("class", "show")
        singleComment.textContent=object.body
        let commentorEmail=document.createElement("h4")
        commentorEmail.setAttribute("class", "email")
        commentorEmail.textContent=object.email
        let commentName=document.createElement("h3")
        commentName.setAttribute("class", "commentName")
        commentName.innerHTML=object.name
        singleComment.append(commentorEmail)
        commentsWrapper.prepend(commentName, singleComment)
    }else{
            let singleComment=document.createElement("div")
        singleComment.setAttribute("class", "hide")
        singleComment.textContent=object.body
        let commentorEmail=document.createElement("h3")
        commentorEmail.setAttribute("class", "email")
        commentorEmail.textContent=object.email
        let commentName=document.createElement("h3")
        commentName.setAttribute("class", "commentName")
        commentName.innerHTML=object.name
        singleComment.append(commentorEmail)
        commentsWrapper.prepend(commentName, singleComment)
        }
    }
    let showMoreComments=document.createElement("span")
    showMoreComments.setAttribute("class", "forMoreComments")
    showMoreComments.innerHTML=`<a href="#" target="_blank">More comments</a>`
    commentsWrapper.append(showMoreComments)
   singleComment.innerHTML=document.querySelector(".show")
      })}
 
    })
 
    })})})
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=30")
    .then(res=>res.json())
    .then(data=>{
        let albumList=document.createElement("ul")
        data.map(onealbum=>{
            let userIdForAlbums=onealbum.userId
            let albumListItem=document.createElement("li")
            let albumListItemLinked=document.createElement("a")
            albumListItemLinked.setAttribute("href", `album.html?album_id=${onealbum.id} `)
            albumListItemLinked.textContent=onealbum.title
            albumListItem.prepend(albumListItemLinked)
            albumList.prepend(albumListItem)
            let allAlbumsList=document.querySelector(".sidebar")
            allAlbumsList.append(albumList)
        
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            data.map(user=>{
                if(userIdForAlbums==user.id){
                    console.log("autoriu vardai")
                    let authorOfAlbum=document.createElement("span")
                    authorOfAlbum.innerHTML=`<i>(${user.name})</i>`
                    albumListItem.append(authorOfAlbum)
                }
            })})
            
        })})
    





