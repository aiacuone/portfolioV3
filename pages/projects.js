import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStylesRoot = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
})

export default function projects() {
  const { state } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone

  const classesRoot = useStylesRoot()

  const Phone = () => {
    // const useStylesP = makeStyles({
    //   containerL: {
    //     display: 'grid',
    //     height: '100%',
    //     width: '100%',
    //     gridTemplateColumns: 'repeat(10,1fr)',
    //     gridTemplateRows: '25px 50px repeat(10,1fr) 45px 45px 45px 60px',
    //   },

    //   containerP: {
    //     display: 'grid',
    //     height: '100%',
    //     width: '100%',
    //     gridTemplateColumns: 'repeat(10,1fr)',
    //     gridTemplateRows: '25px 40px repeat(10,1fr) 45px 45px 45px 60px',
    //   },

    //   //PORTRAIT
    //   headerP: { gridArea: '1/1/2/11' },
    //   projectHeaderP: { gridArea: '2/1/3/11', background: 'orange' },
    //   mainContainerP: { gridArea: '3/1/13/11', background: 'grey' },
    //   projectButtonsP: { gridArea: '13/1/14/11', background: 'purple' },
    //   detailsButtonsP: { gridArea: '14/1/15/11', background: 'yellow' },
    //   viewButtonsP: { gridArea: '15/1/16/11', background: 'brown' },
    //   hamburgerGapP: { gridArea: '16/1/17/11', background: 'blue' },

    //   //LANDSCAPE
    //   headerL: { gridArea: '1/1/2/11' },
    //   projectHeaderL: { gridArea: '2/1/3/11', background: 'orange' },
    //   mainContainerL: { gridArea: '3/1/13/11', background: 'grey' },
    //   projectButtonsL: { gridArea: '13/1/14/11', background: 'purple' },
    //   detailsButtonsL: { gridArea: '14/1/15/11', background: 'yellow' },
    //   viewButtonsL: { gridArea: '15/1/16/11', background: 'brown' },
    //   hamburgerGapL: { gridArea: '16/1/17/11', background: 'blue' },
    // })
    // const classes = useStylesP()

    const Landscape = () => {
      const useStyles = makeStyles({
        root: {
          display: 'grid',
          height: '100%',
          width: '100%',
          gridTemplateColumns: 'repeat(10,1fr)',
          gridTemplateRows: '25px 50px repeat(10,1fr) 45px 45px 45px 60px',
        },
        header: { gridArea: '1/1/2/11' },
        projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
        mainContainer: { gridArea: '3/1/13/11', background: 'grey' },
        projectButtons: { gridArea: '13/1/14/11', background: 'purple' },
        detailsButtons: { gridArea: '14/1/15/11', background: 'yellow' },
        viewButtons: { gridArea: '15/1/16/11', background: 'brown' },
        hamburgerGap: { gridArea: '16/1/17/11', background: 'blue' },
      })
      const classes = useStyles()

      return (
        <Grid className={classes.root}>
          <Grid className={classes.header} container justifyContent="center">
            PROJECTS
          </Grid>
          <Grid className={classes.projectButtons}>PROJECT BUTTONS</Grid>
          <Grid className={classes.detailsButtons}>DETAIL BUTTONS</Grid>
          <Grid className={classes.projectHeader}>PROJECT HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.viewButtons}>VIEW BUTTONS</Grid>
          <Grid className={classes.hamburgerGap}></Grid>
        </Grid>
      )
    }

    const Portrait = () => {
      const useStyles = makeStyles({
        root: {
          display: 'grid',
          height: '100%',
          width: '100%',
          gridTemplateColumns: 'repeat(10,1fr)',
          gridTemplateRows: '25px 40px repeat(10,1fr) 45px 45px 45px 60px',
        },
        header: { gridArea: '1/1/2/11' },
        projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
        mainContainer: { gridArea: '3/1/13/11', background: 'grey' },
        projectButtons: { gridArea: '13/1/14/11', background: 'purple' },
        detailsButtons: { gridArea: '14/1/15/11', background: 'yellow' },
        viewButtons: { gridArea: '15/1/16/11', background: 'brown' },
        hamburgerGap: { gridArea: '16/1/17/11', background: 'blue' },
      })
      const classes = useStyles()
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header} container justifyContent="center">
            PROJECTS
          </Grid>
          <Grid className={classes.projectButtons}>PROJECT BUTTONS</Grid>
          <Grid className={classes.detailsButtons}>DETAIL BUTTONS</Grid>
          <Grid className={classes.projectHeader}>PROJECT HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.viewButtons}>VIEW BUTTONS</Grid>
          <Grid className={classes.hamburgerGap}></Grid>
        </Grid>
      )
    }

    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  const Normal = () => {
    const useStyles = makeStyles({
      root: { height: '100%', width: '100%' },
    })
    const classes = useStyles()
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        PROJECTS NORMAL
      </Grid>
    )
  }

  return (
    <Grid className={classesRoot.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
