# React + TypeScript + Vite

An empty template
```
npm i react-router-dom
npm i antd
npm i axios
npm i mockjs
npm i --save-dev @types/mockjs
npm install --save-dev @types/node
npm i --save-dev prettier
```

vite.config.ts
```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
});
```

tsconfig.app.json
```
"paths": {
  "@/*": ["./src/*"]
}
```

Plugin
```
React Buddy
```
