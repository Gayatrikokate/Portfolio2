const About = () => (
  <section className="my-8 fade-in bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
    <br></br>
    <h2 className="text-4xl font-bold mb-2 text-center">Gayatri Kokate</h2>
    <h3 className="text-2xl text-gray-700 mb-4 text-center">
      Front-end Developer
    </h3>

    <div className="text-center max-w-2xl">
      <p className="text-lg mb-4">
        I am a frond-end developer. I have a passion for creating wonderful and
        functional websites and applications. I enjoy working the
        front-end , and I am always eager to learn new technologies and improve
        my skills.
      </p>
    </div>
    <div className="mt-8 w-full max-w-2xl">
      <h4 className="text-2xl font-semibold mb-4 text-center">Skills</h4>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
        <li className="bg-red-100 p-2 rounded-lg shadow-md text-center">
          HTML
        </li>
        <li className="bg-blue-100 p-2 rounded-lg shadow-md text-center">
          CSS
        </li>
        <li className="bg-blue-100 p-2 rounded-lg shadow-md text-center">
          JavaScript
        </li>
        <li className="bg-blue-100 p-2 rounded-lg shadow-md text-center">
          React
        </li>
        <li className="bg-green-100 p-2 rounded-lg shadow-md text-center">
          SQL
        </li>
      </ul>
    </div>
  </section>
);

export default About;
