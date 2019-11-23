<template>
  <div class="all-time-stats">
    <h1>{{ msg }}</h1>
    <div>
      <table>
        <th>Owner Name</th>
        
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalStats",
  props: {
    msg: String,
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
