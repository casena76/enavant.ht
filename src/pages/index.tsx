import { FaPaperPlane } from 'react-icons/fa'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"

import SEO from 'components/SEO'
import TransparentNavBar from 'components/TransparentNavBar'
import Footer from 'components/Footer'
import Colors from 'utils/colors'
import Donate from 'components/Donate'
import Join from 'components/Join'
import Container from 'components/Container'
import Button from 'components/Button'
import Link from 'next/link'
import Routes from 'utils/routers'
import { wpapi } from 'utils/wpapi'
import TitleWithSubText from 'components/TitleWithSubText'
import ArticleCard from 'components/ArticleCard'
import PostInterface from 'interfaces/PostInterface'

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: -150,
  },
  firstTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
    textTransform: "uppercase",
    textAlign: "justify",
    [theme.breakpoints.up('sm')]: {
      fontSize: 75,
    }
  }
}))

export default function Index({ posts }: { posts: PostInterface[] }) {
  const styles = useStyles()

  return (
    <>
      <SEO />
      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/home-header-2.jpg" + ')',
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: 500,
        paddingTop: 20

      }}>
        <Container>
          <TransparentNavBar />

          <div style={{
            textAlign: 'center',
            paddingTop: 50,
            paddingBottom: 200
          }}>
            <h1 className={styles.firstTitle}>Mouvement pour changer  Haïti ensemble</h1>
            <div style={{ marginTop: 200 }}>
              <Donate />
              &nbsp;
              <Join />
            </div>

          </div>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container className={styles.container}>
          <Grid container style={{
            boxShadow: "0px 5px 7px 0px rgba(0,0,0,0.35)"
          }}>
            <Grid item md={6} style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 24,
              paddingBottom: 24,
              background: Colors.white
            }}>
              <h2 style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: Colors.darkerBlueText,
                textTransform: "uppercase",
              }}>Mouvement <br /> pour changer <br />Haïti ensemble</h2>

              <p style={{
                color: Colors.gray,
                fontSize: 12,
                marginBottom: 30
              }}>
                “D'aucuns pensent que le déclin continu de notre pays est inévitable
                et que le pire est à venir. Les fondateurs du mouvement <strong>« EN AVANT »</strong> osent
                prétendre autrement.”
              </p>

              <div>
                <Button
                  title="plus"
                  style={{
                    borderRadius: 20,
                    backgroundColor: Colors.orange,
                    color: 'white',
                    textTransform: "uppercase",
                    paddingLeft: 40,
                    paddingRight: 40,
                    paddingTop: 5,
                    paddingBottom: 5,
                  }} />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                paddingTop: 30,
                height: 0,
                overflow: 'hidden',
              }
              }>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/DyB86KKDdCI?autoplay=1&rel=0`}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
            </Grid>
          </Grid>

          {posts.length > 0 && (
            <>
              <TitleWithSubText title="Actualités" />

              <Grid container spacing={3}>
                {posts.map((post) => (
                  <Grid item sm={6} md={4} key={post.id}>
                    <ArticleCard post={post} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </section>

      <section className="section-container">
        <img src="/assets/images/hands.png"
          style={{ width: "100%" }}
        />
      </section>

      <section className="section-container" style={{
        paddingTop: 150,
        paddingBottom: 150
      }}>
        <Container>
          <Grid container>
            <Grid item md={5} style={{}}>
              <h2 style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.blue,
                textTransform: "uppercase",
              }}>Nous comptons sur votre <br /> <span style={{ color: Colors.orange }}>soutien</span></h2>

              <p style={{ color: Colors.gray }}>Faites un don pour renforcer notre action sur le terrain.</p>

              <Donate style={{ marginBottom: 24 }} />
            </Grid>
            <Grid item md={7} style={{}}>
              <Grid container spacing={3}>
                {[Routes.movement, Routes.leaders, Routes.fight, Routes.chart].map(p => (
                  <Grid item sm={6} style={{ marginBottom: 24 }} key={p.url}>
                    <Link href={p.url} passHref>
                      <a style={{ textDecoration: "none", color: "black" }}>
                        <h4 style={{
                          color: Colors.orange,
                          marginBottom: 20
                        }}>
                          <span style={{
                            boxShadow: "0px 0px 5px 5px rgba(223,52,71,0.15)",
                            borderRadius: '50%',
                            padding: 8,
                            fontSize: 12,
                            fontWeight: 'bold',
                            marginRight: 12,
                          }}>
                            <FaPaperPlane style={{}} />
                          </span>
                          <span style={{

                          }}>{p.name}</span>
                        </h4>
                        <p style={{
                          fontSize: 12
                        }}>
                          {p.intro}
                        </p>
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const posts = await wpapi.posts().param({ per_page: 3 }).embed().get()

  return {
    props: {
      posts: posts.map(mapPostFromResponse)
    },
    revalidate: 10
  }

  // return { props: { posts: [] } }
}


export const mapPostFromResponse = (post: any) => ({
  id: post.id,
  slug: post.slug,
  title: post.title.rendered,
  image_url: post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url,
  excerpt: post.excerpt.rendered,
  content: post.content.rendered,
  link: post.link,
  date: post.date
})