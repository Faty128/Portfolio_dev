import React from 'react';

const App = () => {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-transparent text-white py-6 px-8 z-50">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-3xl font-bold text-teal-400 hover:text-teal-500">Mon Portfolio</a>
          <ul className="flex space-x-8">
            <li><a href="#projects" className="hover:text-teal-400">Projets</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Compétences</a></li>
            <li><a href="#testimonials" className="hover:text-teal-400">Témoignages</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>
      </nav>

     {/* Hero Section */}
<section id="home" className="flex items-center justify-center py-24 bg-teal-500 text-center lg:text-left min-h-screen">
  <div className="max-w-7xl justify-between space-x-10 px-6 flex flex-col lg:flex-row items-center">
    {/* Description */}
    <div className="w-full lg:w-2/3 text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Salut, je suis [Jean Dhoe]</h1>
      <p className="mt-4 text-xl text-gray-200">Développeur web passionné par la création d'applications modernes, <br /> performantes et scalables. J'aime résoudre des problèmes <br /> complexes avec des solutions simples et efficaces.</p>
      <div className="mt-8 flex justify-center lg:justify-start space-x-6">
        <a href="mailto:votre-email@example.com" className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600">
          Contacter
        </a>
        <a href="#projects" className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600">
          Commencer
        </a>
      </div>
    </div>

    {/* Photo */}
    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTft7qgD_zTVuAexAw0LjS9Cvp0lwd6zMcsnA&s" 
        alt="Propriétaire du portfolio"
        className="rounded mx-auto shadow-lg w-[600px] h-[300px]"
      />
    </div>
  </div>
</section>


      {/* Other sections like Projects, Skills, Testimonials, Contact */}
      <section id="projects" className="py-16 bg-gray-800">
  <div className="max-w-7xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold text-teal-400">Mes Projets</h2>
    <div className="mt-8 space-y-8">
      
      {/* Projet 1 */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <img 
          src="https://miro.medium.com/v2/resize:fit:2000/1*RhvV_r6ceVx7_mAcio_pUw.png" 
          alt="Capture du projet 1"
          className="w-full lg:w-1/2 h-50 object-cover"
        />
        {/* Description */}
        <div className="p-4 lg:w-1/2 text-left">
          <h3 className="text-xl font-semibold text-white">Gestionnaire de Tâches</h3>
          <p className="mt-2 text-gray-300 text-base">
            Application React et Firebase pour organiser les tâches avec des fonctionnalités comme la création, mise à jour et suppression.
          </p>
          <div className="mt-4 flex space-x-4">
            {/* Icones GitHub et Démo */}
            <a 
              href="https://github.com/username/task-manager" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-xl hover:text-teal-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://task-manager-demo.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-xl hover:text-teal-500"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Projet 2 */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMRLVc3spPRBLSPwrXaCqyAXEvRZSFMxAoA&s" 
          alt="Capture du projet 2"
          className="w-full lg:w-1/2 h-50 object-cover"
        />
        <div className="p-4 lg:w-1/2 text-left">
          <h3 className="text-xl font-semibold text-white">Plateforme E-commerce</h3>
          <p className="mt-2 text-gray-300 text-base">
            Site e-commerce développé avec Laravel et React, optimisé pour la conversion, avec intégration de paiement.
          </p>
          <div className="mt-4 flex space-x-4">
            <a 
              href="https://github.com/username/ecommerce-platform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-xl hover:text-teal-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://ecommerce-demo.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-xl hover:text-teal-500"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Projet 3 */}
      <div className="flex flex-col lg:flex-row items-center bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__J9PLnfh-3e8fjZ12bg82EggtGk506DyTw&s" 
          alt="Capture du projet 3"
          className="w-full lg:w-1/2 h-50 object-cover"
        />
        <div className="p-4 lg:w-1/2 text-left">
          <h3 className="text-xl font-semibold text-white">Outil de Collaboration</h3>
          <p className="mt-2 text-gray-300 text-base">
            Outil collaboratif en Node.js et MongoDB permettant le suivi en temps réel avec une interface fluide.
          </p>
          <div className="mt-4 flex space-x-4">
            <a 
              href="https://github.com/username/collaboration-tool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-xl hover:text-teal-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://collaboration-tool-demo.heroku.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-xl hover:text-teal-500"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold text-teal-400">Compétences</h2>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
      {/* Skill 1 - React.js */}
      <div className="bg-teal-700 p-6 rounded-lg shadow-lg text-left">
        <div className="flex items-center space-x-4">
          <i className="fab fa-react text-4xl text-blue-400"></i>
          <h3 className="text-xl font-semibold text-white">React.js</h3>
        </div>
        <p className="mt-4 text-gray-300 text-sm">
          Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques.
        </p>
        <div className="mt-4">
          <div className="bg-gray-800 rounded-full h-2 w-full">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-400">Maîtrise: 90%</p>
        </div>
      </div>

      {/* Skill 2 - Node.js */}
      <div className="bg-teal-700 p-6 rounded-lg shadow-lg text-left">
        <div className="flex items-center space-x-4">
          <i className="fab fa-node-js text-4xl text-green-400"></i>
          <h3 className="text-xl font-semibold text-white">Node.js</h3>
        </div>
        <p className="mt-4 text-gray-300 text-sm">
          Environnement d'exécution pour construire des applications back-end performantes.
        </p>
        <div className="mt-4">
          <div className="bg-gray-800 rounded-full h-2 w-full">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-400">Maîtrise: 85%</p>
        </div>
      </div>

      {/* Skill 3 - Tailwind CSS */}
      <div className="bg-teal-700 p-6 rounded-lg shadow-lg text-left">
        <div className="flex items-center space-x-4">
          <i className="fab fa-css3-alt text-4xl text-teal-300"></i>
          <h3 className="text-xl font-semibold text-white">Tailwind CSS</h3>
        </div>
        <p className="mt-4 text-gray-300 text-sm">
          Framework CSS utilitaire pour créer rapidement des interfaces élégantes.
        </p>
        <div className="mt-4">
          <div className="bg-gray-800 rounded-full h-2 w-full">
            <div className="bg-teal-400 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-400">Maîtrise: 80%</p>
        </div>
      </div>

      {/* Skill 4 - MongoDB */}
      <div className="bg-teal-700 p-6 rounded-lg shadow-lg text-left">
        <div className="flex items-center space-x-4">
          <i className="fas fa-database text-4xl text-green-400"></i>
          <h3 className="text-xl font-semibold text-white">MongoDB</h3>
        </div>
        <p className="mt-4 text-gray-300 text-sm">
          Base de données NoSQL conçue pour la gestion efficace des données.
        </p>
        <div className="mt-4">
          <div className="bg-gray-800 rounded-full h-2 w-full">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-400">Maîtrise: 75%</p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-teal-400">Témoignages</h2>
          <div className="mt-12 space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <p className="text-lg italic">"Un professionnel incroyable. Il a transformé notre idée en une application qui a dépassé nos attentes."</p>
              <h3 className="mt-4 text-xl font-semibold">Claire, Responsable Marketing</h3>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <p className="text-lg italic">"Une collaboration fluide et des résultats exceptionnels. Le projet a été livré à temps avec une qualité de code parfaite."</p>
              <h3 className="mt-4 text-xl font-semibold">Marc, Directeur Technique</h3>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <p className="text-lg italic">"Je recommande vivement ce développeur. Il sait répondre aux besoins spécifiques et propose des solutions adaptées."</p>
              <h3 className="mt-4 text-xl font-semibold">Julie, CEO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-teal-400">Contactez-moi</h2>
          <p className="mt-4 text-lg">Envoyez-moi un message pour discuter de votre prochain projet ou de collaboration.</p>
          <form className="mt-12 space-y-6">
            <input type="text" placeholder="Nom" className="w-full px-4 py-2 border border-gray-500 rounded-md text-gray-900" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-500 rounded-md text-gray-900" />
            <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-500 rounded-md text-gray-900"></textarea>
            <button className="w-full bg-teal-500 text-white py-2 rounded-md">Envoyer</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-500 py-6 text-white text-center">
  <div className="max-w-7xl mx-auto">
    <p>Suivez-moi sur mes réseaux sociaux</p>
    <div className="mt-4 flex justify-center space-x-6">
      {/* Facebook */}
      <a href="#" aria-label="Facebook" className="hover:text-teal-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.406.593 24 1.325 24H12v-9.294H9.294v-3.294H12V8.412c0-2.677 1.633-4.137 4.02-4.137 1.144 0 2.129.084 2.414.123v2.798h-1.653c-1.296 0-1.548.616-1.548 1.52v1.992h3.097l-.403 3.294H15.23V24h7.445C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
        </svg>
      </a>

      {/* Twitter */}
      <a href="#" aria-label="Twitter" className="hover:text-teal-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557a9.94 9.94 0 01-2.828.775A4.94 4.94 0 0023.337 3a9.885 9.885 0 01-3.127 1.194 4.926 4.926 0 00-8.388 4.482A13.978 13.978 0 011.671 3.149a4.926 4.926 0 001.523 6.574A4.903 4.903 0 01.96 9.09v.06a4.926 4.926 0 003.946 4.827 4.928 4.928 0 01-2.224.085 4.927 4.927 0 004.6 3.42A9.867 9.867 0 010 20.017 13.932 13.932 0 007.548 22c9.142 0 14.307-7.721 14.307-14.417 0-.219-.005-.437-.014-.653A10.243 10.243 0 0024 4.557z" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="#" aria-label="Instagram" className="hover:text-teal-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608C4.518 2.497 5.785 2.225 7.151 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332 0 7.052.07 5.74.141 4.467.414 3.396 1.486 2.325 2.558 2.052 3.832 1.98 5.143.91 6.423.91 6.832.91 12s0 5.578.07 6.857c.071 1.31.344 2.584 1.415 3.656 1.071 1.071 2.345 1.344 3.656 1.415 1.279.07 1.688.07 6.859.07s5.578 0 6.857-.07c1.31-.071 2.584-.344 3.656-1.415 1.071-1.071 1.344-2.345 1.415-3.656.07-1.279.07-1.688.07-6.857s0-5.578-.07-6.857c-.071-1.31-.344-2.584-1.415-3.656C20.88.414 19.606.141 18.295.07 17.015 0 16.606 0 12 0z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a href="#" aria-label="LinkedIn" className="hover:text-teal-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.5 3A2.502 2.502 0 0122 5.5v13A2.502 2.502 0 0119.5 21h-15A2.502 2.502 0 012 18.5v-13A2.502 2.502 0 014.5 3h15zM8.775 17.25V9.63h-2.7v7.62h2.7zm-1.38-8.687c.993 0 1.576-.662 1.576-1.487 0-.835-.592-1.487-1.602-1.487s-1.575.652-1.575 1.487c0 .825.573 1.487 1.57 1.487h.031zm10.605 8.687v-4.308c0-1.079-.384-1.813-1.349-1.813-.738 0-1.175.497-1.367.975-.07.167-.088.398-.088.63v4.516h-2.7v-7.62h2.7v1.04h.038c.356-.562 1-1.368 2.337-1.368 1.635 0 2.872 1.088 2.872 3.428v4.52h-2.7z" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
