import React from 'react'
import Index from '../../container/Index'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function () {



      const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
            height: 5,
            borderRadius: 0,
            [`&.${linearProgressClasses.colorPrimary}`]: {
                  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            },
            [`& .${linearProgressClasses.bar}`]: {
                  borderRadius: 0,
                  backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
            },
      }));


      return (
            <>
                  <Index.Box className="price-card-main">
                        <Index.Box className="price-card-inner">
                              <Index.Box className="price-flex display-flex">
                                    <Index.Typography className='card-price' component="h3" variant='h3'>Round 2 - <span className='price-span'>$0.0002</span></Index.Typography>
                                    <Index.GreenButton className="green-btn running-btn" btnLabel="RUNNING" />
                              </Index.Box>

                              <Index.Box className="dash-token-value-main">
                                    <Index.Box className="dash-token-value-inner">
                                          <Index.Box className="dash-token-value-box">
                                                <Index.Typography className='dash-token-value-text' component="p" variant='p'>0</Index.Typography>
                                          </Index.Box>
                                          <Index.Typography className='dash-token-time-text' component="p" variant='p'>DAYS</Index.Typography>
                                    </Index.Box>

                                    <Index.Box className="dash-token-value-inner">
                                          <Index.Box className="dash-token-value-box">
                                                <Index.Typography className='dash-token-value-text' component="p" variant='p'>0</Index.Typography>
                                          </Index.Box>
                                          <Index.Typography className='dash-token-time-text' component="p" variant='p'>HOURS</Index.Typography>
                                    </Index.Box>

                                    <Index.Box className="dash-token-value-inner">
                                          <Index.Box className="dash-token-value-box">
                                                <Index.Typography className='dash-token-value-text' component="p" variant='p'>0</Index.Typography>
                                          </Index.Box>
                                          <Index.Typography className='dash-token-time-text' component="p" variant='p'>MINUTES</Index.Typography>
                                    </Index.Box>

                                    <Index.Box className="dash-token-value-inner">
                                          <Index.Box className="dash-token-value-box">
                                                <Index.Typography className='dash-token-value-text' component="p" variant='p'>0</Index.Typography>
                                          </Index.Box>
                                          <Index.Typography className='dash-token-time-text' component="p" variant='p'>SECONDS</Index.Typography>
                                    </Index.Box>
                              </Index.Box>

                              <Index.Box className="dash-token-flex">
                                    <Index.Box className="dash-token-data-content">
                                          <Index.Typography className='dash-token-data-text' component="p" variant='p'>TOKEN PRICE:</Index.Typography>
                                          <Index.Typography className='dash-token-data-price' component="h4" variant='h5'>1 NCX = $0.0002</Index.Typography>
                                    </Index.Box>

                                    <Index.Box className="dash-token-data-content">
                                          <Index.Typography className='dash-token-data-text' component="p" variant='p'>PAYMENT METHOD</Index.Typography>
                                          <Index.Typography className='dash-token-data-price' component="h4" variant='h5'>USDT-TRC20</Index.Typography>
                                    </Index.Box>
                              </Index.Box>

                              <Index.Box className="token-price-para">
                                    Vesting Period: 6 months
                                    After 6 months 10% monthly release
                              </Index.Box>

                              <Index.Box className="progress-bar-main dash-progressbar">
                                    <BorderLinearProgress variant="determinate" value={70} className="progress-bar" />
                                    <span className="progress-bar-text">50%</span>
                              </Index.Box>

                              <Index.Box className="dash-token-flex">
                                    <Index.GreenButton className="green-btn buy-token-btn" btnLabel="BUY TOKENS" />
                                    <Index.Box className="dash-token-content">
                                          <Index.Typography className='dash-token-text' component="p" variant='p'>MINIMUM PURCHASE:</Index.Typography>
                                          <Index.Typography className='dash-token-price' component="h4" variant='h5'>25 USDT</Index.Typography>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>
                  </Index.Box>
            </>
      )
}
