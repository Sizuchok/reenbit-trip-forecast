/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VC_API_KEY: string
  readonly VITE_VC_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
