export default function Footer () {
  const githubURL = "https://github.com/sarahkuss/react-counter-app"
  return (
    <footer>
      <p><small>&copy; 2023<br />
      <a href={githubURL} target="_blank" rel="noreferrer">See Code in Github</a></small></p>
    </footer>
  )
}