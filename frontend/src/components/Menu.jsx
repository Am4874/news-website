function Menu({ active, setActive, setCategory }) {
  const links = [
    {
      id: 1,
      name: "General",
      value: "general",
    },
    {
      id: 2,
      name: "Bussiness",
      value: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      value: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      value: "health",
    },
    {
      id: 5,
      name: "Science",
      value: "science",
    },
    {
      id: 6,
      name: "sports",
      value: "sports",
    },
    {
      id: 7,
      name: "Technology",
      value: "technology",
    },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <div>
      <nav className="menu">
        <ul className="menu-list">
          {links.map((link) => (
            <li
              key={link.id}
              className={active === link.id ? "active" : "inactive"}
              onClick={() => onClick(link.id, link.value)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
