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
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
