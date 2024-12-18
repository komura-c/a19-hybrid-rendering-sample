import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'server',
    renderMode: RenderMode.Server, // サーバーサイドレンダリング(+ハイドレーション)
  },
  {
    path: 'client',
    renderMode: RenderMode.Client, // クライアントサイドレンダリング
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // プリレンダリング+ハイドレーション
  },
];
