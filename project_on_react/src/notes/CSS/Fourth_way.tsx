
import './Fourth_way_style_css.css'
export const Fourth_way: React.FC =()=>{
    return <div>
                <h1> This is pure css with tag target</h1>
        <div id="style">
            this is pure css id target
        </div>

        <div className="style2">
            this is pure css class target
        </div>
    </div>
}