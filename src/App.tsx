import Aside from './components/Aside';
import Content from './components/Content';
import Header from './components/Header';
function App() {

  return (
    <main className='
    grid
    grid-cols-[60px]
    grid-rows-[60px]
    bg-black
    min-h-screen
    '>
      <Header/>
      <Aside/>
      <Content>
        <h1>Main</h1>
      </Content>
    </main>
  )
}

export default App
