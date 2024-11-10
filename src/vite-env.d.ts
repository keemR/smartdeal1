/// <reference types="vite/client" />

interface Window {
  gtag: (type: string, action: string, data: any) => void;
}