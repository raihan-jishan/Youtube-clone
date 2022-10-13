// mui customization
import { Stack } from '@mui/system';
// react router dom 
import { Link } from 'react-router-dom';
//import SearchBar 
import { SearchBar } from '../';
// youtube us version logo
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{position: "sticky", background: '#000',top:0, justifyContent: 'space-between', }}>
    {/* increament link components  */}
    <Link to="/" style={{display: "flex", alignItems:"center"}}>
    {/* import img logo 🙄   */}
    <div className='LogoContainer'>
    <h3><span>Vm</span>edia  </h3>
    </div>
    </Link>
  <SearchBar />
    </Stack>
  
)

export default Navbar;