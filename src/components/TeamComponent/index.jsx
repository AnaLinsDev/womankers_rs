import "../../App.css";
import Avatar from "@mui/material/Avatar";

import teamImage from "../../assets/team_image.png";

export default function TeamComponent() {
  
  const hasWindow = typeof window !== 'undefined';

  function getWindowMobile() {
    const width = hasWindow ? window.innerWidth : null;
    console.log("width: " + width)
    return width < 620
  }

  return (
    <div className="home_component">
      <div className="mw-800 justify-text">
        <h3>Conheça nossa equipe!</h3>

        <div className="flex">
          {getWindowMobile() ? (
            ""
          ) : (
            <Avatar
              alt="Remy Sharp"
              src={teamImage}
              sx={{ width: 220, height: 220 }}
            />
          )}

          <div className="mx-50 justify-text">
            <h2>Title</h2>
            <p>&quot; Little Phrase Here &quot;</p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
