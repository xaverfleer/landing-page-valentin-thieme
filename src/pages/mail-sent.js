import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const HomeIndex = ({ data }) => {
  const { frontmatter } = data.allMarkdownRemark.edges[0].node
  const { bgImage, meImage } = frontmatter

  const siteDescription =
    'Naturnahe Gartenberatung | Gezielte Pflege und Unterhalt bestehender Gärten | Kleinere Umänderungen und Neubauten | Terrassen und Dachbepflanyungen '

  return (
    <Layout bgImage={bgImage} meImage={meImage}>
      <Helmet>
        <title>Natur im Garten | Valentin Thieme</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Nachricht erfolgreich gesendet</h2>
          </header>
          <p>
            Vielen Dank für Ihre Nachricht. Ich melde mich so bald wie möglich
            bei Ihnen.
          </p>
          <Link to="/">← Zurück zur Startseite</Link>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query mailSent {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            bgImage
            meImage
          }
        }
      }
    }
  }
`

export default HomeIndex
