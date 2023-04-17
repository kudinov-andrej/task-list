import './AppTitle.css';

function AppTitle(props) {
  return (    
      <h2 className='app__title'>{props.title}</h2>
  );
}

export default AppTitle;