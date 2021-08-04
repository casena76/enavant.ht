import Grid from '@material-ui/core/Grid'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarker,
} from 'react-icons/fa'
import TextField from '@material-ui/core/TextField'
import { MdError } from 'react-icons/md'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import TitleWithSubText from 'components/TitleWithSubText'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import { useState } from 'react'
import Container from 'components/Container'
import { useForm } from 'react-hook-form'
import { emailRegex } from 'utils/validators'
import TextIcon from 'components/TextIcon'
import { useSignupStyles } from './signup'

const title = "Adhérer"

export interface ContactData {
  name: string
  email?: string
  phone?: string
  address?: string
  age?: string
  message: string
}

export default function Contact() {
  const styles = useSignupStyles()
  const { register, errors, handleSubmit, reset } = useForm<ContactData>({
    mode: 'onBlur'
  })
  const [contactError, setContactError] = useState("")
  const [messageSent, setMessageSent] = useState(false)

  const handleSendEmail = async (contactData: ContactData) => {
    try {
      setContactError("")

      await fetch('/api/send-mail', {
        method: "POST",
        body: JSON.stringify(contactData),
      })

      setMessageSent(true)
    } catch (err) {
      // console.log(err.response)
      setContactError(`Une error s'est produite. Essayez à nouveau.`)
    }
  }

  return (
    <>
      <SEO title={title} />

      <section style={{
        paddingTop: 20,
        paddingBottom: 15,
      }}>
        <Container>
          <NavBar style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
            showButtons
          />
        </Container>
      </section>

      <section style={{
        background: Colors.orange,
      }}>
        <Container>
          <Grid container>
            <Grid item md={1}></Grid>
            <Grid item md={10}>
              <TitleWithSubText containerStyle={{
                marginTop: 0,
                marginBottom: 40,
                paddingTop: 40,
              }}
                title="mouvement pour changer haïti ensemble"
                titleStyle={{ color: Colors.white }}
              />

              <Grid container spacing={3} style={{
                backgroundColor: Colors.white,
              }}>
                <Grid item xs={12} sm={12} md={6} style={{ padding: 40 }}>
                  <TitleWithSubText
                    containerStyle={{
                      margin: 0,
                      paddingTop: 30,
                      textAlign: "left"
                    }}
                    title={title}
                  />

                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    color: Colors.evenDarkerGray,
                    textTransform: 'uppercase',
                    fontSize: 16,
                    lineHeight: 2
                  }}>
                    <li><FaMapMarker color={Colors.orange} /> &nbsp;44, impasse lescot, Laboule 22</li>
                    <li><FaPhone color={Colors.orange} /> &nbsp;(509) 4621 2121</li>
                    <li style={{
                      display: "flex",
                      alignItems: "center"
                    }}><FaEnvelope color={Colors.orange} /> &nbsp; contact@enavant.ht</li>
                  </ul>
                </Grid>

                <Grid item xs={12} sm={12} md={6} style={{ padding: 40 }}>
                  <>
                    {messageSent && (
                      <>
                        <TitleWithSubText
                          containerStyle={{
                            margin: 0,
                            paddingTop: 30,
                            textAlign: "left"
                          }}
                          // titleStyle={{ color: Colors.green }}
                          title="Message reçu !"
                        />
                        <Button title="Envoyer nouveau message !" style={{
                          background: Colors.orange,
                          color: Colors.white,
                          fontWeight: 'bold'
                        }} onClick={() => {
                          setMessageSent(false)
                          reset()
                        }} />
                      </>
                    )}
                    {!messageSent && (
                      <form onSubmit={handleSubmit(handleSendEmail)} noValidate>
                        {!!contactError && <h3 className={styles.errorTitle} dangerouslySetInnerHTML={{ __html: contactError }} />}
                        <Grid container style={{ maxWidth: 400 }}>
                          <Grid item xs={12}>
                            <TextField
                              style={{ width: '100%' }}
                              inputRef={register({
                                required: "Le nom complet est requis",
                              })}
                              name="name"
                              id="name"
                              label="Votre Nom Complet"
                              type="text"
                              margin="normal"
                              error={!!errors.name}
                              helperText={errors.name && (
                                <TextIcon
                                  icon={<MdError />}
                                  text={errors.name.message}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              style={{ width: '100%' }}
                              inputRef={register({
                                pattern: {
                                  value: emailRegex,
                                  message: "L'email n'est pas valide"
                                }
                              })}
                              name="email"
                              id="email"
                              label="Votre Email"
                              type="email"
                              margin="normal"
                              error={!!errors.email}
                              helperText={errors.email && (
                                <TextIcon
                                  icon={<MdError />}
                                  text={errors.email.message}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              style={{ width: '100%' }}
                              inputRef={register()}
                              name="phone"
                              id="phone"
                              label="Votre Numéro de Téléphone"
                              type="phone"
                              margin="normal"
                              error={!!errors.phone}
                              helperText={errors.phone && (
                                <TextIcon
                                  icon={<MdError />}
                                  text={errors.phone.message}
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              style={{ width: '100%' }}
                              inputRef={register()}
                              name="address"
                              id="address"
                              label="Votre Addresse"
                              type="text"
                              margin="normal"
                              error={!!errors.address}
                              helperText={errors.address && (
                                <TextIcon
                                  icon={<MdError />}
                                  text={errors.address.message}
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              style={{ width: '100%' }}
                              inputRef={register()}
                              name="age"
                              id="age"
                              label="Votre Âge"
                              type="number"
                              margin="normal"
                              error={!!errors.age}
                              helperText={errors.age && (
                                <TextIcon
                                  icon={<MdError />}
                                  text={errors.age.message}
                                />
                              )}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              style={{ width: '100%' }}
                              inputRef={register({
                                required: "Le message est requis"
                              })}
                              name="message"
                              id="message"
                              label="Pourquoi vous voulez nous rejoindre"
                              margin="normal"
                              multiline
                              error={!!errors.message}
                              helperText={errors.message && (
                                <TextIcon
                                  icon={<MdError />}
                                  text={errors.message.message}
                                />)}
                            />
                          </Grid>
                        </Grid>

                        <Button style={{
                          background: Colors.orange,
                          color: Colors.white,
                          textTransform: 'uppercase',
                          fontWeight: 'bold',
                          marginTop: 12,
                          marginBottom: 24
                        }} title="Envoyer" />
                      </form>
                    )}
                  </>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.673682774139!2d-72.32142838537897!3d18.49843448742191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb9e83cab3128a1%3A0x44f39da27d5c1fcc!2sCapital%20Bank%20Laboule%2012!5e0!3m2!1sen!2sht!4v1598376742675!5m2!1sen!2sht"
        width="100%"
        height="360"
        frameBorder="0"
        style={{ border: 0, marginBottom: 0, paddingBottom: 0 }}
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}>
      </iframe>

      <Footer />
    </>
  )
}
