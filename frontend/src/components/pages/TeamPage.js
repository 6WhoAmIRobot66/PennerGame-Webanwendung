import React from "react";
import "./Team.css";

import tinaImage from "./profilepictures/tinaprof.jpg";
import janImage from "./profilepictures/magejan.JPG";
import mauriceImage from "./profilepictures/songoku.jpg";
import tobiImage from "./profilepictures/tobiprof.jpg";

const tinaImageSrc = tinaImage;
const janImageSrc = janImage;
const mauriceImageSrc = mauriceImage;
const tobiImageSrc = tobiImage;

const teamMembers = [
  {
    name: "Maurice 'MauriceTre'",
    position: "Frontend Designer / Developer",
    bio: "Ein leidenschaftlicher Entwickler mit einem Auge für Design und Benutzererfahrung.",
    image: mauriceImageSrc,
  },
  {
    name: "Tobias 'Tobi' / 'Tavirp'",
    position: "Backend Developer",
    bio: "Ein erfahrener Programmierer mit einem Hintergrund in Datenbanken und Systemarchitektur.",
    image: tobiImageSrc,
  },
  {
    name: "Justina 'Tina' / 'sturmsrobot'",
    position: "Backend Developer",
    bio: "Ein Technologie-Enthusiastin, die sich auf die Automatisierung von Entwicklungs- und Betriebsprozessen konzentriert.",
    image: tinaImageSrc,
  },
  {
    name: "Jan 'stud3ntjan'",
    position: "Frontend Designer",
    bio: "Ein kreativer Designer, der sich darauf konzentriert, einfache und intuitive Benutzeroberflächen zu gestalten.",
    image: janImageSrc,
  },
];

function Team() {
  return (
    <div className="team">
      <h1>Unser Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="team-member-info">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <div>
                <h2>{member.name}</h2>
                <p>{member.position}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="call-to-action">
        <div className="cta-box">
          <p>
            Du möchtest auch so eine Seite entwerfen? Deine Skills verbessern?
            Dann klicke{" "}
            <a href="https://techstarter.de" target="_blank" rel="noreferrer">
              HIER
            </a>
            , um mehr Infos zu bekommen und dich für eine Weiterbildung zu
            entscheiden.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
