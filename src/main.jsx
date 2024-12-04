import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { inject } from '@vercel/analytics';
import { PostHogProvider} from 'posthog-js/react'

inject();

const options = {
  api_host: process.env.POSTHOG_HOST,
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <PostHogProvider 
      apiKey={process.env.POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </StrictMode>,
)

