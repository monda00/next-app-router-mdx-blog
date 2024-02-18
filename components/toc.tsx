'use client'

import React, { useEffect } from 'react'
import tocbot from 'tocbot'

function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      activeLinkClass: 'is-active',
      headingSelector: 'h1, h2, h3',
      scrollSmoothOffset: -300,
      headingsOffset: -300,
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className="sticky top-0 bg-base-200 w-72 rounded-box mt-5">
      <h3 className="flex justify-center mt-5">Table of Contents</h3>
      <div className="toc px-8 pb-8"></div>
    </div>
  )
}

export default Toc
