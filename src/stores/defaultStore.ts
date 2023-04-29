import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Article } from '../components/Article.vue'

export const useDefaultStore = defineStore('articles', () => {
  const articles = ref([] as Article[])
  const tags = ref([] as string[])
  const filters = ref({ tags: [] as string[], places: [] as string[] })
  const places = ref([] as string[])
  const filteredArticles = ref([] as Article[])

  function filterArticles() {
    let a = []
    if (filters.value.tags.length) {
      let _a = []
      for (const tag of filters.value.tags) {
        _a.push(articles.value.filter((article) => article.tags?.includes(tag)))
      }
      a.push(_a.flat())
    }
    if (filters.value.places.length) {
      let _b = []
      for (const place of filters.value.places) {
        _b.push(
          articles.value.filter((article) => article.places?.includes(place))
        )
      }
      a.push(_b.flat())
    }

    const sortedArticles = a.flat().length
      ? [...new Set(a.flat())]
      : articles.value
    filteredArticles.value = sortedArticles
      .sort(
        (b, a) =>
          new Date(a.published_at).getTime() -
          new Date(b.published_at).getTime()
      )
      .slice(0, 9)
  }

  return {
    articles,
    filteredArticles,
    tags,
    places,
    filters,
    filterArticles
  }
})
