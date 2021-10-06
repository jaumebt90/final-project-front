import React from "react";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* columna 1 */}
          <div className="col">
            <h4> Created by: </h4>
            <ul className="list-unstyled">
              <li>Roberto Alonso</li>
              <li>Jaume Ballester </li>
            </ul>
          </div>
          {/* columna 2 */}
          <div className="col">
            <h4> Ironhack </h4>
            <ul className="list-unstyled">
              <li>Web Development Bootcamp</li>
              <li>Barcelona 2021</li>
            </ul>
          </div>
          {/* columna 3 */}
        </div>
      </div>
    </div>
  );
}
