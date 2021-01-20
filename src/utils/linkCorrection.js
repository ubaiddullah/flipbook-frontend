export function linkCorrection(links) {
  let updatedLinks = [];
  links.map((link) => {
    return updatedLinks.push(link.replace(`\\`, `/`));
  });
  return updatedLinks;
}
