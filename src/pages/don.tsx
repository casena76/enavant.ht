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

const title = "Faire un Don"

export default function Profile() {
  const router = useRouter()
  const { auth } = useContext(AppContext)

  // useEffect(() => {
  //   if (auth) {
  //     if (!auth.isLoggedIn) router.replace("/login")
  //   }
  // }, [auth])

  return (
    <>
      <SEO
        title={title}
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
          <Grid container>
            <Grid item xs={12} sm={4} style={{ marginBottom: 30 }}>
              <h3>Donner 5 dollars</h3>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="24JA4KQH7BBCC" />
                <input type="hidden" name="item_name" value='Supporter le MOUVEMENT "EN AVANT" POUR CHANGER HAiTI ENSEMBLE' />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value="5" />
                <input
                  type="image" src="https://www.paypalobjects.com/fr_XC/i/btn/btn_donateCC_LG.gif"
                  style={{ border: 0 }}
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Bouton Faites un don avec PayPal"
                />
                <img alt="" style={{ border: 0 }} src="https://www.paypal.com/fr_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginBottom: 30 }}>
              <h3>Donner 10 dollars</h3>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="24JA4KQH7BBCC" />
                <input type="hidden" name="item_name" value='Supporter le MOUVEMENT "EN AVANT" POUR CHANGER HAiTI ENSEMBLE' />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value="10" />
                <input
                  type="image" src="https://www.paypalobjects.com/fr_XC/i/btn/btn_donateCC_LG.gif"
                  style={{ border: 0 }}
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Bouton Faites un don avec PayPal"
                />
                <img alt="" style={{ border: 0 }} src="https://www.paypal.com/fr_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginBottom: 30 }}>
              <h3>Donner 20 dollars</h3>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="24JA4KQH7BBCC" />
                <input type="hidden" name="item_name" value='Supporter le MOUVEMENT "EN AVANT" POUR CHANGER HAiTI ENSEMBLE' />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value="20" />
                <input
                  type="image" src="https://www.paypalobjects.com/fr_XC/i/btn/btn_donateCC_LG.gif"
                  style={{ border: 0 }}
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Bouton Faites un don avec PayPal"
                />
                <img alt="" style={{ border: 0 }} src="https://www.paypal.com/fr_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginBottom: 30 }}>
              <h3>Donner 50 dollars</h3>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="24JA4KQH7BBCC" />
                <input type="hidden" name="item_name" value='Supporter le MOUVEMENT "EN AVANT" POUR CHANGER HAiTI ENSEMBLE' />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value="50" />
                <input
                  type="image" src="https://www.paypalobjects.com/fr_XC/i/btn/btn_donateCC_LG.gif"
                  style={{ border: 0 }}
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Bouton Faites un don avec PayPal"
                />
                <img alt="" style={{ border: 0 }} src="https://www.paypal.com/fr_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginBottom: 30 }}>
              <h3>Montant Volontaire</h3>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="24JA4KQH7BBCC" />
                <input type="hidden" name="item_name" value='Supporter le MOUVEMENT "EN AVANT" POUR CHANGER HAiTI ENSEMBLE' />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image" src="https://www.paypalobjects.com/fr_XC/i/btn/btn_donateCC_LG.gif"
                  style={{ border: 0 }}
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Bouton Faites un don avec PayPal"
                />
                <img alt="" style={{ border: 0 }} src="https://www.paypal.com/fr_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Grid>
          </Grid>
        </Container >
      </section >

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