import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  overflow: 'hidden',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 136px',
})

export const Cart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',

  backgroundColor: '$gray800',

  borderRadius: '6px',
  padding: '0.75rem',

  svg: {
    color: '$gray500',
  },

  '&:hover': {
    cursor: 'pointer',
    svg: {
      color: '$gray200',
    },
  },

  position: 'relative',

  strong: {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    background: '$green500',

    width: '1.75rem',
    height: '1.75rem',
    paddingTop: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '3px solid $gray900',
    borderRadius: '50%',

    fontSize: '0.875rem',
    fontWeight: '700',
    lineHeight: '160%',
  },
})
