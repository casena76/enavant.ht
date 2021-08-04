import Grid from '@material-ui/core/Grid'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import TitleWithSubText from 'components/TitleWithSubText'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import Button from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import { mapPostFromResponse } from 'pages'
import { wpapi } from 'utils/wpapi'
import PostInterface from 'interfaces/PostInterface'
import Container from 'components/Container'

const title = "Actualités"

interface Props {
  posts: PostInterface[]
}

export default function Actualites({ posts }: Props) {
  return (
    <>
      <SEO title={title} />

      <section className="section-container" style={{
        paddingTop: 20,
        paddingBottom: 15
      }}>
        <Container>
          <NavBar style={{
            // color: Colors.orange,
            paddingLeft: 0,
            paddingRight: 0,
          }}
            showButtons
          />
        </Container>
      </section>
      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/about-header-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 220,
        paddingTop: 20,
        display: "flex",
        alignItems: "center"

      }}>
        <Container style={{ flex: 1 }}>
          <Grid container>
            <Grid item md={5}>
              <Logo
                transparent
                style={{
                  width: 250
                }}
              />
            </Grid>

            <Grid item md={7}>
              <h1 style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                textTransform: "uppercase",
              }}>Mouvement pour changer <br />Haïti ensemble</h1>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container>
          <Grid container>
            <Grid item md={2} />
            <Grid item md={8}>
              <TitleWithSubText
                title="Actualités"
                subText={`
                  <p>“D'aucuns pensent que le déclin continu de notre pays est inévitable et que le pire est à venir. Les fondateurs du mouvement « EN AVANT » osent prétendre autrement. En effet, une prise en charge de la politique par un leadership collectif et visionnaire peut conduire Haïti sur la voie du progrès et du développement”.</p>
                `}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item md={4} key={post.slug} style={{ marginBottom: 60 }}>
                <ArticleCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const posts = await wpapi.posts().param({ per_page: 50 }).embed().get()

  return {
    props: {
      posts: posts.map(mapPostFromResponse)
    },
    revalidate: 5
  }

  // return { props: { posts: [] } }
}