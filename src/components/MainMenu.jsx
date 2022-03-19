import { DownOutlined } from '@ant-design/icons';

const MainMenu =(props) =>{
 return  (<div className='flex gap-1 items-center'>
        
 <a href='/{props.title}' className='text-1xl font-bold'>{props.title}</a>   
   {/* <img src="/images/drop-down.png" className='w-4 h-7' alt="" /> */}
{props.icon && <DownOutlined  className="text-xs text-green-900
"/>}

</div>
         )
                         } ;

export default MainMenu ;