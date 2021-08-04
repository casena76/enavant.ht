import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import SEO from "components/SEO"
import Container from 'components/Container'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import Button from 'components/Button'
import TitleWithSubText from 'components/TitleWithSubText'
import Footer from 'components/Footer'
import { AppContext } from "store/app-context"

const title = "Mon Profil"

export default function Profile() {
  const router = useRouter()
  const { auth } = useContext(AppContext)

  useEffect(() => {
    if (auth) {
      if (!auth.isLoggedIn) router.replace("/login?from=/profil")
    }
  }, [auth])

  return (
    <>
      <SEO
        title={title}
        url={`/profil`}
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
            <Grid item md={1} />
            <Grid item md={10}>
              <TitleWithSubText title={title} containerStyle={{ marginTop: 30 }} />
            </Grid>
          </Grid>
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