import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  minWidth: '30rem',
  padding: '4.5rem 3rem 3rem',
  zIndex: '2',

  position: 'absolute',
  top: 0,
  right: 0,

  background: '$gray800',

  h2: {
    color: '$gray100',
    fontWeight: '700',
    fontSize: '1.25rem',
    lineHeight: '160%',

    marginBottom: '2rem',
  },

  '.wrapper': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },

  '.card-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',

    '.quantity-value-wrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      span: {
        color: '$gray100',
        lineHeight: '160%',
      },

      strong: {
        color: 'white',
        lineHeight: '160%',
      },

      h4: {
        color: 'white',
        fontWeight: '700',
        fontSize: '1.5rem',
      },
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: 0,
  position: 'absolute',
  right: 0,
  margin: '-1.5rem 1.5rem 0 0',

  svg: {
    color: '$gray500',
  },

  '&:hover': {
    svg: {
      color: '$gray100',
    },
    cursor: 'pointer',
  },
})

export const Card = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  '.shirt-wrapper': {
    display: 'flex',
    flexDirection: 'column',
  },

  p: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    color: '$gray300',
  },

  strong: {
    fontWeight: '700',
    fontSize: '1.25rem',
    lineHeight: '160%',
  },

  button: {
    marginTop: '0.5rem',
    background: 'none',
    color: '$green500',
    border: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    lineHeight: '160%',

    '&:hover': {
      cursor: 'pointer',
      color: '$green300',
    },
  },
})

export const CheckoutButton = styled('button', {
  marginTop: '3.45rem',
  height: '4.3rem',
  border: 'none',
  borderRadius: '8px',

  background: '$green500',

  span: {
    fontWeight: '700',
    fontSize: '1.125rem',
    lineHeight: '160%',
    color: '$white',
  },

  '&:hover': {
    cursor: 'pointer',
    background: '$green300',
  },

  '&:focus': {
    outline: 'none',
  },
})
