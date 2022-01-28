const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('album_id');
console.log(albumId)


console.log("https://jsonplaceholder.typicode.com/photos?albumId="+albumId)
fetch("https://jsonplaceholder.typicode.com/photos?albumId="+albumId)
.then(res=>res.json())
.then(photos=>{

//     const imagesList=document.createElement("div")
//     imagesList.classList.add("images-list");
//     document.body.prepend(imagesList)
//     photos.map(photo=>{
//         const imageElement=document.createElement("img")
//         imagesElement.src=photo.thumbnailUrl
// imagesList.append(imageElement);

// imageElement.addEventListener("click", function(){
//     console.log(index)
// })
//         console.log(photo);
//     })
   
    console.log(photos)

    allImages=document.querySelector("div")
    let newImage=document.createElement("div")
    newImage.setAttribute("class", "lightgallery")
    let items=[]
    var pswpElement = document.querySelectorAll('.pswp')[0];
    photos.map(photo=>{
    // build items array
    var item = 
        {
            src: `${photo.url}`,
            w: 600,
            h: 400
        }
        
items.push(item)
    
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };
    
    // Initializes and opens PhotoSwipe







    async function firstAsync() {
      
        const text = await setTimeout(() => {
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default,items, options);

    gallery.init();
        }, 2000);
        return text;
      }
      firstAsync();

    })})
    