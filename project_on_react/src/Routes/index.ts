import { ThisRoutes } from "./ThisRoutes"
import { useRoutes } from 'react-router-dom';
import { ProjectRoute } from "./ProjectRoute"

function Myrouterdom(){
    return useRoutes([ThisRoutes,ProjectRoute])
}
export default Myrouterdom

