import React from 'react'
import Index from '../../Index'
// import Index from '../../Index'

export default function AuthFooter() {
      return (
            <div>
                  <Index.Box className="auth-footer-main">
                        <Index.Box className="auth-footer-social-main">
                              <Index.List className='auth-social-ul'>
                                    <Index.ListItem className='auth-social-li'>
                                          <img src={Index.Svg.instagram} className="auth-socual-icon" alt='social media'></img>
                                    </Index.ListItem>
                                    <Index.ListItem className='auth-social-li'>
                                          <img src={Index.Svg.share} className="auth-socual-icon" alt='social media'></img>
                                    </Index.ListItem>
                                   <Index.ListItem className='auth-social-li'>
                                          <img src={Index.Svg.twitter} className="auth-socual-icon" alt='social media'></img>
                                    </Index.ListItem>
                              </Index.List>
                        </Index.Box>
                        <Index.Box className="auth-footer-flex display-flex">
                              <Index.Typography className='auth-footer-para' variant='p' component="p" >Privacy Policy</Index.Typography>
                              <Index.Typography className='auth-footer-para' variant='p' component="p" >Terms & Conditions</Index.Typography>
                        </Index.Box>
                        <Index.Typography className='auth-footer-terms-para' variant='p' component="p" >NCX Digital Exchange L.L.C., Company Reg. Number - 2477 LLC 2023 © 2022-2023 All rights reserved.</Index.Typography>
                  </Index.Box>
            </div>
      )
}
