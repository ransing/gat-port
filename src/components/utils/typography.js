import './typo.css'

import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016'

// Wordpress2016.overrideThemeStyles = () => ({
//   a: {
//     color: 'var(--textLink)',
//   },
//   // gatsby-remark-autolink-headers - don't underline when hidden
//   'a.anchor': {
//     boxShadow: 'none',
//   },
//   // gatsby-remark-autolink-headers - use theme colours for the link icon
//   'a.anchor svg[aria-hidden="true"]': {
//     stroke: 'var(--textLink)',
//   },
//   hr: {
//     background: 'var(--hr)',
//   },
// })

// import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography