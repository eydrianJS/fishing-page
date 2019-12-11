import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './navigation/MainPage';
// import avatar from './images/avatar.png'

const App: React.FC = () => {
  return (
    <MuiThemeProvider>
      <MainPage />
      {/* <img className="Header-logo" src={avatar} alt="Logo" /> */}
    </MuiThemeProvider>
  );
}

export default App;
