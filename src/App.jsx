import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Aside from './components/Aside';
import AppContainer from './styles/AppContainer';
import Provider from './context';
import GlobalStyle from './styles/GlobalStyle';
import Profile from './pages/Profile';
import Main from './components/Main';
import Tweet from './pages/Tweet';
import Explore from './pages/Explore';

const App = () => {
    return (
        <Provider>
            <GlobalStyle />
            <Router>
                <AppContainer>
                    <Menu />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/tweet" element={<Tweet />} />
                            <Route path="/explore" element={<Explore />} />
                        </Routes>
                    </Main>
                    <Aside />
                </AppContainer>
            </Router>
        </Provider>
    );
};
export default App;
