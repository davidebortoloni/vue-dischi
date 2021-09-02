Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    albums: [],
  },
  methods: {},
  computed: {
    sortedAlbums() {
      let sortedAlbums = this.albums;
      sortedAlbums.sort(function (a, b) {
        return a.year - b.year;
      });
      return sortedAlbums;
    },
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
      });
  },
});
