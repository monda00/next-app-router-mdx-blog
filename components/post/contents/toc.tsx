'use client'

import React, { useEffect } from 'react'
import tocbot from 'tocbot'

function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h2, h3',
      scrollSmoothOffset: -350,
      headingsOffset: 350,
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className="hidden lg:block sticky top-0 w-60 xl:w-68 rounded-box mt-5">
      <h2 className="text-xl font-bold border-l-4 border-secondary pl-1 mt-8 mb-4">
        ToC
      </h2>
      <div className="toc px-0 pb-8 text-base"></div>
    </div>
  )
}

export default Toc
