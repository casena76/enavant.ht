import Grid from '@material-ui/core/Grid'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Logo from 'components/Logo'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import Container from 'components/Container'
import TitleWithSubText from 'components/TitleWithSubText'
import { useStyles } from 'pages'

const title = "Notre Mouvement"

export default function Mouvement() {
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
              <h1 className={styles.firstTitle}>Mouvement pour changer <br />Haïti ensemble</h1>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container>
          <TitleWithSubText
            title={title}
            subTextStyle={{ fontSize: 16 }}
            subText={`<p>“D'aucuns pensent que le déclin continu de notre pays est inévitable et que le pire est à venir. Les fondateurs du mouvement « EN AVANT » osent prétendre autrement. En effet, une prise en charge de la politique par un leadership collectif et visionnaire peut conduire Haïti sur la voie du progrès et du développement”.</p>`}
          />

          <TitleWithSubText
            titleStyle={{ color: Colors.darkerBlueText }}
            subTextStyle={{ fontSize: 16 }}
            title="PRÉAMBULE"

            subText={`
              <p>Haïti connaît aujourd’hui une crise multiforme qui affecte toutes les sphères de la société. Face à la gravité de cette crise, il faut désormais un sursaut national et un renouvellement de la classe dirigeante pour redresser la barque nationale.</p>
              <p>Le changement en Haïti passe par la prise du pouvoir par une nouvelle équipe prête à adopter les réformes majeures et imposer les politiques publiques adéquates pour restaurer l’autorité de l’État et remettre le pays sur les rails du développement.</p>
              <p>L’heure est venue pour que les forces progressistes (notamment au sein de la jeunesse) s’organisent aux fins d’occuper les espaces de pouvoir. Face au spectre du chaos, il faut une prise de conscience et un engagement ferme des nouvelles générations et des profils rassurants. Face à la dégradation des institutions et de la gouvernance, il faut un rassemblement des personnalités et des forces de progrès pour construire une offre politique alternative et inclusive. C’est ce qui a motivé un ensemble d’organisations sociales et citoyennes, de personnalités et des leaders de différents secteurs à se rassembler au sein du Mouvement EN AVANT.</p>
              <p>Au sein du mouvement EN AVANT, nous sommes portés par le devoir de freiner la descente aux enfers d’Haïti. Face aux mutations d’un monde troublé, face aux défis qui nous attendent, nous voulons rassembler les bonnes consciences d’Haïti, sans exclusion, autour d’un idéal de progrès, de modernité et de justice.</p>
              <p>Nous voulons être une force de propositions et un acteur institutionnel de premier rang. À terme, EN AVANT soutient l’idée de construire une grande alliance des forces de changement pour arriver à l’émergence d’une plateforme électorale gagnante (quand les conditions seront réunies pour qu’il y ait des élections en Haiti). Pour cela, nous sommes prêts à travailler avec tous les partis, toutes les forces vives de la société, qui se retrouvent sur projet de rupture.</p>
              <p>Nous sommes les héritiers(ères) d’un long combat. Il n'est pas d'ordre établi d'injustices et de misères qu'on ne puisse éradiquer. Cet idéal est celui des combattants de 1804, de 1844 ; de 1934 ; de 1946, de 1987. Plus de deux siècles après l’indépendance, notre résolution demeure intacte. Tant de gens aimeraient participer à une grande œuvre de construction nationale mais ne voient comment le faire. Tant de gens veulent rompre avec le fatalisme, la résignation, l’autoflagellation et les aveux d’impuissance.  Le mouvement entend offrir à cette majorité silencieuse un espace d’expression et de militance, une raison d’espérer, un moyen d’agir pour CHANGER les choses.</p>
              <p>Aujourd’hui un grand désordre généralisé caractérise le fonctionnement de l’État. Il faut remettre de l’ordre ! De l’ordre dans notre système judiciaire, dans nos finances publiques, dans le fonctionnement de nos institutions, dans notre système éducatif, dans notre système financier, dans notre système de sécurité sociale, dans notre police nationale, dans notre diplomatie…. Remettre de l’ordre dans la République doit être un objectif majeur de la décennie qui s’ouvre.</p>
              <p>Mais, il ne peut y avoir de république sans la certitude pour tous de jouir des droits fondamentaux : se loger, se nourrir, travailler, se cultiver, se soigner, s’éduquer et vivre en sécurité.   En ce sens, nous serons guidés par l’idéal christophien : un idéal de grandeur, de fierté et de dignité pour Haïti. Nous avons le devoir d’être optimiste et courageux afin de ne jamais baisser les bras. A ce propos, le nom EN AVANT a été inspirée de Capois-la-mort qui, face aux boulets et à la mitraille, s’est couvert de gloire en 1803 en attaquant les troupes françaises au cri de EN AVANT, EN AVANT !</p>
              <p>Nous devons ensemble bâtir un pays à la hauteur des rêves d’Henry Christophe, de Capois-la-mort et des pères fondateurs de la nation. Un pays où plus de 90% de la population a un emploi, qui atteint l’autosuffisance alimentaire, entre autres. Mais cela exige une transformation profonde d’Haïti. Pour le Mouvement EN AVANT, cela suppose un PROJET NATIONAL organisé autour de 22 piliers.</p>
            `}
          />
        </Container>
      </section>
      <Footer />
    </>
  )
}
