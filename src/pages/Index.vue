<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.acticles.edges" />
  </Layout>
</template>

<page-query>
query {
	projects: allStrapiProjects {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail{
          url
        }
      }
    }
  },
  acticles:allStrapiArticle (perPage: 2) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
