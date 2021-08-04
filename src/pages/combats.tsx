import Grid from '@material-ui/core/Grid'
import makeStyles from "@material-ui/core/styles/makeStyles"

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import TitleWithSubText from 'components/TitleWithSubText'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import Container from 'components/Container'
import { useStyles } from 'pages'

const combats = [
  {
    header: `Construire un État fort à visage humain`,
    text: `
      <p>Un État fort, moderne, efficace, socialement responsable, transparent et au service du citoyen. Un État créateur de richesse pour tous par le travail et le rendement. Un État démocratique respectant les droits civils et politiques. Un État fondé sur les valeurs morales et l’éthique. Un État unitaire, sans parti pris. Un État prônant une justice équitable et accessible à tous. Un État imposant le respect de l’intégrité de son territoire. Un État assurant la sécurité des vies et des biens de chaque citoyen. Un État priorisant l’excellence. Un État respectant les valeurs individuelles. Un État assurant le minimum de bien-être à sa population (santé, éducation, logement, etc.). Un État dictant les règles du jeu et jouant son rôle d’arbitre pour créer un environnement propice à l’investissement privé massif créateur d’emplois.</p>
    `
  },
  {
    header: `Favoriser une économie créatrice d’emplois`,
    text: `
      <p>Une économie forte dont la croissance inclusive est tirée par des milliers de petites, moyenne et micro entreprises qui bénéficient d’accès privilégié au crédit. L’objectif recherché est une révolution de la croissance par la dynamisation des « secteurs déclencheurs » que sont, en autres, l'agriculture et l’agro-industrie, l'élevage et la pêche, l'énergie et les infrastructures, le tourisme, l'industrie légère (Petite et Moyenne Industrie - PMI), la construction et le logement.</p>
      <p>La pression fiscale aujourd’hui est moins de 10%. Elle doit doubler en moins de 5 ans. EN AVANT encourage la transparence, la reddition de comptes et la lutte contre la corruption sous toutes ses formes. EN AVANT prône autant de marchés que possible mais autant d’État que nécessaire.</p>
    `
  },
  {
    header: `Soutenir la Justice sociale et les solidarités`,
    text: `
    <p>Des services sociaux de base pour tous incluant l'éducation, la formation professionnelle, la santé, l'eau potable, la protection sociale. Notre société est traversée par des rapports d’exploitation. Il faut en finir. Le plus grand nombre vit dans la misère. Nous voulons une répartition plus juste de richesses à l’échelle nationale. Mais, vouloir la justice sociale ne se réduit pas à une meilleure redistribution des richesses. Il ne peut y avoir de République sans la certitude pour tous de jouir des droits fondamentaux : se loger, se nourrir, travailler, se cultiver, se soigner, s’éduquer et vivre en sécurité. Au moins 90% de la population doit avoir un emploi.</p>
    <p>Nous devons sortir des sentiers battus pour réussir un projet original et ambitieux. Toute la philosophie du mouvement tourne autour du *bien-être de l’Homme Haïtien* et de la *transformation radicale du pays* par les haïtiennes et haïtiens eux-mêmes. Chacun d’entre nous mérite d’avoir un travail, un logement décent, et jouir d’une éducation, de l’accès aux soins de santé. Le mouvement entend favoriser la créativité de chaque haïtien en qui sommeille un producteur, un créateur ou un entrepreneur.</p>
    <p>A fortiori, notre mouvement entend *Sécuriser les investisseurs* et les investissements pour faciliter la création d’emplois. Parmi les thèmes d’intérêt public prioritaires, notons la modernisation du système financier, la création de la bourse pour encourager les investissements directs dans les entreprises ,le transport public dans les grandes villes, le développement d’Industrie de la pêche, le reboisement, la création de mini-parcs industriels pour favoriser l’éclosion des industries spécialisées en région, la création de grandes fermes agricoles à partir du principe de la mise en commun des terres agricoles sur la base de partenariats gagnants entre agriculteurs, paysans, et propriétaires terriens. La première des solidarités est la solidarité de ceux et celles qui gagnent plus envers ceux et celles qui vivent dans la pauvreté abjecte. Il est important d’élargir l’assiette fiscale pour que l’état ait les moyens de sa politique.</p>
    `
  },
  {
    header: `Intégrer notre diaspora`,
    text: `
    <p>L'intégration effective de la Diaspora est un cheval de bataille essentiel du mouvement EN AVANT. Cette intégration de notre diaspora est d’abord justifiée par son apport substantiel à l’économie nationale (2.5 milliards de dollars chaque année). Mais, Il y a tant d’autres facteurs qui justifient un combat sans merci pour l’intégration effective des Haïtiens vivant à l’étranger. Parmi les batailles à mener, notons le droit de vote à l’étranger, La pluri-nationalité, Une représentation officielle au parlement, des incitations et garanties à l’investissement, le droit de contribuer au choix du ministre des haïtiens vivant à l’étranger…. Le mouvement encouragera la mise sur pied d’une stratégie globale pour faciliter le retour au pays des compatriotes de la diaspora voulant prendre leur retraite en Haïti.</p>
    <p>Pour que l’intégration de la diaspora ne soit plus un vain mot, il faut que les décideurs haïtiens acceptent finalement le droit de nos compatriotes expatriés à voter à l’étranger. Ce combat sera notre fer-de-l ‘anse durant les mois et années à venir notamment dans le cadre d’une révision constitutionnelle et l’adoption d’une nouvelle loi électorale. Cette grande promesse à notre diaspora est celle que nous comptons respecter contre vents et marées. Le Mouvement se battra pour que ce droit fondamental de notre diaspora ne soit plus bafoué. Est-il normal que plus d’une centaine de pays disposent de provisions légales permettant le vote à l’étranger et qu’Haïti n’en fasse partie ?</p>
    <p>Cette réalité est d’autant plus injuste que les transferts d'argent vers Haïti représentent 34% de son PIB, et qu’Haïti domine le classement des 7 premières nations dont la croissance dans la réception des envois de fonds en 2019 a connu une croissance en pourcentage de plus de deux chiffres selon une étude de l'organisation Inter-american Dialogue Center. Selon la Banque Mondiale, les envois de fonds de la diaspora vers Haïti atteignent chaque année des niveaux record. Haïti n’est plus une économie agricole mais une économie de transferts. Chaque année davantage, c’est la diaspora haïtienne qui fait battre le Cœur de notre économie. Que justice soit enfin rendue à nos compatriotes de l’étranger en leur permettant de jouir de la pluri-nationalité et de voter à l’étranger.</p>
    `
  },
  {
    header: `Faire de l’éducation une priorité nationale`,
    text: `
    <p>Le maître-mot d’un projet national tourné vers le long terme : l’éducation. Les tares de la société haïtienne engluée dans le sous-développement ne trouveront de cures qu’à travers l’offre d’une éducation de qualité à nos enfants. Celle-ci doit toucher aussi bien le primaire, le secondaire, que l’Université et la formation professionnelle et technique.</p>
    <p>Le mouvement En Avant militera pour l’aménagement des Centres universitaires et des écoles professionnelles dans au moins quatre grandes villes pays. L’éducation, contre l’ignorance et tous les obscurantismes, est la clé de l’émancipation et de l’épanouissement de tous les haïtiens et haïtiennes. Nous voulons une éducation humaniste, capable d’ouvrir pour chaque Haitien.ne des perspectives, de réussir une vie comblée. Nous voulons la gratuité effective de l’enseignement primaire et secondaire pour tous. Nous voulons des programmes de prêts et bourses pour les étudiants/universitaires. Nous voulons des programmes d’éducation civique en vue de transformer le citoyen haïtien en un vrai agent de développement.</p>
    `
  },
  {
    header: `Lutter pour l’égalité entre hommes et femmes`,
    text: `
      <p>Au cœur même du combat de notre mouvement, il y a une farouche volonté de corriger les injustices, de s’assurer que tous nos compatriotes jouissent des mêmes privilèges devant la loi ou des mêmes opportunités dans la vie quel que soit leur sexe. En Haïti, le droit des femmes est encore souvent bafoué. Dans le monde du travail, à compétence égale, les femmes haïtiennes gagnent moins que les hommes. Elles sont l’objet de toutes sortes d’abus notamment des abus sexuels que le corps social a tendance à minimiser.</p>
      <p>Le mouvement s’engage à lutter corps et âmes contre l’inégalité entre hommes et femmes. Nous mettrons l’accent sur les importantes disparités entre hommes et femmes en termes d’opportunités d’emplois, puisque le chômage touche particulièrement les jeunes femmes. Les femmes continuent de travailler souvent plus longtemps que les hommes si l’on tient compte à la fois du travail rémunéré et de celui qui ne l’est pas. Si l’on veut faire progresser l’égalité entre hommes et femmes, il va falloir combler ces lacunes.</p>
      <p>Les êtres humains sont égaux. Cette égalité est même le fondement premier de nos valeurs. De celle-ci découlent notre idéal pour la justice sociale. Les différences de genre ne devraient fonder aucune hiérarchie dans les domaines politique, économique, social. Notre mouvement s’inscrit dans la continuité du combat des pères de la patrie pour un pays où il fait bon de vivre pour les femmes comme pour les hommes.</p>
      <p>Nous avons certes accompli de légers progrès en ce qui a trait à l’égalité de genre. Toutefois, nous devons poursuivre ces efforts pour que cette égalité soit effective dans nos façons de faire. Nous mettrons en place des pratiques et politiques qui favoriseront une pleine participation des femmes dans les affaires politiques publiques.</p>
    `
  },
  {
    header: `Consolider la Démocratie`,
    text: `
      <p>Le mouvement En Avant opte sans équivoque pour la démocratie parlementaire et représentative, estimant que ce système est le seul pouvant se prévaloir d’une légitimité permanente. Au-delà des défauts inhérents aux règles du jeu démocratique, défauts qui, dans certaines conditions, s’amplifient au point de menacer ce régime, il reste évident que le système démocratique demeure le moins mauvais parmi ceux en vigueur dans le monde. Pour faire vivre pleinement notre démocratie et en empêcher les dérives, il faudra rester vigilant surtout que le clientélisme politique et la corruption constituent restent deux phénomènes sociaux et politiques très répandus dans les démocraties actuelles notamment en Haïti. Leur existence même sape les principes théoriques de la démocratie et détruit graduellement les valeurs et les comportements démocratiques, ce qui entraîne la désaffection d’une bonne partie de la population.</p>
      <p>L’égalité, la fraternité, la liberté d’opinion et d’expression : voilà ce qui fonde la démocratie comme principe supérieur d’organisation sociale. La liberté de la presse et l’indépendance de la justice en sont notamment les garants. Dans le domaine institutionnel, nous voulons une séparation effective entre le pouvoir législatif et exécutif. Nous refusons de croire que le destin de notre pays soit lié à l’émergence d’un messie providentiel.</p>
      <p>Notre projet est plus que jamais celui de la démocratie et notre souverain demeure le peuple. Nous combattons pour l’application des conventions internationales du travail, pour garantir la liberté syndicale. Nous ferons aussi de la création de richesses et des principes de justice sociale le socle de notre démocratie. Certains développements récents sont troublants notamment les dispersions par la violence de manifestations pacifiques. Notre combat sera de toujours préserver la démocratie et les droits de l’homme.</p>
    `
  },
  {
    header: `Bâtir un agenda législatif ambitieux`,
    text: `
    <p>Nous entendons batailler pour que soient voté un ensemble de lois urgentes qu’attend le pays. Parmi elles, notons la loi sur la PNH, sur la nationalité, sur le salaire minimum, et surtout une loi sur la moralisation de la vie publique. D’aucun s’inquiète, avec raison, devant l’avalanche de décrets pris par le Président Moise en absence d’un parlement. Le mouvement En Avant entend se prononcer sur la validité juridique desdits Décrets au regard de l’ordonnancement juridique institué par la Constitution haïtienne qui est au sommet de la hiérarchie des normes juridiques. S’il est vrai qu’un ensemble de textes de lois ont été négligés par le pouvoir législatif, il n’en reste pas moins vrai qu’un pouvoir exécutif ne saurait à lui seul imposer des textes de lois à un pays.</p>
    <p>Le mouvement En Avant plaide pour une analyse minutieuse des dits décrets aux fins d’en évaluer les bien-fondés. Certains devront tout simplement être soumis à l’aval des prochaines législatures. Une attention particulière sera donnée au nouveau code pénal, contesté et critiqué par plus d’uns pour ses articles jugées incorrects. Un code pénal doit être le fruit d’une réflexion sociétale collective et non le résultat des caprices d’un groupe ou d’un secteur.</p>
    `
  },
  {
    header: `Protéger l’Environnement et assurer l’aménagement du territoire`,
    text: `
      <p>Pour notre mouvement, il est impératif de penser l'environnement et l’aménagement du territoire de façon sérieuse et planifiée. Cela implique une vision claire des initiatives à enclencher pour la gestion des bassins versants et la reforestation, la préservation des espèces endémiques et de la biodiversité, la gestion des ressources en eau, l'aménagement et la planification urbaine, l'établissement de pôles de développement, l’aménagement des zones d’habitat rurales, la réforme du foncier.</p>
      <p>Protéger l'environnement, c'est préserver la survie et l'avenir d’Haïti. L'environnement est notre source de nourriture et d'eau potable. L'air est notre source d'oxygène. Le climat permet notre survie. Et la biodiversité est un réservoir potentiel de médicaments mais aussi un facteur attractif dans le cadre d’une politique touristique ambitieuse. Protéger l'environnement, c'est protéger notre source de nourriture et d'eau potable. Toute pollution finit par se retrouver dans l'eau que nous buvons ou dans ce que nous mangeons. Protéger l'environnement, c'est préserver la qualité de l'air que nous respirons. C’est protéger la variété des espèces animales et végétales de la nature.</p>
      <p>En Haïti, la pollution, l'effet de serre et l'émission de dioxyde de carbone, les cyclones, la rareté de l'eau, la désertification, les inondations et les pluies torrentielles ont cause des dégâts énormes et continuent de faire des dégâts. Comme pour tous les pays moins développés, la priorité est donnée à la survie et au court terme aux dépens des gestions des patrimoines dans une perspective intergénérationnelle. C’est vrai que nous ne pouvons pas opter pour une politique environnementale aussi pointue que les pays déjà avancés mais il nous en faudra une plus adaptée à notre réalité, nos limites, nos contraintes. Environnement et développement économique ne sont pas antagoniques. Le développement durable permet de concilier ces deux dimensions à la condition de révolutionner les modes de production et de consommation grâce aux avancées technologiques et aux actions collectives.</p>
    `
  },
  {
    header: `Définir une Stratégie Numérique`,
    text: `
      <p>En Avant se veut un mouvement avant-gardisme et moderne. Aussi il entend promouvoir une stratégie numérique nationale. Le numérique est un vecteur de création de millier d'emplois surtout chez nos jeunes. Une stratégie de e-Gouvernance permet l'harmonisation des standards techniques, des formules originales et efficaces pouvant favoriser l’éducation ou une meilleure gouvernance de l'administration publique. Nous sommes pour une stratégie numérique nationale qui améliore l’éducation de qualité, la santé et la sécurité publique. Pour cela, il faudra une bonne connectivité et un cadre légal adéquat. L’avenir en dépend. Sans connectivité, Haïti restera à la traîne.</p>
      <p>Les technologies de l’information et de la communication peuvent constituer une formidable opportunité économique pour Haïti. Il s’agit de les ancrer à une vision organisationnelle et les intégrer à un projet national. Toutefois la maîtrise du processus de transformation numérique exige de solides compétences managériales et techniques, un cadre institutionnel, politique et réglementaire en soutien à l’économie numérique et une infrastructure de communication. Une politique numérique idéale pour Haïti signifie que les parties intéressées définissent clairement le rôle de l’État, du secteur privé et des autres partenaires stratégiques de ce secteur.</p>
    `
  },
  {
    header: `Revaloriser notre culture`,
    text: `
    <p>Le mouvement milite pour une revalorisation de la culture haïtienne sur les aspects à travers une action basée sur le Social, l’économique et l’éducatif.</p>
    <p>Social : Faire de la culture un outil capable de rassembler la société, un véritable ciment entre toutes les couches sociales.</p>
    <p>Economique : Investir dans la culture comme un secteur porteur et créateur d’emploi à travers des industries culturelles et créatives.</p>
    <p>Educatif : Développer dans toutes les écoles une éducation artistique et culturelle permettant d’avoir un autre citoyen haïtien fier, cultivé et créatif.</p>
    `
  },
  {
    header: `Encadrer la jeunesse`,
    text: `
    <p>La pérennité d’une nation est assurée par l’évolution d’une jeunesse émancipée et épanouie ayant confiance dans son avenir. En ce sens, le mouvement EN AVANT compte faire des générations montantes l’un des piliers de son combat contre les inégalités économiques et sociales. Pour y parvenir, nous favorisons l’adoption de mesures nécessaires à l’intégration effective de la jeunesse dans la société.</p>
    <p>En effet, nous sommes résolument convaincus qu’un système de protection fiable des droits fondamentaux de la jeunesse devra être mis en place. Ce système nous permettra de combattre surtout la domesticité (restavek), la délinquance juvénile et le détournement des mineurs(es). Notre État doit investir massivement dans des programmes susceptibles de développer les compétences et habilités des jeunes : Sport, culture, arts, crédits, etc… Pour les jeunes en âge de travailler, des travaux à haute intensité de main d’œuvre doivent être créés.</p>
    `
  },
  {
    header: `Assurer la Justice, la sécurité et la Défense`,
    text: `
      <p>La justice se prête à de multiples finalités. Dans notre État moderne prôné, la justice comme institution satisfera convenablement aux exigences de veiller au respect des lois et garantir les droits de chacun. Ainsi, nous nous consacrons à réformer profondément notre système judiciaire pour l’effectivité d’une justice équitable et impartiale. Cette réforme implique une refonte de notre corpus juridique pour une bonne harmonisation entre le droit et la société. Nous encourageons des lois pour renforcer l’indépendance judiciaire, des lois pour consolider la sécurité financière et l’inamovibilité des juges, des codes de déontologie pour l’exercice de la profession du droit.</p>
      <p>Les organismes de défense des droits de la personne doivent être supportés pour continuer à être utiles au progrès de la société. Nous encouragerions la création de services d’aide juridique pour accompagner les justiciables à faible revenu. Nous sommes pour une fourniture des moyens adéquats pour une inspection judiciaire efficace. Le mouvement EN AVANT entend travailler à favoriser l’éclosion d’une alternative au système judiciaire corrompu causant trop de torts au pays.</p>
      <p>Le mouvement En Avant affirmons le droit inaliénable à la sûreté et la sécurité. La puissance publique doit organiser la protection des citoyens et citoyennes tout en garantissant nos droits et nos libertés fondamentales. Aucune ambition pour Haïti ne peut faire l’économie de la restauration de l’autorité de l’État, la démobilisation des gangs armées qui empoisonnent la vie des citoyens, la modernisation et le renforcement de la PNH et de l’armée d’Haïti.</p>
    `
  },
  {
    header: `Relancer le Tourisme`,
    text: `
      <p>Notre potentiel touristique est formidable même en comparaison aux autres pays de la Caraïbe. Nos atouts sautent aux yeux. Notre position géographique, notre climat, nos plages, nos montagnes, nos vallées, nos sites naturels, notre histoire, notre culture, notre peinture, notre art, notre musique, notre folklore… Le mouvement encourage une politique touristique qui fera à nouveau de notre pays une destination « rêves et loisir » prisée par notre diaspora et les touristes du monde entier.</p>
      <p>Une politique touristique efficace doit faire de ce secteur un pilier essentiel d’un projet national ambitieux. Il faudra être astucieux dans l’élaboration de stratégies pour le grand Nord capable de faire jouer des atouts historiques, culturels et écologiques uniques. Des mesures incitatives doivent être prises pour encourager les investissements dans des secteurs porteurs et complémentaires au Tourisme c’est-à-dire l’agriculture, l’artisanat et l’immobilier. Certaines zones stratégiques à fort potentiel de développement touristique doivent bénéficier d’avantages incitatifs encore plus grands pour éviter la concentration d’hôtels dans le département de l’Ouest et du Centre. Il existe aussi un nombre restreint d’hôtels au niveau de la Grand’Anse alors que ce département a vocation à devenir un véritable joyau touristique.</p>
    `
  },
  {
    header: `Construire les Infrastructures clés (routes, bâtiments, eau, électricité, détritus)`,
    text: `
    <p>Le mouvement En Avant veut incarner la modernité dans sa vision, ses projets et ses combats. L’ambition de modernité pour Haïti doit s’inscrire dans un projet de réhabilitation ou de construction d’infrastructures qui doivent impérativement accompagner un processus de développement (routes, ponts, canaux, ports, eaux, réseaux énergétique, transport, télécommunication, système de transformation des résidus solides). En Haïti, aucun projet économique ambitieux n’est possible sans un investissement considérable dans certaines infrastructures clés qui vont venir stimuler la demande globale et doper la croissance.</p>
    <p>L’un des principaux freins à la croissance de notre économie et la création d’emplois reste la faiblesse de nos infrastructures. Nous devrons consacrer au moins 9 % de notre PIB aux dépenses de construction, d’entretien et d’amélioration de nos infrastructures.  Des infrastructures fonctionnelles fournissent également des services essentiels à la population (eau potable, électricité, mobilité). La planification d’un réseau routier ne doit pas se faire (ou pas uniquement) en fonction du nombre de kilomètres réalisés, mais en fonction des bénéfices du désenclavement, de la baisse des coûts de transport, des flux économiques susceptibles d’être générés, etc.</p>
    `
  },
  {
    header: `Repenser notre Diplomatie et politique étrangère`,
    text: `
    <p>Le Mouvement En Avant est d’avis que notre politique diplomatique reste fidèle au principe de l’auto- détermination des peuples et à la défense des droits humains. Nous encourageons une politique étrangère dynamique, et moderne au service du développement. Nous encourageons la refonte complète de la Chancellerie haïtienne. Telle qu’actuellement structurée, elle n’est toujours pas en mesure d’assurer la mise en vigueur d’une politique étrangère ambitieuse et efficace. Par ailleurs, le recrutement du personnel au niveau des services interne et externe de la Chancellerie continue à se faire sans objectifs bien définis.</p>
    <p>Pour Haïti, Une nouvelle politique étrangère intelligente s’avère donc plus que nécessaire pour bénéficier d’opportunités commerciales, pour attirer des investissements étrangers, pour favoriser des partenariats gagnants entre les firmes locales et internationales, pour améliorer l’image d’Haïti à l’extérieur. Notre préférence : une « Diplomatie économique » au service de la promotion des investissements et des exportations de nos biens et services.</p>
    <p>A cet effet, un accent particulier devrait être mis sur la formation d’Attachés Economiques et Commerciaux qui seront déployés dans les pays ciblés. Dans le choix des marchés cibles, nous devrions continuer à coopérer avec nos alliés traditionnels en Amérique du Nord et en Europe, mais il sans négliger les nations asiatiques et les pays émergents. Nous pouvons sortir des sentiers battus en réinventant notre diplomatie pour la mettre au service de la lutte contre la pauvreté.</p>
    `
  },
  {
    header: `Remembrer la production nationale`,
    text: `
    <p>Le Mouvement En Avant fera de la production nationale un souci permanent et constant. L’autosuffisance alimentaire ne doit plus être un vain mot. L’encadrement de nos agriculteurs ou de nos PME œuvrant dans l’industrie agroalimentaire doit être une priorité majeure. Nous avons les terres en grande quantité, les rivières, le climat idéal, ainsi que les hommes et les femmes pouvant mettre en valeur notre terroir du nord au sud, de L’est à l’ouest. Toutes les conditions sont réunies pour ressusciter la production nationale. Des incitations fiscales majeures doivent être données à celles et ceux qui font le choix de produire localement notamment dans l’industrie locale. Ce sera également le sens de notre combat.</p>
    `
  },
  {
    header: `Réorganiser le sport et la vie associative`,
    text: `
    <p>Notre mouvement entend promouvoir le développement de la pratique du sport pour tous. Un projet national ambitieux pour Haïti ne peut se résumer aux questions économiques et sociales. Pour notre jeunesse, il faut promouvoir le sport et ses valeurs dès le plus jeune âge. Pour cela, il faudra entretenir et aménager les espaces naturels (bases de loisirs et de détente) et les équipements de quartier, l’implantation de stades ou parcs sportifs dans les quartiers.</p>
    <p>Le mouvement En Avant entend promouvoir une politique sportive dont Les objectifs sont d’offrir au plus grand nombre de jeunes haïtiens une pratique physique et sportive de qualité, diversifiée dans des espaces adaptés et sécurisés. Le sport constitue un fait social complet qui touche à de nombreuses questions sensibles de la société haïtienne : santé, éducation mais aussi cohésion sociale, intégration et citoyenneté, aménagement du territoire. C’est pourquoi notre mouvement supporte une politique publique ambitieuse, à mener par les pouvoirs publics en lien étroit avec le tissu associatif qui structure le mouvement sportif haïtien.</p>
    `
  },
  {
    header: `Implanter la transparence et la reddition des comptes`,
    text: `
      <p>La transparence et la reddition des comptes constituent un pilier fondamental pour le mouvement En Avant. Nos actions iront dans le sens d’une bataille sans merci contre le monstre de la corruption qui reste un frein au développement économique d’Haïti. Ce pilier sera la marque de fabrique de notre ADN idéologique et politique. Aucune ambition de progrès et de modernisation n’est envisageable tout autant qu’Haïti ne se dote pas des institutions fortes capables d’assurer la bonne gestion des deniers publics.</p>
      <p>Nous pensons en premier lieu à l’ULCC qui a pour mission de combattre la corruption dans administration publique, et ce, afin de protéger les biens publics et collectifs, assurer l’efficacité des mesures visant à sanctionner et éliminer les actes de corruption, favoriser la transparence dans la gestion de la chose publique, moraliser l’Administration publique et la vie publique en général.</p>
      <p>En ce sens, le mouvement entend porter la 51ème législature à voter une loi sur la moralisation de la vie publique. Le mouvement fera de la lutte contre la corruption l’un de ses principaux engagements. L’État devra être au service du citoyen et non au service d’un petit groupe de prédateurs cupides.</p>
    `
  },
  {
    header: `Revaloriser la formation professionnelle`,
    text: `
      <p>Le plus grand fléau d’Haïti est le chômage. Il atteint des proportions inouïes. La bataille de l’avenir est celle de la création d’emplois. Partout et par milliers. Dans les petites, micros et grandes entreprises, dans le privé et le public. Dans tous les secteurs d’activités de l’économie. Il faut pouvoir garantir à notre jeunesse des conditions d'employabilité à travers notamment une formation professionnelle de qualité. En Haïti, la Formation professionnelle ne devrait pas être considérée comme une voie de rattrapage ou de seconde chance, mais plutôt comme un pilier fondamental d’un projet national. Elle doit viser à former des jeunes qualifiés pouvant intégrer le marché de l’emploi. Elle doit être en adéquation aux secteurs prioritaire de l’économie. Il nous faut plus de mécaniciens, de plombiers, de menuisiers, de ferronniers, de tailleurs, d’armateurs, d’électriciens…</p>
      <p>Pour être efficace, La formation professionnelle des jeunes doit aussi être adaptée aux besoins des entreprises qui embauchent. Aussi Le mouvement encourage une réforme de l’enseignement professionnel et technique qui soit pensée avec le patronat via les chambres de commerce et d’industrie. C’est ensemble que le privé et l’etat doivent définir les métiers de l’avenir.</p>
      <p>En Haïti, force est de constater que le système produit en majorité des diplômés en droit, en lettre, en commerce, en comptabilité, en économie, en sciences sociales, en génie et en agriculture. C ’est bien mais ce modèle est dépassé. Nos diplômés font face au chômage car il y a de moins en moins de besoin pour ces spécialités. Il faudra inventer la nouvelle économie haïtienne et définir en parallèle les profils techniques qui peuvent doper cette économie et la faire fonctionner. Ainsi seulement pourrons nous prétendre à une croissance à deux chiffres !</p>
    `
  },
  {
    header: `Miser sur les collectivités territoriales`,
    text: `
    <p>En Haïti, les gouvernements qui se sont succédés n’ont jamais véritablement placé le développement des collectivités territoriales au centre des priorités. Or un développement national passe par le développement en région. Comment créer des activités économiques génératrices d’emploi et de croissance dans les sections communales reculées ? Telle est la question fondamentale à laquelle il va falloir trouver des réponses adéquates durant les décennies à venir.</p>
    <p>Le projet national préconisé par le mouvement En Avant est en faveur de l’allocation obligatoire d’un pourcentage d’au moins 20 % du budget national aux collectivités. C’est une façon d’injecter des fonds dans la commune et d’y créer des opportunités économiques.</p>
    <p>Trente-trois ans après l’entrée en vigueur de la Constitution, le pays n’est toujours pas parvenu à une décentralisation effective. La loi d'application n'a pas été votée pour que soient organisées les élections indirectes et aucun mécanisme d’encadrement n’a toujours été mis en place. De toutes évidences, une reforme constitutionnelle doit venir fluidifier, simplifier les dispositions visant une décentralisation.</p>
    `
  },
  {
    header: `Rétablir l’autorité de l’État PARTOUT et en tout`,
    text: `
    <p>Haïti a basculé dans le désordre et l’anarchie. Pour le mouvement En Avant, et au plus vite, il faut rétablir l’ordre. Partout et en tout ! Quand il n’est pas inexistant, L’État est à genoux ou trainé dans les caniveaux. Le mouvement en avant s’inscrit dans une démarche visant à restaurer l’autorité de l’Etat.</p>
    <p>Il ne doit y avoir aucune parcelle du territoire en dehors du contrôle des forces de l’ordre. Il ne peut y avoir de police ni d’armée ou règne l’indiscipline, l’insubordination et l’esprit de corps. Il ne peut y avoir d’impunité pour les délateurs, les voleurs, les pédophiles, les voleurs, les voyous, les gangsters… bref tous ceux qui violent la loi. Il ne peut y avoir de complaisance envers les ministres et autres commis de l’Etat qui sont indignes de leurs fonctions. Il ne peut y avoir tolérance face à ceux et celles qui s’en prennent à la république.</p>
    <p>L’autorité de l’État, c’est une administration générale des douanes (AGD) qui perçoit les taxes de façon équitable et qui refuse la corruption. C’est une justice qui a les yeux bandés et qui donne justice à qui justice est due. C’est une administration publique dont les hauts cadres sont recrutés sur base de leurs compétences et qui s’expriment avec assurance, fermeté et compétence.</p>
    <p>La balbutiante démocratie haïtienne ne peut fonctionner sans un État fort au service des citoyens, sans un régime d’autorité minimal, c’est-à-dire un Etat qui fait respecter l’équilibre des pouvoirs et la mise en œuvre de ses orientations. Sinon, l’Etat se trouve rapidement prisonnier des factions qui, à leur tour, imposent au peuple leurs diktats. Puisque l’État est le patron des services publics, il en fixe les missions, l’organisation et le fonctionnement, en assure la continuité. Il en assure le prestige aussi. L’autorité de l’Etat, c’est aussi la protection de chaque personne dans le respect de ses droits, de chaque famille dans le respect de ses responsabilités, de chaque corps intermédiaire dans le respect de ses compétences.</p>
    <p>L’autorité de l’Etat ne se mesure pas à la quantité d’attributions qu’il détient mais à la qualité de son intervention dans le domaine régalien. L’autorité, pour l’État, ce n’est rien d’autre que le fait de montrer le bon chemin, de savoir l’expliquer au peuple et d’y maintenir, coûte que coûte, la nation dans son unité et son harmonie.</p>
    `
  },
]

interface TextBlockProps {
  header?: string
  text?: string
}

const TextBlock = ({ header, text }: TextBlockProps) => (
  <div style={{ marginBottom: 50 }}>
    {header && (
      <>
        <h4 style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: Colors.veryDarkBlueText,
          textTransform: "uppercase"
        }}>{header}</h4>
        <div style={{
          borderBottom: `2px solid ${Colors.orange}`,
          width: 25,
          margin: "15px 0"
        }} />
      </>
    )}
    {text && (
      <div style={{
        fontSize: 16,
        color: Colors.gray,
        textAlign: "justify"
      }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )}
  </div>
)

const title = "Nos Combats"

export default function Combats() {
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
        <Container style={{ flex: 1 }}>
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
        <Container>
          <TitleWithSubText
            title={title}
            subTextStyle={{
              fontSize: 16
            }}
            subText={`
              <p>Pour transformer Haïti en profondeur, le Mouvement EN AVANT propose un PROJET NATIONAL organisé autour de 22 chantiers, les chantiers de l’avenir.</p>
            `}
          />

          <Grid container spacing={3}>
            {combats.map(({ header, text }, index) => (
              <Grid item md={6} sm={12} key={index}>
                <TextBlock
                  header={header}
                  text={text}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  )
}
