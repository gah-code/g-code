// <<<<<<< HEAD
// <<<<<<< HEAD
// import * as React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const UsingSSR = ({ serverData }) => {
//   return (
//     <Layout>
//       <h1>
//         This page is <b>rendered server-side</b>
//       </h1>
//       <p>
//         This page is rendered server side every time the page is requested.
//         Reload it to see a(nother) random photo from{" "}
//         <code>dog.ceo/api/breed/shiba/images/random</code>:
//       </p>
//       <img
//         style={{ width: "320px", borderRadius: "var(--border-radius)" }}
//         alt="A random dog"
//         src={serverData.message}
//       />
//       <p>
//         To learn more, head over to our{" "}
//         <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
//           documentation about Server Side Rendering
//         </a>
//         .
//       </p>
//       <Link to="/">Go back to the homepage</Link>
//     </Layout>
//   )
// }

// export const Head = () => <Seo title="Using SSR" />

// export default UsingSSR

// export async function getServerData() {
//   try {
//     const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
//     if (!res.ok) {
//       throw new Error(`Response failed`)
//     }
//     return {
//       props: await res.json(),
//     }
//   } catch (error) {
//     return {
//       status: 500,
//       headers: {},
//       props: {},
//     }
//   }
// }
// =======
// =======
// >>>>>>> 4e0d886760464a8a99c53168500252a4c77bb69a
// // import * as React from 'react'
// // import { Link } from 'gatsby'

// // import Layout from '../components/Layout'
// // import SEO from '../components/SEO'

// // const UsingSSR = ({ serverData }) => {
// //   return (
// //     <Layout>
// //       <h1>
// //         This page is <b>rendered server-side</b>
// //       </h1>
// //       <p>
// //         This page is rendered server side every time the page is requested. Reload it to see a(nother) random photo from{' '}
// //         <code>dog.ceo/api/breed/shiba/images/random</code>:
// //       </p>
// //       <img
// //         style={{ width: '320px', borderRadius: 'var(--border-radius)' }}
// //         alt="A random dog"
// //         src={serverData.message}
// //       />
// //       <p>
// //         To learn more, head over to our{' '}
// //         <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
// //           documentation about Server Side Rendering
// //         </a>
// //         .
// //       </p>
// //       <Link to="/">Go back to the homepage</Link>
// //     </Layout>
// //   )
// // }

// // export const Head = () => <SEO title="Using SSR" />

// // export default UsingSSR

// // export async function getServerData() {
// //   try {
// //     const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
// //     if (!res.ok) {
// //       throw new Error(`Response failed`)
// //     }
// //     return {
// //       props: await res.json(),
// //     }
// //   } catch (error) {
// //     return {
// //       status: 500,
// //       headers: {},
// //       props: {},
// //     }
// //   }
// // }
// <<<<<<< HEAD
// >>>>>>> 66decae... updates
// =======
// >>>>>>> 4e0d886760464a8a99c53168500252a4c77bb69a

