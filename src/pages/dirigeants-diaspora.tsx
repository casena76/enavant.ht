import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
// import Button from 'components/Button'
import TransparentNavBar from 'components/TransparentNavBar'
import TitleWithSubText from 'components/TitleWithSubText'
import Donate from 'components/Donate'
import Container from 'components/Container'
import { dirigeants } from './dirigeants'
import { useStyles } from 'pages'
import Join from 'components/Join'

const title = "Nos Dirigeants en Diaspora"


export default function Dirigeants() {
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogText, setDialogText] = useState('')
  const styles = useStyles()

  const handleOpenDialog = ({ name, bio }: { name: string, bio: string }) => {
    if (!bio.trim().length) return

    setDialogTitle(name)
    setDialogText(bio)
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <SEO title={title} />

      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/home-header-2.jpg" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 500,
        paddingTop: 20

      }}>
        <Container>
          <TransparentNavBar
            showButtons
            containerStyle={{
              marginTop: 30
            }}
          />

          <div style={{
            textAlign: 'center',
            paddingTop: 50,
            paddingBottom: 20
          }}>
            <h1 className={styles.firstTitle}>Mouvement pour changer <br />Haïti ensemble</h1>
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
        <Container>
          <TitleWithSubText
            title={title}
            subText={`Le mouvement En Avant est dirigé par une coordination formée de
            personnalités de différents secteurs <br /> qui sont profondément engagés dans
            le combat pour une nouvelle Haïti.`}
          />

          <Grid container spacing={3}>
            {dirigeants.filter(d => d.location === 'diaspora' && d.image != 'silhouette.jpg').map((dirigeant, index) => (
              <Grid item md={4} sm={12} key={index}>
                <div style={{ cursor: "pointer" }} onClick={(e) => handleOpenDialog(dirigeant)}>
                  <img
                    style={{ display: "block", maxWidth: "100%" }}
                    src={`/assets/images/dirigeants/${dirigeant.image}`}
                  />

                  <div style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                    textAlign: 'center'
                  }}>
                    <h4 style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      textTransform: "uppercase",
                      color: Colors.darkerBlue
                    }}>{dirigeant.name}</h4>
                    <h5 style={{
                      fontSize: 10,
                      color: Colors.gray,
                      marginBottom: 12,
                      textTransform: "uppercase",
                    }}>{dirigeant.role}</h5>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
          <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={openDialog}>
            <DialogTitle
              id="simple-dialog-title"
              style={{ textTransform: "uppercase" }}
            >Biographie de “{dialogTitle}”</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div dangerouslySetInnerHTML={{ __html: dialogText }} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Fermer
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </section>
      <Footer />
    </>
  )
}
