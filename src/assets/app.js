function Posts(){
    return {
      post: {},
      getPosts: async function getPosts() {
        let response = await fetch('./db.json')

        const jsonData = await response.json();

        this.post = jsonData.posts.find(post => post.id === this.currentPostId)
        
        
        return jsonData.posts;

      
      },
      getPost: async function getPost() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id')
        let response = await fetch('./db.json')

        const jsonData = await response.json();
        this.post = jsonData.posts.find(post => post.id === parseInt(id));

        console.table(this.post.sommary);
      
      }, 
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
