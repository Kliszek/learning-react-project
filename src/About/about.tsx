export const About = () => {
  return (
    <div>
      <h3 className="text-4xl px-5 pb-3 inline-block mb-10 mx-auto border-b border-slate-200">
        About
      </h3>
      <p className="text-lg px-10 mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque in molestiae maxime, dicta exercitationem earum veritatis eligendi eveniet esse necessitatibus, ex hic aspernatur temporibus nam, alias eius perferendis harum ad.
      </p>
      <a
        className="hover:underline"
        href="https://github.com/Kliszek/learning-react-project/"
      >
        My project on GitHub
      </a>
    </div>
  );
}