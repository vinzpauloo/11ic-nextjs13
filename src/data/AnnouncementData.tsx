export default function MockAnnouncementData() {
  const createData = (numOfData: number) => {
    const baseData = {
      title: "Title",
      created_at: "2021-11-15 10:39:53",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas nemo commodi eum, tempora porro voluptatum error sed, esse necessitatibus ea, quaerat quo totam fuga. Minima, amet sint. Facere, optio.",
      link: "http://www.youtube.com",
      icon: "/images/seo/twitter.png",
      image:
        "https://www.cdnimg9.com/img/promopics/web/20230215_10146_banner.jpg?v=1.0",
      type: "all",
    };

    const titles = ["New Promo", "New Girl", "New Games"];
    const types = ["read", "all"];

    return Array.from({ length: numOfData }, (_, i) => {
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomType = types[Math.floor(Math.random() * types.length)];

      return {
        id: (i + 1).toString(),
        ...baseData,
        title: randomTitle,
        type: randomType,
      };
    });
  };

  const announcementData = createData(80);

  return { announcementData };
}
