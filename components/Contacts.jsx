import React from "react";

import "@/style/contacts.css";
import Link from "next/link";

/*
  Source code of link buttons: https://codepen.io/davidpottrell/pen/MYabyp/
*/

const Contacts = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Contact Links
      </h1>
      <div id="social-platforms">
        <Link
          class="btn btn-icon btn-github"
          href="https://github.com/softwareVirus"
          target="_blank"
        >
          <i class="fa fa-github"></i>
          <span>Github</span>
        </Link>
        <Link
          class="btn btn-icon btn-linkedin"
          href="https://www.linkedin.com/in/ibrahim-halil-sakli-83a5061b1/"
          target="_blank"
        >
          <i class="fa fa-linkedin"></i>
          <span>LinkedIn</span>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
