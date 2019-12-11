<template>
  <div class="main">
    <h1>Message Board</h1>

    <button  class="btn btn-primary" v-on:click.prevent="formVisible = true" v-show="formVisible === false">New Post</button>

    <form @submit.prevent="addNewPost" v-show="formVisible">
      <div class="form-element">
        <label for="poster">Name:</label>
        <input v-model="newPost.poster" id="poster" type="text" required/>
      </div>
      <div class="form-element">
        <label for="post">Message Text:</label>
        <textarea v-model="newPost.post" id="post" required></textarea>
      </div>
      <button :disabled="isFormValid === false">Submit</button>
      <button type="cancel" @click.prevent="resetForm">Cancel</button>
    </form> 

    <div class="post" v-for="post in postsArray" v-bind:key="post.postId">
      <board-post
        :postId="post.postId"
        :posterName="post.posterName"
        :startingPostText="post.postText"
        v-on:deleteEvent="reloadPosts()"
      />
    </div>
  </div>
</template>

<script>
import API_Service from "@/service/API_Service.js";
import BoardPost from "@/components/BoardPost.vue";
import auth from "../auth";

export default {
  name: "msg-board",
  components: {
    BoardPost
  },
  data() {
    return {
      formVisible: false,
      newPost: {
        id: null,
        poster: "",
        post: ""
      },
      postsArray: []
    };
  },
  computed: {
    isFormValid() {
      return Boolean(this.newPost.poster && this.newPost.post);
    },
    updatedPostsArray: function() {
      return this.postsArray;
    }
  },
  created() {
    API_Service.getBoardPosts().then(posts => (this.postsArray = posts));
  },
  methods: {
    resetForm() {
      this.newPost = { poster: "", post: "" };
      this.formVisible = false;
    },
    addNewPost() {
      this.createNewPost();
      this.resetForm();
    },
    reloadPosts() {
      API_Service.getBoardPosts().then(posts => (this.postsArray = posts));
    },
    createNewPost() {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/boardposts/`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + auth.getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postId: this.newPost.id,
          posterName: this.newPost.poster,
          postText: this.newPost.post
        })
      })
        .then(response => {
          if (response.ok) {
            this.reloadPosts();
          }
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial;
}

div.main {
  margin: 1rem 0;
}

div.main div.well-display {
  display: flex;
  justify-content: space-around;
}

div.main div.well-display div.well {
  display: inline-block;
  width: 15%;
  border: 1px black solid;
  border-radius: 6px;
  text-align: center;
  margin: 0.25rem;
}

div.main div.well-display div.well span.amount {
  color: darkslategray;
  display: block;
  font-size: 2.5rem;
  cursor: pointer;
}

div.main div.post {
  border: 1px black solid;
  border-radius: 6px;
  padding: 1rem;
  margin: 10px;
}

div.main div.post div.rating {
  height: 2rem;
  display: inline-block;
  vertical-align: top;
  margin: 0 0.5rem;
}

div.main div.post div.rating img {
  height: 100%;
}

div.main div.post p {
  margin: 20px;
}

div.main h3 {
  display: inline-block;
}

div.main h4 {
  font-size: 1rem;
}

div.main .form-element {
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
}

div.main .form-element label {
  padding: 0.5em 1em 0.5em 0;
  flex: 1;
}

div.main .form-element input,
div.main .form-element select,
div.main .form-element textarea {
  flex: 2;
}

div.main .form-element textarea {
  height: 10rem;
}

div.main .form-element input,
div.main .form-element button {
  padding: 0.5em;
}

div.main .form-element button {
  background: gray;
  color: white;
  border: 0;
}
</style>