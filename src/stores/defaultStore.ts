import { defineStore } from "pinia";
import { ref } from "vue";
import { Article } from "../components/Article.vue";

export const useDefaultStore = defineStore("articles", () => {
  const articles = ref([] as Article[]);
  const tags = ref([] as string[]);
  const places = ref([] as string[]);
  const filteredArticles = ref([] as Article[]);
  const selectedTag = ref("ALL");
  const selectedPlace = ref("ALL");

  function filterArticles() {
    if (selectedTag.value === "ALL" && selectedPlace.value === "ALL") {
      filteredArticles.value = articles.value;
    } else {
      if (selectedTag.value != "ALL" && selectedPlace.value === "ALL") {
        filteredArticles.value = articles.value.filter((article) =>
          article.tags.includes(selectedTag.value)
        );
      } else if (selectedTag.value === "ALL" && selectedPlace.value != "ALL") {
        filteredArticles.value = articles.value.filter((article) =>
          article.places?.includes(selectedPlace.value)
        );
      } else {
        filteredArticles.value = articles.value.filter((article) =>
          (article.places?.includes(selectedPlace.value) && article.tags.includes(selectedTag.value))
        );
      }
    }
  }

  // function filterArticlesByPlace() {
  // if (selectedPlace.value === "ALL") {
  // 	filteredArticles.value = articles.value;
  //   } else {
  // 	filteredArticles.value = articles.value.filter((article) =>
  // 	  article.places.includes(selectedPlace.value)
  // 	);
  //   }
  // }

  return {
    articles,
    filteredArticles,
    tags,
    places,
    selectedTag,
    selectedPlace,
    filterArticles,
  };
});
