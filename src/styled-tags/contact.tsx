import styled from '@emotion/styled'

let ModalDiv0 = styled.div({
    position: 'absolute',   
    top: '25vh',
    left: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 30px -1px rgba(0,0,0,0.8)',
    borderRadius: '20px',
    backgroundColor: 'rgba(0,0,0,0.95)',
    color: 'white',
    width: '40vw',
    height: '30vh',
    marign: 'auto',
    zIndex: 2
})

let FieldUl = styled.ul({
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    overflowY: 'scroll'
})

let FieldLi = styled.li({
    padding: '10px',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    listStyle: 'none'
})

let CloseButton = styled.div({
    position: 'absolute',
    cursor: 'pointer',
    top: '2px',
    left: '2px'
})

let Top = styled.ul({
    // border: '1px white solid',
    position: 'absolute',
    left: '250px',
    top: '5vh',
    height: 'auto',
    width: 'auto',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
})

let Li = styled.li({
    // border: '1px white solid',
    minHeight: '50px',
    height: 'auto',
    width: 'auto',
    padding: '10px',
    listStyle: 'none',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '23px',
    letterSpacing: '0.5px'
})

// Techies
let WrapperLottie =styled.div({
    height: '100px',
    width: '100px',
    borderRadius: '50px',
})

let IconImg = styled.img({
    height: '100px',
    width: '100px',
    borderRadius: '50px',
})

let TechWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px'
})

let ModalDiv = styled.div({
    width: '70vw',
    height: '90vh',
    top: '5vh',
    position: 'absolute',   
    left: '25vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 30px -1px rgba(0,0,0,0.8)',
    borderRadius: '20px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    marign: 'auto',
    overflowY: 'scroll',
    zIndex: -1,
    '@media(max-width: 520px)':{
        left: '5vw',
        width: '85vw',
    }
    
})

export { ModalDiv0 , CloseButton, Top, FieldUl, FieldLi, Li, ModalDiv, IconImg, TechWrapper, WrapperLottie  }