function Posts(){
    return {
        posts: [
          {
    
            "title": "What Traveling Greece For 2 Weeks Taught Me About Life",
            "date": "Jun 21, 2021 • 11 min read",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
            "image": "https://source.unsplash.com/collection/225/800x600",
            "tag": "Travel",
            "user":{
                "username":"George Costanza",
                "profile": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "id": 1
          },
          {
    
            "title": "Why You Should Never Order 12 Chicken Nuggets and Fries",
            "date": "Aug 1, 2021 • 7 min read",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
            "image": "https://source.unsplash.com/collection/898/800x600",
            "tag": "Food Theory",
            "user":{
                "username":"George Costanza",
                "profile": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "id": 2

          },
      

        ],
        otherposts:[
          {
            "img": "https://source.unsplash.com/collection/205/800x600",
            "title": "Why you don't need more than 3 pieces of clothing",
            "description": "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
             "id": 1
          },
          {
            "img": "https://source.unsplash.com/collection/245/800x600",
            "title": "Why you should cook with your family together everyday",
            "description": "Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.",
             "id": 2
          },

        ],
      
      
        show: function show(id){
          window.location.href=`details.html?id=${id}`
        }

    }
}
const getPosts = ()=>({
  url:"./db.json",
  Posts: [],
  post: {},
  init(){
    this.getData()
    //wach

    this.$watch('post',(newValue, oldValue) =>{
      console.log(newValue, oldValue)
      if(newValue.length > 0){
        this.required = false
      }
    })
  },
  getData(){
    this,isLoading = true

    //backend com fetchs
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      this.posts = data
      this.isLoading= false
    })
  },
})