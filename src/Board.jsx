import React from 'react';
import Card from './Card';
import './Board.css'

function Board() {
    const resources = [
        {
            title: "React Documentation",
            description: "Official React.js documentation.",
            link: "https://reactjs.org/",
            imageUrl: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"

        },
        {
            title: "MDN Web Docs",
            description: "Resources for developers, by developers.",
            link: "https://developer.mozilla.org/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MDN_Web_Docs_logo.svg/2560px-MDN_Web_Docs_logo.svg.png"
        },
        {
            title: "Coursera",
            description: "Online courses from various universities.",
            link: "https://www.coursera.org/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            title: "Udemy",
            description: "Online courses on various topics.",
            link: "https://www.udemy.com/",
            imageUrl: "https://logowik.com/content/uploads/images/udemy-new-20212512.jpg"
        },
        {
            title: "CodePath",
            description: "Online coding courses.",
            link: "https://codepath.org/",
            imageUrl: "https://www.codepath.org/hubfs/Logos/CodePathLogoMedium.png"
        },
        {
            title: "YouTube",
            description: "A platform for sharing and viewing videos.",
            link: "https://www.youtube.com/",
            imageUrl: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        },
        {
            title: "Google",
            description: "Search engine giant.",
            link: "https://www.google.com/",
            imageUrl: "https://blog.hubspot.com/hubfs/image8-2.jpg"
        },
        {
            title: "GitHub",
            description: "Platform for hosting and collaborating on code.",
            link: "https://github.com/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
        },
        {
            title: "Stack Overflow",
            description: "A community for developers to learn and share knowledge.",
            link: "https://stackoverflow.com/",
            imageUrl: "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-ar21.png"
        },
        {
            title: "FreeCodeCamp",
            description: "A community that helps you learn to code.",
            link: "https://www.freecodecamp.org/",
            imageUrl: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg"
        }
    ];
    
  return (
    <div className="board">
      {resources.map((resource, index) => (
            
  
  
                <Card
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                imageUrl={resource.imageUrl}
                />
         
        
      ))}
    </div>
  );
}

export default Board;
