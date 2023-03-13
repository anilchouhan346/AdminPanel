import React from 'react'
import Index from '../../container/Index'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function PrivateSaleWallet() {

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
                  <Index.Box className="private-card-main">
                        <Index.Box className="price-flex display-flex">
                              <Index.Typography className='card-price' component="h3" variant='h3'>Round 1 <span className='price-span'>Tokens</span></Index.Typography>
                              <Index.PrimaryButton className="primary-btn locked-btn" btnLabel="LOCKED" />
                        </Index.Box>
                        <Index.Box className="private-token-value-main">
                              <Index.Box className="private-token-value-inner">
                                    <Index.Box className="private-token-value-box">
                                          <Index.Typography className='private-token-value-text' component="p" variant='p'>2,000,000</Index.Typography>
                                    </Index.Box>
                                    <Index.Typography className='private-token-time-text' component="p" variant='p'>LOCKED</Index.Typography>
                              </Index.Box>

                              <Index.Box className="private-token-value-inner">
                                    <Index.Box className="private-token-value-box">
                                          <Index.Typography className='private-token-value-text' component="p" variant='p'>0.00</Index.Typography>
                                    </Index.Box>
                                    <Index.Typography className='private-token-time-text' component="p" variant='p'>AVAILABLE</Index.Typography>
                              </Index.Box>

                              <Index.Box className="private-token-value-inner">
                                    <Index.Box className="private-token-value-box">
                                          <Index.Typography className='private-token-value-text' component="p" variant='p'>4,500</Index.Typography>
                                    </Index.Box>
                                    <Index.Typography className='private-token-time-text' component="p" variant='p'>MONTHLY RELEASE</Index.Typography>
                              </Index.Box>

                              <Index.Box className="private-token-value-inner">
                                    <Index.Box className="private-token-value-box">
                                          <Index.Typography className='private-token-value-text' component="p" variant='p'>0.00</Index.Typography>
                                    </Index.Box>
                                    <Index.Typography className='private-token-time-text' component="p" variant='p'>WITHDRAWN</Index.Typography>
                              </Index.Box>
                        </Index.Box>

                        <Index.Box className="token-price-para">
                              Vesting Period: 9 months
                              After 9 months 10% monthly release
                        </Index.Box>

                        <Index.Box className="progress-bar-main private-progressbar">
                              <BorderLinearProgress variant="determinate" value={70} className="progress-bar" />
                              <span className="progress-bar-text">Locked 100%</span>
                        </Index.Box>

                        <Index.Box className="private-token-flex">
                              <Index.GreyButton className="grey-btn withdrow-btn" btnLabel="WITHDRAW" />
                              <Index.Box className="private-token-content">
                                    <Index.Typography className='private-token-text' component="p" variant='p'>UNLOCK DATE</Index.Typography>
                                    <Index.Typography className='private-token-price' component="h4" variant='h5'>9 months after TGE</Index.Typography>
                              </Index.Box>
                        </Index.Box>
                  </Index.Box>
            </>
      )
}
