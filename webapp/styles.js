const footerHeight = 200
const headerHeight = 20

const Styles = {
  // page sections

  app: {
    fontSize: 12,
    fontFamily: 'Arial, Helvetica, sans-serif',
    width: '100%',
    height: '100%'
  },
  map: {
    width: '100%',
    height: `calc(100% - ${headerHeight}px - ${footerHeight}px)`
  },
  header: {
    width: '100%',
    height: headerHeight,
    padding: 5,
    background: 'linear-gradient(90deg, rgba(153,148,232,1) 13%, rgba(9,9,121,1) 53%, rgba(0,212,255,1) 100%)'

  },
  footer: {
    width: '100%',
    height: `${footerHeight}px`,
    padding: 5,
    background: 'rgba(153,148,232,1) 13%',
    overflow: 'auto'
  },

  // user avatar
  user: {
    margin: 5,
    float: 'left'
  },
  userImage: {
    width: 50,
    height: 50
  },
  userImageCentering: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  }
}

export default Styles
