(async function () {
  const { enableProdMode } = await import('@angular/core');
  const { platformBrowserDynamic } = await import(
    '@angular/platform-browser-dynamic'
  );
  const { AppModule } = await import('./app/app.module');
  const { environment } = await import('./environments/environment');

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
})();
