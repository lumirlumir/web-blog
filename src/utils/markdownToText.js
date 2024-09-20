export default function markdownToText(markdown) {
  return (
    markdown
      // Inline Code Block(`)
      .replace(/`(.+?)`/g, '$1')
      // Italic(*), Bold(**), Italic & Bold(***)
      .replace(/(\*{1,3})(\S)(.*?\S)??\1/g, '$2$3')
  );
}
