import React from 'react'
import "./ContentPage.css"
function ContentPage(props) {
    const styles = {
        contentPageContainer: {
            height: '35vh',
        },
        small: {
            
        }
    }

  return (
    <div className='contentPageContainer'
    style={{
        ...styles.contentPageContainer
    }}
    >
      <h1>content</h1>
    </div>
  )
}

export default ContentPage
