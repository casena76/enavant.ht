import React, { useState, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { useForm } from 'react-hook-form'
import { Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { MdError } from 'react-icons/md'


import colors from "utils/colors"
import Logo from "components/Logo"
import Button from "components/Button"
import { emailRegex } from "utils/validators"
import TextIcon from "components/TextIcon"
import SEO from "components/SEO"
import { AppContext } from "store/app-context"
import Container from "components/Container"
import Link from "next/link"
import useHttpClient from "hooks/useHttpClient"

const useStyles = makeStyles({
  errorTitle: {
    color: colors.red,
    fontSize: 13,
    marginTop: 15
  }
})

export interface Credentials {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()
  const styles = useStyles()
  const { client } = useHttpClient()
  const { auth, actions } = useContext(AppContext)
  const { register, errors, handleSubmit } = useForm<Credentials>({
    mode: 'onBlur'
  })
  const [loginError, setLoginError] = useState("")

  const handleLogin = async (credentials: Credentials) => {
    try {
      setLoginError("")

      const { data } = await client.post('/sanctum/token', {
        ...credentials,
        device_name: "spa-client"
      })
      // Do the actual login
      actions.doLogin(data, () => {
        const { from } = router.query
        const route = from ? `${from}` : '/'

        router.push(route)
      })
    } catch (err) {
      console.log(err)
      setLoginError(`Email ou Mot de Passe invalide.`)
    }
  }

  useEffect(() => {
    if (auth) {
      if (auth.isLoggedIn) router.replace("/")
    }
  }, [auth])

  return (
    <>
      <SEO title={`Connexion`} />
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <Link href="/">
            <a>
              <Logo style={{ width: 250 }} />
            </a>
          </Link>
          {/* <h1 style={{ fontSize: 12 }}>To continue, log in to MP3 Pam.</h1> */}

          <form onSubmit={handleSubmit(handleLogin)} noValidate>
            {loginError && <h3 className={styles.errorTitle} dangerouslySetInnerHTML={{ __html: loginError }} />}
            <Grid container style={{ maxWidth: 450 }}>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  inputRef={register({
                    required: "L'email est requis",
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
                  inputRef={register({
                    required: "Le Mot de Passe est requis",
                    minLength: {
                      value: 6,
                      message: "Le Mot de Passe doit avoir au moins 6 characters."
                    }
                  })}
                  name="password"
                  id="password"
                  label="Votre Mot de Passe"
                  type="password"
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password && (
                    <TextIcon
                      icon={<MdError />}
                      text={errors.password.message}
                    />)}
                />
              </Grid>
            </Grid>

            <Button style={{
              background: colors.orange,
              color: colors.white,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              marginTop: 12,
              marginBottom: 24
            }} title="Connexion" />
          </form>

          <p>
            Pas de compte ? {' '}
            <Link href="/signup">
              <a style={{ color: colors.orange, fontWeight: 'bold' }}>
                Créez le votre votre.
              </a>
            </Link>
          </p>
        </Container>
      </section >
    </>
  )
}