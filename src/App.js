import './App.css';
import useGithub from './hooks/guthub-hooks';
import Layout from './components/layout';
import Profile from './components/profile';
import NoSearch from './components/no-search';
import Repositories from './components/repositories';
function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
