Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    albums: [],
    genreSelected: "All",
  },
  methods: {
    sortAlbums() {
      let sortedAlbums = this.albums;
      sortedAlbums.sort(function (a, b) {
        return a.year - b.year;
      });
      return sortedAlbums;
    },
  },
  computed: {
    filteredAlbums() {
      const sortedAlbums = this.sortAlbums();
      let filteredAlbums = sortedAlbums;
      if (this.genreSelected !== "All") {
        filteredAlbums = sortedAlbums.filter(
          (album) => album.genre === this.genreSelected
        );
      }
      return filteredAlbums;
    },
    genres() {
      const genres = [];
      this.albums.forEach((album) => {
        if (!genres.includes(album.genre)) {
          genres.push(album.genre);
        }
      });
      return genres;
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
