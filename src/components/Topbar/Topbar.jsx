import './Topbar.scss';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Intro</a>
        </div>
        <div className="right">
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
