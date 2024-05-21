import React from 'react'
import Card from './card';
import './CambridgeGallery.css'
function CambridgeGallery() {
    const styles = {
        pin_container: {
            margin: '30px 0px',
            width: '100vw',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 250px)',
            gridAutoRows: '10px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            justifyContent: 'center',
            background: '#EEEEEE'
            
        }
    }
      return (
        <div className='pinContainer' style={styles.pin_container}>
        
          <Card size="small" src="/images/Cambridge/Cambridge_1.jpeg"/>
          <Card size="medium" src="/images/Cambridge/Cambridge_2.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_3.jpeg"/>
          <Card size="medium" src="/images/Cambridge/Cambridge_4.jpeg"/>
          <Card size="medium" src="/images/Cambridge/Cambridge_5.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_6.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_7.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_8.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_9.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_10.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_11.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_12.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_13.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_14.jpeg"/>
          <Card size="medium" src="/images/Cambridge/Cambridge_15.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_16.jpeg"/>
          <Card size="medium" src="/images/Cambridge/Cambridge_17.jpeg"/>
          <Card size="medium" src="/images/Cambridge/Cambridge_18.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_19.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_20.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_21.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_22.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_23.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_24.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_25.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_26.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_27.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_28.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_29.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_30.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_31.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_32.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_33.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_34.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_35.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_36.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_37.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_38.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_39.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_40.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_41.jpeg"/>
          <Card size="large" src="/images/Cambridge/Cambridge_42.jpeg"/>
          <Card size="small" src="/images/Cambridge/Cambridge_43.jpeg"/>
          
        </div>
      );
}

export default CambridgeGallery
