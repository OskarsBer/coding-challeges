// Make func that removes anything after '#' from URL
// 'www.websitename.com#page' - 'www.websitename.com'

const removeUrlAnchor = url => {
  const anchor = url.indexOf('#');
  return anchor >= 0 ? url.slice(0, anchor) : url;
}

console.log(removeUrlAnchor('www.websitename.com#page'))// 'www.websitename.com'
console.log(removeUrlAnchor('www.websitename.com/page/?page=1#page'))// 'www.websitename.com/page/?page=1'

