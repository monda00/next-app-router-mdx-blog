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
    <div className="sticky top-0 bg-white mx-5 p-5 rounded-lg mt-3">
      <h3 className="flex justify-center my-5">Table of Contents</h3>
      <div className="toc"></div>
    </div>
  )
}

export default Toc
