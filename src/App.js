
import './App.css';
import {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Main,
  Route,
  Routes }
 from 'react-router-dom';

 

const App =()=> {

  const [progress, setProgress] = useState(0);
  const pageSize=6;
  const apiKey= process.env.REACT_APP_NEWS_API;
    return (
      <div>
      <>
      <Main>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3} 
      />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general" />} >
          </Route>
          <Route exact path="/business" element={ <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize}  key="business" country="in" category="business" />} >
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize}  key="entertainment" country="in" category="entertainment" />}>
          </Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="general" category="general" />}>
          </Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="health" />}>
          </Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="science" />}>
          </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="in" category="sports" />}>
          </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="in" category="technology" />}></Route>
        </Routes>
      </Main>
      </>
      </div>
    )
  
}
export default App;
