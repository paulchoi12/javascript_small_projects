import './App.css';
import Card from './components/card';


function App() {
  const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
}
  return (
    <div className='pinContainer' style={styles.pin_container}>
      <Card size="small" src="/Photos/Conwy_1.jpeg"/>
      <Card size="medium" src="/Photos/Conwy_2.jpeg"/>
      <Card size="large" src="/Photos/Conwy_3.jpeg"/>
      <Card size="medium" src="/Photos/Conwy_4.jpeg"/>
      <Card size="medium" src="/Photos/Conwy_5.jpeg"/>
      <Card size="large" src="/Photos/Conwy_6.jpeg"/>
      <Card size="small" src="/Photos/Conwy_7.jpeg"/>
      <Card size="large" src="/Photos/Conwy_8.jpeg"/>
      <Card size="small" src="/Photos/Conwy_9.jpeg"/>
      <Card size="small" src="/Photos/Conwy_10.jpeg"/>
      <Card size="large" src="/Photos/Conwy_11.jpeg"/>
      <Card size="small" src="/Photos/Conwy_12.jpeg"/>
      <Card size="small" src="/Photos/Conwy_13.jpeg"/>
      <Card size="small" src="/Photos/Conwy_14.jpeg"/>
      <Card size="medium" src="/Photos/Conwy_15.jpeg"/>
      <Card size="large" src="/Photos/Conwy_16.jpeg"/>
      <Card size="medium" src="/Photos/Conwy_17.jpeg"/>
      <Card size="medium" src="/Photos/Conwy_18.jpeg"/>
      <Card size="large" src="/Photos/Conwy_19.jpeg"/>
      <Card size="small" src="/Photos/Conwy_20.jpeg"/>
      <Card size="large" src="/Photos/Conwy_21.jpeg"/>
      <Card size="small" src="/Photos/Conwy_22.jpeg"/>
      <Card size="small" src="/Photos/Conwy_23.jpeg"/>
      <Card size="large" src="/Photos/Conwy_24.jpeg"/>
      <Card size="small" src="/Photos/Conwy_25.jpeg"/>
    </div>
  );
}

export default App;
