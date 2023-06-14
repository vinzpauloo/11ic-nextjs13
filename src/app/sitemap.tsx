export default async function sitemap() {
  // Static Routes
  const routes = [
    "",
    "/vip",
    "/promotions",
    "/blog",
    "/profile",
    "/profile/deposit",
    "/profile/wallet-management",
    "/profile/transaction-record",
    "/profile/betting-record",
    "/profile/withdraw",
  ].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
