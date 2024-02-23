/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VC_API_KEY: string
  readonly VITE_VC_BASE_URL: string
  readonly VITE_GOOGLE_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
