import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { Notes } from './components/Notes'
import { DefaultLayout } from './layouts'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Route>
    </Routes>
  )
}
