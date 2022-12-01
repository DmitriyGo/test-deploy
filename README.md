# Setup CI/CD for React project with GitHub Pages, GitHub Actions and Vite

### Client-side routing
Projects with react-router-dom library should use [HashRoueter](https://reactrouter.com/en/main/router-components/hash-router) instead of BrowserRouter
```tsx
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<LoginPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile/:userId' element={<ProfilePage/>}/>
            </Route>
        </Routes>
    </HashRouter>
)

```
###vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-deploy/'
})
```

### package.json
```json
"homepage": "https://<username>.github.io/<repo>/#",
```

### .github/workflows/deploy.yml
```yml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install NodeJS ⭐
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run build
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```
