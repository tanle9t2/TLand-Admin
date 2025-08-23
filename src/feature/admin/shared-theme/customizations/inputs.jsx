import * as React from 'react';
import { alpha } from '@mui/material/styles';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { gray, brand } from '../themePrimitives';

export const inputsCustomizations = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
        '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: '2px',
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',

        // 👇 Variants here
        variants: [
          {
            props: { size: 'small' },
            style: { height: '2.25rem', padding: '8px 12px' },
          },
          {
            props: { size: 'medium' },
            style: { height: '2.5rem' },
          },
          {
            props: { color: 'primary', variant: 'contained' },
            style: {
              color: 'white',
              backgroundColor: gray[900],
              backgroundImage: `linear-gradient(to bottom, ${gray[700]}, ${gray[800]})`,
              boxShadow: `inset 0 1px 0 ${gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
              border: `1px solid ${gray[700]}`,
              '&:hover': { backgroundImage: 'none', backgroundColor: gray[700], boxShadow: 'none' },
              '&:active': { backgroundColor: gray[800] },
              ...theme.applyStyles('dark', {
                color: 'black',
                backgroundColor: gray[50],
                backgroundImage: `linear-gradient(to bottom, ${gray[100]}, ${gray[50]})`,
                boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                border: `1px solid ${gray[50]}`,
                '&:hover': { backgroundColor: gray[300] },
                '&:active': { backgroundColor: gray[400] },
              }),
            },
          },
          {
            props: { color: 'secondary', variant: 'contained' },
            style: {
              color: 'white',
              backgroundColor: brand[300],
              backgroundImage: `linear-gradient(to bottom, ${alpha(brand[400], 0.8)}, ${brand[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(brand[200], 0.2)}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
              border: `1px solid ${brand[500]}`,
              '&:hover': { backgroundColor: brand[700], boxShadow: 'none' },
              '&:active': { backgroundColor: brand[700], backgroundImage: 'none' },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: (theme.vars || theme).palette.text.primary,
              border: '1px solid',
              borderColor: gray[200],
              backgroundColor: alpha(gray[50], 0.3),
              '&:hover': { backgroundColor: gray[100], borderColor: gray[300] },
              '&:active': { backgroundColor: gray[200] },
              ...theme.applyStyles('dark', {
                backgroundColor: gray[800],
                borderColor: gray[700],
                '&:hover': { backgroundColor: gray[900], borderColor: gray[600] },
              }),
            },
          },
          {
            props: { color: 'secondary', variant: 'outlined' },
            style: {
              color: brand[700],
              border: '1px solid',
              borderColor: brand[200],
              backgroundColor: brand[50],
              '&:hover': { backgroundColor: brand[100], borderColor: brand[400] },
              '&:active': { backgroundColor: alpha(brand[200], 0.7) },
              ...theme.applyStyles('dark', {
                color: brand[50],
                borderColor: brand[900],
                backgroundColor: alpha(brand[900], 0.3),
                '&:hover': { backgroundColor: alpha(brand[900], 0.6), borderColor: brand[700] },
                '&:active': { backgroundColor: alpha(brand[900], 0.5) },
              }),
            },
          },
          {
            props: { variant: 'text' },
            style: {
              color: gray[600],
              '&:hover': { backgroundColor: gray[100] },
              '&:active': { backgroundColor: gray[200] },
              ...theme.applyStyles('dark', {
                color: gray[50],
                '&:hover': { backgroundColor: gray[700] },
                '&:active': { backgroundColor: alpha(gray[700], 0.7) },
              }),
            },
          },
          {
            props: { color: 'secondary', variant: 'text' },
            style: {
              color: brand[700],
              '&:hover': { backgroundColor: alpha(brand[100], 0.5) },
              '&:active': { backgroundColor: alpha(brand[200], 0.7) },
              ...theme.applyStyles('dark', {
                color: brand[100],
                '&:hover': { backgroundColor: alpha(brand[900], 0.5) },
                '&:active': { backgroundColor: alpha(brand[900], 0.3) },
              }),
            },
          },
        ],
      }),
    },
  },

};
