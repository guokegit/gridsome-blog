<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.article.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.article.author" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.article.date"/>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ $page.article.timeToRead }} min read</span>
            </div>
          </div>
        </div>

        <JournalContent :content="$page.article.content" />
        <g-image
            :src="$page.article.imgUrl.url"
            class="thumbnail"
        />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
  article:strapiArticle(id:$id){
    id
    title
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    imgUrl{
      url
    }
  }
}
</page-query>


<script>
import JournalContent from "@/components/JournalContent"

export default {
  components: {
    JournalContent
  },
  metaInfo () {
    console.log(this.$page)
    return {
      title: this.$page?.article?.title
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
