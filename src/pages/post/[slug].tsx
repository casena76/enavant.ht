import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Hidden from '@material-ui/core/Hidden'

import {
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share'

import SEO from "components/SEO"
import colors from "utils/colors"
import ArticleCard from "components/ArticleCard"
import { API_URL, TWITTER_HANDLE, APP_NAME } from "utils/constants"
import PostInterface from 'interfaces/PostInterface'
import { wpapi } from 'utils/wpapi'
import { mapPostFromResponse } from 'pages'
import Container from 'components/Container'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import Button from 'components/Button'
import TitleWithSubText from 'components/TitleWithSubText'
import Footer from 'components/Footer'

export default function Post({ post }: { post: PostInterface & { randoms: PostInterface[] } }) {
  const router = useRouter()

  const ShareButtons = () => {
    const url = `https://enavant.ht/post/${post.slug}`
    const title = `${post.title} - ${APP_NAME}`
    const hashtags = `EnAvant HT`

    return (
      <Grid container spacing={2} justify="space-around" style={{ width: 350, marginBottom: 20 }}>
        <Grid item>
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag={hashtags.split(' ').join(' #')}>
            <FacebookIcon size={48} style={{ borderRadius: 4, color: colors.facebook }} />
          </FacebookShareButton>
        </Grid>
        <Grid item>
          <TwitterShareButton
            url={url}
            title={title}
            via={TWITTER_HANDLE}
            hashtags={hashtags.split(' ')}>
            <TwitterIcon size={48} style={{ borderRadius: 4, color: colors.twitter }} />
          </TwitterShareButton>
        </Grid>
        <Grid item>
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={48} style={{ borderRadius: 4, color: colors.whatsapp }} />
          </WhatsappShareButton>
        </Grid>
        <Grid item>
          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={48} style={{ borderRadius: 4, color: colors.telegram }} />
          </TelegramShareButton>
        </Grid>
      </Grid>
    )
  }

  return router.isFallback ? <CircularProgress /> : (
    <>
      <SEO
        title={`${post.title}`}
        url={`${APP_NAME}/post/${post.slug}`}
        description={`${post.content && post.content.split('\n')[0]}`}
        image={post.image_url}
      />

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

      <section className="section-container">
        <Container>
          <Grid container>
            <Grid item md={2} />
            <Grid item md={8}>
              <TitleWithSubText title={post.title} containerStyle={{ marginTop: 30 }} />

              <Card>
                <img style={{
                  display: "block",
                  maxWidth: "100%"
                }} src={post.image_url}
                />
                <CardContent>
                  {/* <Typography variant="body2" color="textSecondary" component="div">
                    {post.date}
                  </Typography>
                  <br /> */}

                  <Typography component="div">
                    <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
                  </Typography>
                </CardContent>
                <CardActions>
                  <ShareButtons />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          {post.randoms ? (
            <>
              <br />
              <h3>Actualités du même genre</h3>
              <Grid container spacing={3}>
                {post.randoms.map((post: PostInterface) => (
                  <Grid item md={4} key={post.slug} style={{ marginBottom: 60 }}>
                    <ArticleCard post={post} />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : null}
        </Container>
      </section>

      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/about-header-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 220,
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        marginTop: 30,
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

      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await wpapi.posts().embed().get()

  const paths = posts.map((post: PostInterface) => `/post/${post.slug}`)

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  if (params) {
    const { slug } = params

    const posts = await wpapi.posts().slug(slug).embed().get()
    return {
      props: { post: mapPostFromResponse(posts[0]) },
      revalidate: 5
    }
  }

  return { props: {} }
}
