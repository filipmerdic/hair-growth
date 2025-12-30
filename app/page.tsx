'use client'

import { useEffect } from 'react'

export default function ProductPage() {
  useEffect(() => {
    // This will load the HTML content from the public folder
    const loadContent = async () => {
      try {
        const response = await fetch('/index.html')
        const html = await response.text()
        
        // Extract body content
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
        if (bodyMatch) {
          const contentDiv = document.getElementById('product-content')
          if (contentDiv) {
            contentDiv.innerHTML = bodyMatch[1]
          }
        }
      } catch (error) {
        console.error('Error loading content:', error)
      }
    }

    loadContent()
  }, [])

  return (
    <div id="product-content">
      {/* Content will be loaded dynamically */}
    </div>
  )
}

