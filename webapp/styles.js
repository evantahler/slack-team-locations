const footerHeight = 200
const headerHeight = 20

const Styles = {
  // page sections

  app: {
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
    backgroundColor: 'gray'
  },
  footer: {
    width: '100%',
    height: `${footerHeight}px`,
    backgroundColor: 'gray'
  }
}

export default Styles
