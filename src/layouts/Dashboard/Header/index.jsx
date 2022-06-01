import Sidebar from './Sidebar';
import Topbar from './Topbar';
const DashboardHeader = () => {
  return (
    <>
      {/* <div id="loading" onMouseOver={(event)=>{
                setTimeout(()=>{
                    
                    event.target.style.display = 'none';
                },1500)
            }}>
                <div id="loading-center">
                </div>
            </div> */}
      <div></div>
      <Sidebar />
      <Topbar />
    </>
  );
};

export default DashboardHeader;
