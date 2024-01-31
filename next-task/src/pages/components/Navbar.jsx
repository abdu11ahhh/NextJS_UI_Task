import React from 'react';

function Navbar() {
  const navItems = [
    'Stock Video',
    'Video Template',
    'Music',
    'Sound Effects',
    'Graphics',
    'Presentation Templates',
    'Photos',
    'Fonts',
    'Add-ons',
    'More',
  ];
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap lg:text-[16px] text-[12px] lg:px-8 px-4  lg:py-3 py-2 gap-[16px] shadow-md lg:justify-between">
        {navItems.map((items, index) => {
          return (
            <ul key={index}>
              <li>
                <a href="">{items}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
