export default (content, length) => {
  const selectedString = content.substring(0, length);
  const checkString = content.charAt(length);
  let properString;

  (checkString !== ' ') ?
  (properString = content.substring(0, selectedString.lastIndexOf(' '))) : properString = selectedString;

  return length < 1 ? 'error' : properString+='...';
};
