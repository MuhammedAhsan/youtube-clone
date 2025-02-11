import Header from './componants/Header'
import SideMenu from './componants/SideMenu'
import MainBody from './componants/MainBody'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Shorts from './componants/SubPages/Shorts'
import Subscriptions from './componants/SubPages/Subscriptions'
import Channel from './componants/SubPages/Channel'
import Video from './componants/SubPages/Video'


function App() {
  const divStyle ={
    display:"grid",
    gridTemplateColumns:"1fr 5fr",
    gap:"5px",
  }
  
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
          <div>
            <Header />
            <div style={divStyle}>
              <SideMenu />
              <MainBody />
            </div>
          </div>,
      },
      {
        path:'/shorts',
        element:
          <div>
            <Header />
            <div style={divStyle}>
              <SideMenu />
              <Shorts />
            </div>
          </div>,
      },
      {
        path:'/subscriptions',
        element:
          <div>
            <Header />
            <div style={divStyle}>
              <SideMenu />
              <Subscriptions />
            </div>
          </div>,
      },
      {
        path:'/channel',
        element:
          <div>
            <Header />
            <div style={divStyle}>
              <SideMenu />
              <Channel />
            </div>
          </div>,
      },
      {
        path:'/video',
        element:
          <div>
            <Header />
            <div style={divStyle}>
              <SideMenu />
              <Video />
            </div>
          </div>,
      },
    ]
  )

  return (
    <>
    {/* <Header />

    <div style={divStyle}>
      <SideMenu />
      <MainBody />
    </div> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
