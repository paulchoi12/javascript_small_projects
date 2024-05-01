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
    <div style={styles.pin_container}>
      <Card size="small"/>
      <Card size="medium"/>
      <Card size="large"/>
      <Card size="medium"/>
      <Card size="medium"/>
      <Card size="large"/>
      <Card size="small"/>
      <Card size="large"/>
      <Card size="small"/>
      <Card size="small"/>
      <Card size="large"/>
      <Card size="small"/>
      <Card size="small"/>
      <Card size="small"/>
      <Card size="medium"/>
      <Card size="large"/>
      <Card size="medium"/>
      <Card size="medium"/>
      <Card size="large"/>
      <Card size="small"/>
      <Card size="large"/>
      <Card size="small"/>
      <Card size="small"/>
      <Card size="large"/>
      <Card size="small"/>
    </div>
  );
}

export default App;
