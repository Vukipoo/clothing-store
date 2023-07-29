import './categories.styles.scss'


const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
    },
    {
      id: 2,
      title: 'shoes',
    },
    {
      id: 3,
      title: 'mens',
    },
    {
      id: 4,
      title: 'womens',
    },
    {
      id: 5,
      title: 'shirts',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
      <div className="category-container">
        <div className="background-image" />
        <div className="category-body-container">
          <h2>{ title }</h2>
          <p>Show Now</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
