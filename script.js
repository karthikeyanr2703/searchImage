let search = document.querySelector(".searchBox input");
let images = document.querySelectorAll(".imageBox");
search.addEventListener('keyup', function(e) {
   
    if(e.key =="Enter"){
        let searchValue = search.value
        let value = searchValue.toLowerCase();
        images.forEach(image => {
           
            if(value == image.dataset.name){
                image.style.display = 'block';
            }
            else{
                image.style.display = 'none'
            }
            
        });
    }
  });
  search.addEventListener("keyup", function(e) {
    if(search.value != ""){
        return 
    }
    images.forEach(image => {
        image.style.display ="block"
    });

  })