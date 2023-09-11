// vite.config.ts
import { defineConfig } from "file:///C:/Users/kkshe/Desktop/kks-blog/myblog/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.9_@types+node@20.5.9+sass@1.66.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/kkshe/Desktop/kks-blog/myblog/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.3.4_vite@4.4.9+vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///C:/Users/kkshe/Desktop/kks-blog/myblog/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.16.6/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/kkshe/Desktop/kks-blog/myblog/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/kkshe/Desktop/kks-blog/myblog/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "C:\\Users\\kkshe\\Desktop\\kks-blog\\myblog";
var vite_config_default = defineConfig({
  server: {
    port: 8e3
    // 指定开发服务器的端口
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxra3NoZVxcXFxEZXNrdG9wXFxcXGtrcy1ibG9nXFxcXG15YmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca2tzaGVcXFxcRGVza3RvcFxcXFxra3MtYmxvZ1xcXFxteWJsb2dcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2trc2hlL0Rlc2t0b3Ava2tzLWJsb2cvbXlibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbi8vIFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NWVsZW1lbnQtcGx1c1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0c2VydmVyOiB7XG5cdFx0cG9ydDogODAwMCAvLyBcdTYzMDdcdTVCOUFcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcdTc2ODRcdTdBRUZcdTUzRTNcblx0fSxcblx0cGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdEF1dG9JbXBvcnQoe1xuXHRcdFx0cmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcblx0XHR9KSxcblx0XHRDb21wb25lbnRzKHtcblx0XHRcdHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG5cdFx0fSksXG5cdF0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0XCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuXHRcdH1cblx0fVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxvQkFBb0I7QUFDN1UsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUVqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQU5wQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVixXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNsQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVixXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNsQyxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ25DO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
