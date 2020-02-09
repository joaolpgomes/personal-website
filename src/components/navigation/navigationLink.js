import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const NavigationLink = styled(props => <Link {...props} />)`
  padding: 13px 3px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  display: block;
  height: 72px;
  color: #323232;
  text-align: center;
  background: #fff;
  box-shadow: none;
`
