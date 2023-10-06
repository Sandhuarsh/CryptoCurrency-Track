import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';
function App() {
  const useStyles =makeStyles(()=>({
     App:{
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh",
     },
  }));
  const classes =useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
