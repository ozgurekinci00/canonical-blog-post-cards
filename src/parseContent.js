export const parseContent = (item) => {
  let header;
  let headerLink;

  // Find the last non-empty array in _embedded['wp:term'] array to get header infos
  const embeddedTerms = item._embedded["wp:term"];
  for (let i = embeddedTerms.length - 1; i >= 0; i--) {
    if (embeddedTerms[i].length !== 0) {
      ({ name: header, link: headerLink } = embeddedTerms[i][0]);
      break;
    }
  }

  return {
    link: item.link,
    image: item.featured_media,
    title: item.title.rendered,
    author: item._embedded.author[0].name,
    authorLink: item._embedded.author[0].link,
    header,
    headerLink,
    date: formatDate(item.date),
  };
};

const formatDate = (dateString) => {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Format the date
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formatter.format(date);
};
