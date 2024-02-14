'use client'

import React, { useEffect } from 'react'
import tocbot from 'tocbot'

function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      activeLinkClass: 'is-active',
      scrollSmoothOffset: -40,
      headingSelector: 'h1, h2, h3, h4',
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className="bg-white mx-5 p-5 rounded-lg">
      <h3 className="flex justify-center my-5">Table of Contents</h3>
      <nav className="toc" />
    </div>
  )
}

export default Toc
