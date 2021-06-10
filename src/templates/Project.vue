<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title" v-html="$page.projects.title" />
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span
                  class="category"
                  v-for="(category, index) in $page.projects.categories"
                  :key="index"
                  v-text="category"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.projects.date"/>
            </div>
          </div>
        </div>
        <g-image
            :src="`${GRIDSOME_API_URL}${$page.projects.thumbnail.url}`"
            :alt="$page.projects.title"
            class="thumbnail"
        />

        <div v-html="$page.projects.content" class="content" />

      </div>

    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
  projects:strapiProjects(id:$id){
    id
    title
    date (format: "YYYY")
    content
    thumbnail{
      url
    }
    categories
    project_bg_color
    project_fg_color
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    console.log(this.$page)
    return {
      title: this.$page.projects.title,
      bodyAttrs: {
        style: `background-color: ${this.$page.projects.project_bg_color ? this.$page.projects.project_bg_color : 'var(--color-base)'}; color: ${this.$page.projects.project_fg_color ? this.$page.projects.project_fg_color : 'var(--color-contrast)'}`
      }
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
