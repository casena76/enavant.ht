import React from 'react'
import Head from 'next/head'

import { DOMAIN, FB_APP_ID, APP_NAME, TWITTER_HANDLE } from 'utils/constants'

type Props = {
  title?: string,
  url?: string,
  description?: string,
  type?: string,
  image?: string,
  imageWidth?: number,
  imageHeight?: number,
}

export default function SEO({ title, url, description, type, image, imageWidth, imageHeight }: Props) {
  const titleContent = `${APP_NAME} - ${title || "MOUVEMENT POUR CHANGER HAÏTI ENSEMBLE"}`
  const descriptionContent = description || `
      Haïti connaît aujourd’hui une crise multiforme qui affecte toutes les sphères de la société. Face à la gravité de cette crise, il faut désormais un sursaut national et un renouvellement de la classe dirigeante pour redresser la barque nationale. Le changement en Haïti passe par la prise du pouvoir par une nouvelle équipe prête à adopter les réformes, et imposer les politiques publiques adéquates pour RESTAURER L’AUTORITÉ DE L’ÉTAT.

      L’heure est venue pour la couche saine et progressiste du pays de s’organiser véritablement à occuper les espaces des pouvoirs publics en vue de l’émergence d’une Haïti meilleure pour tous.

      Quelles solutions ? D’abord une prise de conscience et ensuite un engagement ferme. Face à la dégradation des institutions et de la gouvernance, il faut un rassemblement des personnalités et des forces de progrès pour construire une offre politique alternative et inclusive. C’est ce qui a motivé un ensemble d’organisations sociales et citoyennes, de personnalités et des leaders de différents secteurs à se rassembler au sein du MOUVEMENT EN AVANT.

      Nous sommes les héritiers(ères) d’un long combat. Il n'est pas d'ordre établi d'injustices et de misères qu'on ne puisse éradiquer. Cet idéal est celui des combattants de 1804, de 1844 ; de 1934 ; de 1946, de 1987. Plus de deux siècles après l’indépendance, notre résolution demeure intacte. Tant de gens aimeraient participer à une grande œuvre de construction nationale mais ne voient comment le faire. Tant de gens veulent rompre avec le fatalisme, la résignation, l’autoflagellation et les aveux d’impuissance. Le MOUVEMENT EN AVANT entend offrir à cette majorité silencieuse un espace d’expression et de militance, une raison d’espérer, un moyen d’agir pour CHANGER positivement les choses.

      Un grand désordre généralisé caractérise le fonctionnement de l’État. Il faut remettre de l’ordre ! De l’ordre dans notre système judiciaire, dans nos finances publiques, dans le fonctionnement de nos institutions, dans notre système éducatif, dans notre système financier, dans notre système de sécurité sociale, dans notre police nationale, dans notre diplomatie…. Remettre de l’ordre dans la République doit être un objectif majeur de la décennie qui s’ouvre. Mais, il ne peut y avoir de République sans la certitude pour tous de jouir des droits fondamentaux : se loger, se nourrir, travailler, se cultiver, se soigner, s’éduquer et vivre en sécurité. Nous devons ensemble bâtir un pays à la hauteur des rêves de toutes les Haïtiennes et haïtiens. Un pays où plus de 90% de la population a un emploi, qui atteint l’autosuffisance alimentaire, entre autres. Mais cela exige une transformation profonde d’Haïti. Pour le MOUVEMENT EN AVANT, cela suppose un chantier organisé autour de PLUSIEURS piliers.

      Un mouvement centriste axé sur le progrès et la justice sociale Le mouvement En avant veut rassembler les citoyennes et citoyens quel que soit leur affinité idéologique (de gauche ou de droite). Autant de marché que possible mais autant d’état que nécessaire. LE MOUVEMENT prône le progrès par la création des richesses et la justice sociale. La pauvreté est la conséquence de nos choix et de nos politiques publiques qui créent des fossés immenses entre les pauvres et les riches. Nous devons réduire ce fossé en créant un maximum de richesses, que l’État se doit de redistribuer pour améliorer les conditions de vie de la majorité de la population. Le Mouvement en en AVANT est promoteur de justice sociale, du respect des droits humains, de l’intégration de la
  `
  const imageContent = image || `https://en-avant-next.vercel.app/assets/images/home-header-2.jpg`

  return (
    <>
      <Head>
        <meta property="og:title" content={titleContent} key="title" />
        <meta property="og:site_name" content={APP_NAME} key="site_name" />
        <meta property="og:url" content={url || DOMAIN} key="url" />
        <meta property="og:description" content={descriptionContent.replace(/(<([^>]+)>)/ig, "")} key="description" />
        <meta property="og:type" content={type || "website"} key="type" />
        <meta property="og:image" content={imageContent} key="image" />
        {imageWidth && <meta property="og:image:width" content={`${imageWidth}`} key="image_width" />}
        {imageHeight && <meta property="og:image:height" content={`${imageHeight}`} key="image_height" />}

        <meta property="fb:app_id" content={FB_APP_ID} key="fb_app_id" />

        <meta name="twitter:card" content="summary" key="twitter_card" />
        <meta name="twitter:site" content={`@${TWITTER_HANDLE}`} key="twitter_site" />
        <meta name="twitter:title" content={titleContent} key="twitter_title " />
        <meta name="twitter:description" content={descriptionContent.replace(/(<([^>]+)>)/ig, "")} key="twitter_description" />
        <meta name="twitter:image" content={imageContent} key="twitter_image" />

        <title>{titleContent}</title>
      </Head>
    </>
  )
}