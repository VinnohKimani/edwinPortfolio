import React from 'react'

function FooterSection() {
  return (
    <footer className=" py-8  bg-[rgb(35,41,97)]">
      <div className="text-center text-[rgb(250,181,21)]">
        © {new Date().getFullYear()} Edwin Ruto. All Rights Reserved
      </div>
    </footer>
  );
}

export default FooterSection