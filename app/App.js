import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  	render(){
  		let resume = {
  "basics": {
    "name": "Thorn Winter",
    "label": "Junior Developer",
    "picture": "http://www.hookandshadow.com/thornwinter.png",
    "email": "thornwinter@gmail.com",
    "phone": "(845) 332-4627",
    "website": "http://thornwinter.io",
    "summary": "Thorn is a New Yorker. He has earned a degree in Graphic Design and a Cerificate in Front End Web Development. Thorn is transitioning into web development from his former career as a seasoned manager in the construction and manufacturing industries. Thorn is seeking a junior developer's position on an established development team so he can continue to gain skills and experience while completing his certifications in Data Visualization and Back End Development.",
    "location": {
      "address": "15 Little Pond Road",
      "postalCode": "12747",
      "city": "Hurleyville",
      "countryCode": "US",
      "region": "New York"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "ThornWinter",
        "url": "https://github.com/thornwinter"
      },
      {
        "network": "LinkedIn",
        "username": "ThornWinter",
        "url": "https://www.linkedin.com/in/thornwinter"
      }
    ]
  },
  "work": [
    {
      "company": "Hook & Shadow",
      "position": "Lead Developer",
      "website": "http://hookandshadow.com",
      "startDate": "2016-04-01",
      "endDate": "",
      "summary": "Hook & Shadow is a web development firm operating out of Middletown, New York and serving the web development needs of individuals and small businesses.",
      "highlights": [
        "",
        "",
        ""
      ]
    },
    {
      "company": "CorkandCode.com",
      "position": "Front End Web Development Instructor",
      "website": "http://corkandcode.com",
      "startDate": "2016-04-01",
      "endDate": "",
      "summary": "CorkandCode.com partners with licensed venues to offer web development workshops with wine and food for which every attendee completes a web development project.",
      "highlights": [
        ""
      ]
    },
    {
      "company": "Viking Industries",
      "position": "Second Shift Supervisor",
      "website": "http://www.vikingindustries.net",
      "startDate": "2011",
      "endDate": "2015",
      "summary": "Viking Industries is a corrugated fiberboard converter producing high volumes of packaging and promotional materials for businesses.",
      "highlights": [
        "Champion of continouos improvment teams resulting in 28% overall improvement in plant efficiency.",
        "Champion of safety committee tasked with reducing plant injuries and increasing safety awareness and best practices."
      ]
    },
    {
      "company": "Mountain Gardens Landscaping",
      "position": "Site Supervisor",
      "website": "http://www.mountain-gardens.com",
      "startDate": "2002",
      "endDate": "2012",
      "summary": "Mountain Gardens is a landscape design and installation company working in the Woodstock, NY and Saugerties, NY areas.",
      "highlights":[
        "Built company website",
        "Trained new employees",
        "Ensured safety, quality, and work pace of two to three subordinates."
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "FreeCodeCamp",
      "position": "Group Leader",
      "website": "https://freecodecamp.com/",
      "startDate": "2015-11-01",
      "endDate": "",
      "summary": "Global not for profit organization supporting web development education and career building.",
      "highlights": [
        "Leader of FreeCodeCamp Middletown, NY"
      ]
    }
  ],
  "education": [
    {
      "institution": "Sullivan County Community College",
      "area": "Liberal Arts",
      "studyType": "Associate",
      "startDate": "",
      "endDate": "",
      "gpa": "3.4",
      "courses": [
        "Graphic Design",
        "Media Writing",
        "Design Fundamentals"
      ]
    }
  ],
  "awards": [
    {
      "title": "",
      "date": "",
      "awarder": "",
      "summary": ""
    }
  ],
  "publications": [
    {
      "name": "",
      "publisher": "Hooli",
      "releaseDate": "",
      "website": "",
      "summary": ""
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "Entry Level",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript",
        "SASS",
        "jQuery",
        "Wordpress",
        "GitHub",
        "Linux",
        "Sublime Text",
        "Photoshop",
        "Bootstrap"
      ]
    },
    {
      "name": "Project Management",
      "level": "Professional",
      "keywords": [
        "Agile",
        "Scrum"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    },
    {
      "language": "Spanish",
      "fluency": "Working fluency"
    }
  ],
  "interests": [
    {
      "name": "Learning about programming",
      "keywords": [
        "Angular",
        "Node",
        "MongoDB",
        "Redis",
        "D3",
        "SQL",
        "PHP",
        "React"
      ]
    }
  ],
  "references": [
    {
      "name": "",
      "reference": ""
    }
  ]
};
    	return (
      		<h1>Hello {resume.basics.name}</h1>
    	);
  	}
}

render(<App />, document.getElementById('root'));
