import { Home } from './pages/home/Home';
import { PeoplePage } from './pages/peoplepage/PeoplePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AnimePage } from './pages/animepage/AnimePage';
import { GamePage } from './pages/gamepage/GamePage';
import { PodCastPage } from './pages/podcastpage/PodCastPage';
import { EventPage } from './pages/eventpage/EventPage';
import { DashBoardAdmin } from './pages/dashboard_admin/DashBoardAdmin';
import { DashBoardUser } from './pages/dashboard_user/DashBoardUser';
import { DashBoardPosts } from './pages/dashboard_posts/DashBoardPosts';
import { SinglePost } from './pages/single_post/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/podcast" element={<PodCastPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/dashboardAdmin" element={<DashBoardAdmin />} />
        <Route path="/dashboardAdmin/user" element={<DashBoardUser />} />
        <Route path="/dashboardAdmin/posts" element={<DashBoardPosts />} />
        <Route path="/SinglePost/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
