import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
  buttonContainer1: {},
  buttonContainer2: {},
})

export default function skills() {
  const classesRoot = useStylesRoot()

  const { state, vars } = useContext(UserContext)
  const {
    hamburger,
    skillsObj,
    skillsArr,
    normalPageContainerDimensions: container,
    headerHeightPortrait,
    secondHeaderHeightPortrait,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
  } = vars
  const { isPhone, isPhoneLandscape, isPhonePortrait } = state.phone

  const Buttons = ({ size }) => {
    const props = { height: size, width: size }
    const Portrait = () => {
      const buttons1 = skillsArr.map((skill, index) => {
        const skillObj = skillsObj[skill]
        if (index >= skillsArr.length / 2) return
        return <Image src={skillObj.image} layout="fixed" {...props} />
      })

      const buttons2 = skillsArr.map((skill, index) => {
        const skillObj = skillsObj[skill]
        if (index < skillsArr.length / 2) return
        return <Image src={skillObj.image} layout="fixed" {...props} />
      })

      return (
        <>
          <Grid
            container
            className={classesRoot.buttonContainer1}
            justifyContent="space-around">
            {buttons1}
          </Grid>
          <Grid
            container
            className={classesRoot.buttonContainer2}
            justifyContent="space-around">
            {buttons2}
          </Grid>
        </>
      )
    }
    const Other = () => {
      return skillsArr.map((skill) => {
        const { image } = skillsObj[skill]
        return <Image src={image} layout="fixed" {...props} />
      })
    }
    return isPhonePortrait ? <Portrait /> : <Other />
  }

  const Normal = () => {
    const { width, maxWidth, minWidth, height, maxHeight, minHeight } =
      container

    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
      },
      container: {
        background: 'white',
        maxWidth: maxWidth,
        width: width,
        height: height,
        // maxHeight: maxHeight,
        minHeight: minHeight,
        minWidth: minWidth,
        display: 'grid',
        gridTemplateColumns: 'repeat(10,1fr)',
        gridTemplateRows: 'auto repeat(8,1fr) auto',
      },
      mainContainer: {
        background: 'grey',
        gridArea: '2/1/10/11',
      },
      buttonContainer: {
        background: 'blue',
        gridArea: '10/1/11/11',
        padding: '10px 0',
      },
      header: {
        background: 'orange',
        gridArea: '1/1/2/11',
      },
    })
    const classes = useStyles()
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <Grid className={classes.container}>
          <Grid
            container
            className={classes.header}
            justifyContent="center"
            alignItems="center">
            HEADER
          </Grid>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="center"
            alignItems="center">
            MAIN CONTAINER
          </Grid>
          <Grid
            container
            className={classes.buttonContainer}
            justifyContent="space-around">
            <Buttons size={45} />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: `${headerHeightLandscape}px ${secondHeaderHeightLandscape}px repeat(7,1fr) auto`,
        gridTemplateColumns: `repeat(9,1fr) ${
          hamburger.padding * 2 + hamburger.width
        }px`,
      },
      header: {
        gridArea: '1/1/2/10',
        background: 'red',
      },
      projectHeader: {
        gridArea: '2/1/3/10',
        background: 'purple',
      },
      buttonContainer: {
        gridArea: '9/1/11/10',
        background: 'blue',
        minWidth: '600px',
      },
      container: {
        gridArea: '3/1/9/10',
        background: 'grey',
      },
    })
    const classes = useStyles()

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          SKILLS
        </Grid>
        <Grid
          className={classes.projectHeader}
          container
          justifyContent="center"
          alignItems="center">
          SKILL HEADER
        </Grid>
        <Grid
          className={classes.container}
          container
          justifyContent="center"
          alignItems="center">
          MAIN CONTAINER
        </Grid>
        <Grid
          className={classes.buttonContainer}
          container
          justifyContent="space-around"
          alignItems="center">
          <Buttons size={35} />
        </Grid>
      </Grid>
    )
  }

  const Portrait = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(16,1fr) 110px ${
          hamburger.padding * 2 + hamburger.width
        }px`,
        gridTemplateColumns: 'repeat(10,1fr)',
      },
      header: {
        gridArea: '1/1/2/11',
        background: 'blue',
      },
      projectHeader: {
        gridArea: '2/1/3/11',
        background: 'purple',
      },
      mainContainer: {
        gridArea: '3/1/19/11',
        background: 'orange',
      },
      buttonContainer: {
        gridArea: '19/1/20/11',
        background: 'yellow',
        minWidth: '250px',
      },
      hamburgerGap: {
        gridArea: '20/1/21/11',
        background: 'brown',
      },
    })
    const classes = useStyles()

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          SKILLS
        </Grid>
        <Grid
          className={classes.projectHeader}
          container
          justifyContent="center"
          alignItems="center">
          SKILL HEADER
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          MAIN CONTAINER
        </Grid>
        <Grid
          className={classes.buttonContainer}
          container
          justifyContent="space-around"
          alignItems="center">
          <Buttons size={35} />
        </Grid>
        <Grid className={classes.hamburgerGap} />
      </Grid>
    )
  }

  const Phone = () => {
    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
