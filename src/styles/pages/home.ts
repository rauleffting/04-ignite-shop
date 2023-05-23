import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  '.button-back': {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    width: '136px',
    zIndex: '1',

    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    border: 'none',

    '&:hover': {
      cursor: 'pointer',
    },

    svg: {
      color: '$gray300',
    },
  },

  '.button-forward': {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    width: '136px',
    zIndex: '1',

    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
    border: 'none',

    '&:hover': {
      cursor: 'pointer',
    },

    svg: {
      color: '$gray300',
    },
  },
})

export const SliderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100vw',
  padding: '32px 136px',
  marginRight: '136px',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$md',
      color: '$gray100',
      lineHeight: '2rem',
    },

    span: {
      fontSize: '$xl',
      fontWeight: '700',
      color: '$green300',
    },

    '.product-info-wrapper': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Icon = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  background: '$green500',
  padding: '0.75rem',
  borderRadius: '6px',
  border: 'none',

  svg: {
    color: 'white',
  },

  '&:hover': {
    opacity: 0.8,
  },
})
