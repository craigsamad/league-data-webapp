<template>
<div>
    <div>
      <h4>{{ posterName }}</h4>
      <p>
        <input
          type="text"
          v-model="postText"
          :disabled="!isEditing"
          :class="{view: !isEditing}"
        />
      </p>
      <button @click="isEditing = !isEditing" v-if="!isEditing">Edit</button>
      <button @click="updatePost(postId)" v-else-if="isEditing">Save</button>
      <button v-if="isEditing" @click="cancel">Cancel</button>
      <button type="submit" @click="deletePost(postId)">Delete</button>
    </div>
</div>
</template>

<script>
import auth from "../auth";

export default {
  props: {
      postId: Number,
      posterName: String,
      startingPostText: String
  },
  data() {
    return {
      isEditing: false,
      postText: this.startingPostText
    };
  },
  methods: {
    cancel() {
      this.isEditing = false;
    },
    deletePost(id) {
      fetch(`${process.env.VUE_APP_REMOTE_API}/api/boardposts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + auth.getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ postId: id })
      })
        .then(response => {
          if (response.ok) {
            this.$emit('deleteEvent');
          }
        })
        .catch(err => console.error(err));
    },
    updatePost(id) {
      fetch(`${process.env.VUE_APP_REMOTE_API}/api/boardposts/${id}`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + auth.getToken(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postId: id,
          posterName: this.poster,
          postText: this.postText
        })
      })
        .then(response => {
          if (response.ok) {
            this.isEditing = false;
          }
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style>
</style>