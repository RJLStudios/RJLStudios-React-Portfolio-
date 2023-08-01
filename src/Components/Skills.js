import react from "react";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills-carousel">
        <div className="Overflow">
          <div className="Wrapper">
            <div className="Logo-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="HTML img"></img>
            </div>
            <div className="Logo-item">
              <img src="https://velog.velcdn.com/images/cj98123/post/5c10455d-7d0e-474d-8737-121cdfccc482/image.png" alt="CSS img"></img>
            </div>
            <div className="Logo-item">
              <img src="https://i1.wp.com/www.ayrodynamic.org.uk/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1" alt="JS img"></img>
            </div>
            <div className="Logo-item">
              <img src="https://spin.atomicobject.com/wp-content/uploads/React.png" alt="React img"></img>
            </div>
            <div className="Logo-item">
              <img
                src="https://vectorlogoseek.com/wp-content/uploads/2020/06/figma-vector-logo.png"
                className="Figma"
                alt="Figma img"
                style={{ height: "120px" }}
              ></img>
            </div>
            <div className="Logo-item">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                className="Github"
                alt="GIthub img"
                style={{ height: "40px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
