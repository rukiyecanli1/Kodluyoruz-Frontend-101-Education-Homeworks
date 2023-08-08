import Button from 'styledbtnx';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} text="Default Button" />
      <Button onClick={handleClick} text="Primary Button" type="primary" />
      <Button onClick={handleClick} text="Dashed Button" type="dashed" />
      <Button onClick={handleClick} text="Text Button" type="text" />
      <Button onClick={handleClick} text="Link Button" type="link" />
    </div>
  );
};

export default App;