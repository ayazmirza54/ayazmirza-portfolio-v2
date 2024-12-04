import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { inject } from '@vercel/analytics';
import { PostHogProvider} from 'posthog-js/react'
import { BrowserRouter } from 'react-router-dom';
inject();

const options = {
  api_host: process.env.POSTHOG_HOST,
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <PostHogProvider 
      apiKey={process.env.POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
    </BrowserRouter>
  </StrictMode>,
)

