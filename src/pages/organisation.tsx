import Grid from '@material-ui/core/Grid'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import TitleWithSubText from 'components/TitleWithSubText'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import { CSSProperties } from 'react'
import Container from 'components/Container'
import { useStyles } from 'pages'

const coordNationale = [
  `COORDONATRICE-ADJOINTE AFFAIRES FÉMININES & SOCIAL |  NANCY VILCÉ`,
  `COORDONNATEUR-ADJOINT CHARGÉ DU SECRÉTARIAT-GÉNÉRAL |  MIKERLANGE REGISTRE`,
  `COORDONNATEUR-ADJOINT CHARGÉ DES BRANCHES EXTÉRIEURES |  SAINT-JEAN JOSEPH`,
  `COORDONNATEUR-ADJOINT AUX AFFAIRES ADMINISTRATIVES ET FINANCIÈRES |  HERALD MORISSEAU`,
  `Coordonnateur-adj chargé de la stratégie numérique|  STEPHANE VINCENT`,
  `Coordonnateur-adjoint chargé jeunesse |  RYSDAËL DUVERSAINT`,
  `Coordon-adjoint chargé des relations internationales |  ING PATRICK FIGARO`,
  `COORDO-ADJOINT CHARGÉ AGRICULTURE ET PAYSANNERIE|  FRITZBERT SILENCIEUX`,
  `COORDONATEUR-ADJOINT CHARGÉ RELATIONS AVEC LES UNIVERSITÉS |  EMOL JEUNE`,
  `Coordonateur-adjoint chargé insertion sociale |  GLADYS JOSEPH`,
  `COORDONATRICE-ADJOINTE CHARGÉ DES RELATIONS AVEC LES ÉCOLES PRIVÉS ET PUBLIQUES |  DARAH SINVILLE`,
  `COORDONATRICE-ADJOINTE CHARGÉ DES PROJETS SOCIAUX |  DR JOHANNE GEFFRARD`,
  `COORDONATRICE-ADJOINTE EN CHARGE DES RELATIONS AVEC LA PRESS |  ANNE-SARHA LOZAMAR`,
  `Membre | Coordonnateur-adjoint aux affaires politiques`,
  `Membre |  Sterens Hyppolite`,
  `Membre |  STEPHANIE SOPHIE LOUIS`,
  `Membre |  Pierre Ludghini`,
  `Membre |  Guett St Thomas`,
  `Membre |  Luckner Clermont`,
  `Membre |  Jefferson Merisier`,
  `Membre |  WOOD HOLDEN DAVID`,
  `Membre |  DANOVE DIEUFORT`,
  `Membre |  KINSLEY JEAN`,
  `Membre |  KENLEY JEUNE`,
]


const coordDepartmentale = [
  `COORDONNATEUR DÉPARTEMENTAL NORD | SONCEAU GAMAEL`,
  `COORDONNATEUR DÉPARTEMENTAL NORD-EST | DR PATRICK ETIENNE`,
  ` COORDONNATEUR DÉPARTEMENTAL NORD-OUEST |Membre `,
  ` COORDONNATEUR DÉPARTEMENTAL ARTIBONITE | RYSDAEL DUVERSAINT `,
  ` COORDONNATEUR DÉPARTEMENTAL POUR LE CENTRE |Membre `,
  ` COORDONNATEUR DÉPARTEMENTAL POUR L’OUEST | PAST. HOLLY FLORESTAL  `,
  ` COORDONNATEUR DÉPARTEMENTAL SUD | MARIE-JOSIE PIERRE `,
  ` COORDONNATEUR DÉPARTEMENTAL SUD-EST | PETERSON ANTENOR `,
  ` COORDONNATEUR DÉPARTEMENTAL GRAND’ANSE |Membre `,
]

const coordBrancheExterieure = [
  `COORDONNATEUR BRANCHE EXTÉRIEURE MIAMI | MARC ANTOINE LEVEILLE`,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE MONTREAL | FRED LAGRANDEUR `,
  `  COORDONNATEUR BRANCHE EXTÉRIEURE EUROPE | SAINT-JEAN JOSEPH`,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE NY | FLORENAL JOSEPH `,
  `  COORDONNATEUR BRANCHE EXTÉRIEURE BOSTON | ALAIN MENELAS`,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE ATLANTA | TALIA JEANTY `,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE WASH DC | CASSANDRA HONORAT `,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE DE SAINT-DOMINGUE |Membre`,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE ANTILLES FRANCAISE |Membre`,
  ` COORDONNATEUR POUR LA BRANCHE EXTÉRIEURE AMÉRIQUE LATINE |Membre`,
  ` COORDONNATEUR BRANCHE EXTÉRIEURE AFRIQUE |Membre`,
]



interface PersonWithTextProps {
  title?: string,
  subTitle?: string,
  titleStyle?: CSSProperties,
  containerStyle?: CSSProperties
}

const PersonWithText = ({ title, subTitle, titleStyle, containerStyle }: PersonWithTextProps) => (
  <div style={{
    textAlign: "center",
    ...containerStyle
  }
  } >
    <img
      src="/assets/images/person.png"
      style={{
        width: 100,
        display: "inline-block",
        marginBottom: 15
      }}
    />
    <h4 style={{
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.darkerBlueText,
      textTransform: "uppercase",
      ...titleStyle
    }}>{title}</h4>
    <h5 style={{
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.orange,
      textTransform: "uppercase",
      ...titleStyle
    }}>{subTitle}</h5>
  </div>
)

interface VerticalBorderProps {
  color?: string,
  height?: number,
  width?: number,
  style?: CSSProperties
}

const VerticalBorder = ({ color, height, width, style }: VerticalBorderProps) => (
  <div style={{
    margin: "0 auto",
    width: width || 1,
    borderRight: `1px solid ${color || Colors.orange}`,
    height: height || 30,
    ...style
  }} />
)

const title = "Notre Organisation"

export default function Organisation() {
  const styles = useStyles()
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
        backgroundImage: 'url(' + "/assets/images/organisation-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 220,
        paddingTop: 20,
        display: "flex",
        alignItems: "center"

      }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={5}>
              <Logo
                transparent
                style={{
                  width: 250
                }}
              />
            </Grid>

            <Grid item md={7}>
              <h1 className={styles.firstTitle}>Mouvement pour changer Haïti ensemble</h1>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container style={{}}>
          <TitleWithSubText containerStyle={{
            marginBottom: 30
          }}
            title={title}
          />
          <TitleWithSubText
            containerStyle={{
              marginTop: 0
            }}
            titleStyle={{
              fontSize: 22,
              fontWeight: "bold",
              color: Colors.blue
            }}
            title="Les organes dirigeants du mouvement"
          />

          <p style={{
            textAlign: "center",
            fontSize: 12,
            color: Colors.gray
          }}>
            La Convention Nationale (ou CN) est l’autorité suprême qui décide sur toutes les questions relatives à l’orientation générale et aux activités du mouvement.<br />
            La convention nationale comprend l’ensemble des délégués choisis au niveau national par les branches départementales et au niveau de la diaspora <br />
            Le CEN assure le bon fonctionnement de la plateforme et veille à l’application des grandes orientations politiques, sociales et économiques élaborées par la CN.
          </p>

          <TitleWithSubText
            title="Coordination Nationale"
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.darkerBlueText
            }}
          />

          {/* <div style={{ marginBottom: 30 }}> */}
          <PersonWithText
            title="Coordonnateur National"
            subTitle="Jerry Tardieu"
            titleStyle={{}}
          />

          <VerticalBorder
            style={{
              marginBottom: 0
            }}
          />

          <div style={{
            width: "90%",
            margin: "0 auto",
            border: `1px solid ${Colors.orange}`,
            borderBottom: 0,
            display: "flex",
            justifyContent: "center"
          }}>
            <VerticalBorder height={50} />
          </div>
          <Grid container spacing={3}>
            {coordNationale.map((text, key) => {
              const [role, name] = text.split('|')

              return (
                <Grid item key={key} md={4} style={{ marginBottom: 60 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 100,
                      width: 100,
                      backgroundColor: Colors.orange,
                      borderRadius: "50%",
                      position: "absolute",
                      border: `5px solid ${Colors.white}`
                    }}>
                      <img
                        src="/assets/images/person-white.png"
                        style={{
                          width: 50,
                        }}
                      />
                    </div>
                    <div style={{
                      padding: 15,
                      backgroundColor: Colors.lightGray,
                      textTransform: "uppercase",
                      borderTopRightRadius: 45,
                      borderBottomRightRadius: 45,
                      marginLeft: 50,
                      paddingLeft: 60
                    }}>
                      <h3 style={{
                        fontSize: 12,
                        color: Colors.darkerBlueText
                      }}>{role}</h3>
                      <h4 style={{
                        fontSize: 13,
                        color: Colors.orange,
                        fontWeight: 'bold'
                      }}>{name}</h4>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>

          <TitleWithSubText
            title="Coordination Départementale"
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.darkerBlueText
            }}
          />

          <div style={{
            width: "90%",
            margin: "0 auto",
            border: `1px solid ${Colors.orange}`,
            borderBottom: 0,
            display: "flex",
            justifyContent: "center"
          }}>
            <VerticalBorder height={50} />
          </div>
          <Grid container spacing={3}>
            {coordDepartmentale.map((text, key) => {
              const [role, name] = text.split('|')

              return (
                <Grid item key={key} md={4} style={{ marginBottom: 60 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 100,
                      width: 100,
                      backgroundColor: Colors.orange,
                      borderRadius: "50%",
                      position: "absolute",
                      border: `5px solid ${Colors.white}`
                    }}>
                      <img
                        src="/assets/images/person-white.png"
                        style={{
                          width: 50,
                        }}
                      />
                    </div>
                    <div style={{
                      padding: 15,
                      backgroundColor: Colors.lightGray,
                      textTransform: "uppercase",
                      borderTopRightRadius: 45,
                      borderBottomRightRadius: 45,
                      marginLeft: 50,
                      paddingLeft: 60
                    }}>
                      <h3 style={{
                        fontSize: 12,
                        color: Colors.darkerBlueText
                      }}>{role}</h3>
                      <h4 style={{
                        fontSize: 13,
                        color: Colors.orange,
                        fontWeight: 'bold'
                      }}>{name}</h4>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>




          <TitleWithSubText
            title="COORDINATION DES BRANCHES EXTÉRIEURES"
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.darkerBlueText
            }}
          />

          <div style={{
            width: "90%",
            margin: "0 auto",
            border: `1px solid ${Colors.orange}`,
            borderBottom: 0,
            display: "flex",
            justifyContent: "center"
          }}>
            <VerticalBorder height={50} />
          </div>
          <Grid container spacing={3}>
            {coordBrancheExterieure.map((text, key) => {
              const [role, name] = text.split('|')

              return (
                <Grid item key={key} md={4} style={{ marginBottom: 60 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 100,
                      width: 100,
                      backgroundColor: Colors.orange,
                      borderRadius: "50%",
                      position: "absolute",
                      border: `5px solid ${Colors.white}`
                    }}>
                      <img
                        src="/assets/images/person-white.png"
                        style={{
                          width: 50,
                        }}
                      />
                    </div>
                    <div style={{
                      padding: 15,
                      backgroundColor: Colors.lightGray,
                      textTransform: "uppercase",
                      borderTopRightRadius: 45,
                      borderBottomRightRadius: 45,
                      marginLeft: 50,
                      paddingLeft: 60
                    }}>
                      <h3 style={{
                        fontSize: 12,
                        color: Colors.darkerBlueText
                      }}>{role}</h3>
                      <h4 style={{
                        fontSize: 13,
                        color: Colors.orange,
                        fontWeight: 'bold'
                      }}>{name}</h4>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  )
}
