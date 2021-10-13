import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'

export default function Home() {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    me: {
      position: 'absolute',
      bottom: 10, //THESE VALUES SET TO 10 DUE TO PADDING/MARGIN ISSUES
      left: 10,
      height: '50px',
      width: '50px',
      background: 'red',
    },
    london: {
      position: 'absolute',
      top: 10,
      right: 10,
      height: '50px',
      width: '50px',
      background: 'lime',
    },
    links: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      background: 'green',
      height: '50px',
      width: '50px',
      background: 'yellow',
    },
    skills: {
      position: 'absolute',
      top: 10,
      left: 10,
      height: '50px',
      width: '50px',
      background: 'purple',
    },
    container: {},
    link: { padding: '10px 0', textAlign: 'center' },
  })
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid className={classes.skills}>skills</Grid>
      <Grid className={classes.london}>london</Grid>
      <Grid className={classes.me}>me</Grid>
      <Grid className={classes.links}>links</Grid>
      <Grid
        className={classes.container}
        alignItems="center"
        direction="column">
        HOME
        <Grid item>
          <Link href="projects">
            <h3 className={classes.link}>PROJECTS</h3>
          </Link>
        </Grid>
        <Grid item>
          <Link href="skills">
            <h3 className={classes.link}>SKILLS</h3>
          </Link>
        </Grid>
        <Grid item>
          <Link href="aboutMe">
            <h3 className={classes.link}>ABOUT ME</h3>
          </Link>
        </Grid>
        <Grid item>
          <Link href="contactMe">
            <h3 className={classes.link}>CONTACT ME</h3>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}
