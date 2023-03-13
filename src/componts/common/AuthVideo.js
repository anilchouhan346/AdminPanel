import React from 'react'
import Index from '../Index'

export default function AuthVideo() {
      return (
            <>
                  <video muted autoPlay='true' loop id="1111" class="auth-video"  >
                        <source src={Index.Video.authvideo} type="video/mp4" alt="banner video" />
                  </video>
            </>
      )
}
