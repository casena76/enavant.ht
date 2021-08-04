import React, { CSSProperties, useState } from 'react'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Colors from 'utils/colors'
import Button from './Button'
import Routes from 'utils/routers'
import Donate from './Donate'
import { translateUrl } from 'utils/translate'
import Join from './Join'


interface Props {
  style?: CSSProperties,
  showButtons?: boolean,
  containerStyle?: CSSProperties,
  transparent?: boolean
  footer?: boolean
}

export default function NavBar({ style, showButtons, containerStyle, transparent, footer }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const routes: any = Routes
  const router = useRouter()

  let logoName = ''

  if (['/', '/dirigeants', '/dirigeants-province', '/dirigeants-diaspora'].includes(router.pathname)) {
    logoName = 'negatif'
  }

  const handleMenuOpen = (event: any) => {
    setMenuOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleSwitchLanguage = (lang: string | undefined = undefined) => {
    setMenuOpen(false)
    setAnchorEl(null)

    if (lang) {
      const pageUrl = window.location.href

      const newUrl = translateUrl(pageUrl, lang)

      window.location.href = newUrl
    }
  }


  return (
    <div style={containerStyle}>
      <div style={{
        textAlign: 'right'
      }}>
        <Button title="Changer la langue" style={{
          backgroundColor: Colors.darkerBlue,
          color: Colors.white,
          marginRight: 15
        }} onClick={(event) => handleMenuOpen(event)} />
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={() => handleSwitchLanguage()}
        >
          <MenuItem onClick={() => handleSwitchLanguage('en')}>Anglais</MenuItem>
          <MenuItem onClick={() => handleSwitchLanguage('ht')}>Créole</MenuItem>
        </Menu>

        {showButtons && (
          <>
            <Donate />
            &nbsp;
            <Join />
          </>
        )}
      </div>
      {/* <nav className="navbar navbar-expand-sm" style={style}> */}
      <Navbar expand="md" style={style}>
        <Navbar.Brand href={Routes.home.url}>
          <img src={`/assets/images/logo-${logoName && !footer ? logoName : transparent ? 'white' : 'blue'}.png`}
            style={{ width: 130 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {Object.keys(routes).map(key => {
              const { url, name } = routes[key]

              return url === '/dirigeants' ? (
                <>
                  <NavDropdown title={name} id={name}>
                    <NavDropdown.Item href={url}>{name}</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/dirigeants-province">
                      Nos représentants en province
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/dirigeants-diaspora">
                      Nos représentants en diaspora
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                  <Nav.Link href={url} key={key} style={{
                    color: transparent ? Colors.white : Colors.orange
                  }}>
                    {name}
                  </Nav.Link>
                )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}